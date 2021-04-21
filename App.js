import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from './src/scenes/home';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './src/graphql/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;
