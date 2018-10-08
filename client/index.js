import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ReactDOM from 'react-dom';
import App from './components/app';

// Apollo 1.4.6
import { ApolloProvider, createNetworkInterface } from 'react-apollo';

// Apollo 2.2.4
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:3000/graphql'}),
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App client={client} />
    </Provider>
  </ApolloProvider>, document.getElementById('root')
)