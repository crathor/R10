import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
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
    Faves: FavesScreen
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

export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapsStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case 'Schedule':
            iconName = `ios-calendar`
            break
          case 'Map':
            iconName = `ios-map`
            break
          case 'Faves':
            iconName = `ios-heart${focused ? '' : '-empty'}`
            break
          case 'About':
            iconName = `ios-information-circle${focused ? '' : '-outline'}`
            break
          default:
            iconName = `ios-bug`
            break
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'grey',
      labelStyle: {
        fontSize: 10,
        fontFamily: 'Montserrat'
      },
      style: {
        backgroundColor: 'black',
        shadowColor: 'black',
        shadowOffset: {
          height: -2
        },
        shadowOpacity: 0.5,
        shadowRadius: 2
      }
    }
  }
)
