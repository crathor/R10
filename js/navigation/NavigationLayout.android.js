import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import ScheduleScreen from '../screens/Schedule'
import SessionScreen from '../screens/Session'
import AboutScreen from '../screens/About'
import FavesScreen from '../screens/Faves'
import MapsScreen from '../screens/Maps'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { sharedNavigationOptions } from './config'

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
)
const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
)
const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen,
    Session: SessionScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
)
const MapsStack = createStackNavigator(
  {
    Map: MapsScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
)
const renderIcon = (iconName, tintColor) => {
  return <Ionicons name={iconName} size={25} color={tintColor} />
}

AboutStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon('md-information-circle', tintColor)
}
MapsStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon('md-map', tintColor)
}
ScheduleStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon('md-calendar', tintColor)
}
FavesStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon('md-heart', tintColor)
}
export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapsStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    contentOptions: {
      activeTintColor: '#9963ea'
    }
  }
)
