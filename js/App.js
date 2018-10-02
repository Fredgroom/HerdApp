import React, { Component } from 'react';
import RootStack from './navigation/RootStackNavigator';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';

const serviceId = 'cjmgij3cr4nnr0148fjt6p8db';
const httpLink = new HttpLink({
  uri: `https://api.graph.cool/simple/v1/${serviceId}`,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStack />
      </ApolloProvider>
    );
  }
}
