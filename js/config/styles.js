// global styles
import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  section: {
    padding: 10,
    backgroundColor: '#fff',
    fontFamily: 'Montserrat'
  },
  sectionHeader: {
    paddingVertical: 4,
    paddingLeft: 10,
    fontFamily: 'Montserrat'
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 18
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
    })
  }
})

// Medium Grey: #999999
// Light Grey: #e6e6e6
// Blue: #8797D6
// Purple: #9963ea
// Red: #cf392a
