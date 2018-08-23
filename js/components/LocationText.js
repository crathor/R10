import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FavesContext from '../context/FavesContext'

const heart = Platform.select({
  ios: 'ios-heart',
  android: 'md-heart'
})
const LocationText = ({ location, sessionId }) => {
  return (
    <FavesContext.Consumer>
      {value => {
        const faveList = value.faveIds.map(f => f.id)
        console.log(faveList)
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8
  },
  text: {
    color: '#999999',
    fontSize: 18,
    fontFamily: 'Montserrat-light'
  }
})

export default LocationText
