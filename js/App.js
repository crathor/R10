/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, UIManager } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import client from './config/api'
import RootStack from './navigation/RootStackNavigation'
import { FavesProvider } from './context/FavesContext'

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true)
export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <RootStack />
        </FavesProvider>
      </ApolloProvider>
    )
  }
}

const styles = StyleSheet.create({})
