/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import client from './config/api'
import RootStack from './navigation/RootStackNavigation'

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStack />
      </ApolloProvider>
    )
  }
}

const styles = StyleSheet.create({})
