import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.css';
import './style/index.css';
import App from './App';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'http://localhost:4466/',
});

const client = new ApolloClient({
  cache,
  link,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
