// global styles
import { StyleSheet, Platform } from 'react-native'

export const globalStyles = StyleSheet.create({
  section: {
    padding: 10,
    backgroundColor: '#fff',
    fontFamily: Platform.select({
      ios: 'Montserrat',
      android: 'Montserrat-Regular'
    })
  },
  sectionHeader: {
    paddingVertical: 4,
    paddingLeft: 10,
    fontFamily: Platform.select({
      ios: 'Montserrat',
      android: 'Montserrat-Regular'
    })
  },
  title: {
    fontFamily: Platform.select({
      ios: 'Montserrat',
      android: 'Montserrat-Regular'
    }),
    fontSize: 18,
    color: '#000000'
  },
  location: {
    color: '#999999',
    fontWeight: 'bold',
    paddingVertical: 7
  },
  mainFont: {
    fontFamily: Platform.select({
      ios: 'Montserrat',
      android: 'Montserrat-Regular'
    }),
    fontSize: 18
  },
  medGrey: {
    color: '#999999'
  },
  lightGrey: {
    color: '#e6e6e6'
  },
  blue: {
    color: '#8797D6'
  },
  purple: {
    color: '#9963ea'
  },
  red: {
    color: '#cf392a'
  }
})

// Medium Grey: #999999
// Light Grey: #e6e6e6
// Blue: #8797D6
// Purple: #9963ea
// Red: #cf392a
