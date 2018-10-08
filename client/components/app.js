import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import * as type from './constants/actions';

const mapStateToProps = state => {
  return {
    user: state
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  submitForm(e) {
    e.preventDefault();
    let userNameVal = document.getElementById('user_input').value;
    let messageVal = document.getElementById('message_input').value;
    store.dispatch(type.updateUserMessages(userNameVal,messageVal))

  }
  render() {
    return (
      <div>
          User: <input id="user_input" />
          Message: <input id="message_input" />
          <button onClick={(e) => this.submitForm(e)}>Submit</button>
      </div>
    )
  }
}


export default connect(mapStateToProps)(App);