/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { UIManager, StatusBar, Platform } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import client from './config/api'
import RootStack from './navigation/RootStackNavigation'
import { FavesProvider } from './context/FavesContext'
import SplashScreen from 'react-native-splash-screen'

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true)
export default class App extends Component {
  componentDidMount() {
    Platform.select({
      ios: SplashScreen.hide(),
      android: () => {}
    })
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <StatusBar barStyle="light-content" />
          <RootStack />
        </FavesProvider>
      </ApolloProvider>
    )
  }
}
