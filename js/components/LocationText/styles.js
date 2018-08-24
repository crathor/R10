import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8
  },
  text: {
    color: '#999999',
    fontSize: 18,
    fontFamily: Platform.select({
      ios: 'Montserrat-light',
      android: 'Montserrat-Regular'
    })
  }
})

export default styles
