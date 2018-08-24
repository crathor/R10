import React from 'react'
import { View, Text, Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FavesContext from '../../context/FavesContext'
import styles from './styles'

const heart = Platform.select({
  ios: 'ios-heart',
  android: 'md-heart'
})
const LocationText = ({ location, sessionId }) => {
  return (
    <FavesContext.Consumer>
      {value => {
        const faveList = value.faveIds.map(f => f.id)
        return (
          <View style={styles.container}>
            <Text style={styles.text}>{location}</Text>
            {faveList.includes(sessionId) && (
              <Ionicons name={heart} size={18} color={'red'} />
            )}
          </View>
        )
      }}
    </FavesContext.Consumer>
  )
}

export default LocationText
