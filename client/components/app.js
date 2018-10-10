import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import * as type from './constants/actions';
import * as queries from './queries/queries';


// Redux Apollo Link
import WaspLinkMutate from '../WaspReduxApolloLink/WaspReduxApolloLinkMutate';
import WaspLinkQuery from '../WaspReduxApolloLink/WaspReduxApolloQuery';

// Wasp Fetch
import WaspFetch from '../WaspFetch/WaspFetch';

let API = 'http://localhost:3000/graphql';

const mapStateToProps = state => {
  return {
    user: state
  }
}
class App extends Component {
  constructor(props) {
    super(props);
  }

  submitForm(e) {
    e.preventDefault();
    let userNameVal = document.getElementById('user_input').value;
    let messageVal = document.getElementById('message_input').value;
    store.dispatch(type.updateUserMessages(userNameVal,messageVal))

  }

  getUsers(e, props) {
    e.preventDefault();
    WaspLinkQuery(props, queries.getAllUsers)
    WaspFetch(store, type.getUser, API, queries.getAllUsersWaspFetch)
  }
  render() {
    return (
      <div>
          User: <input id="user_input" />
          Message: <input id="message_input" />
          <button onClick={(e) => this.submitForm(e)}>Get User</button>
          <br />
          <br />
          <br />
          <button onClick={(e) => this.getUsers(e, this.props)}>Get Users</button>
      </div>
    )
  }
}


export default connect(mapStateToProps)(App);