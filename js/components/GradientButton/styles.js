import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
  buttonContainer: {
    height: 60,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
    ...Platform.select({
      ios: {},
      android: {
        marginTop: 20
      }
    })
  },
  button: {
    height: 55,
    borderRadius: 50,
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20
  }
})

export default styles
