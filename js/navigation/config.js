import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import { Header } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'
import HamburgerMenu from '../components/HamburgerMenu'

const GradientHeader = props => (
  <View style={{ backgroundColor: 'white', overflow: 'hidden' }}>
    <LinearGradient
      colors={['#cf392a', '#9963ea']}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 64, width: '100%' }]}
    />
    <Header {...props} />
  </View>
)

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  ...Platform.select({
    ios: {},
    android: {
      headerLeft: <HamburgerMenu pressed={() => navigation.openDrawer()} />
    }
  }),
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent'
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    ...Platform.select({
      ios: { fontFamily: 'Montserrat-light' },
      android: {
        marginLeft: 15,
        fontFamily: 'Montserrat-Regular'
      }
    })
  }
})
