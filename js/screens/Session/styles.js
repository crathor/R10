import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15
  },
  buttonContainer: {
    height: 60
  },
  button: {
    height: 55,
    width: '70%',
    borderRadius: 50,
    marginTop: 1,
    marginLeft: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Montserrat'
  },
  location: {
    color: '#999999',
    fontWeight: 'bold',
    fontSize: 16
  },
  time: {
    color: '#cf392a',
    fontSize: 18,
    paddingBottom: 10
  },
  description: {
    fontFamily: 'Montserrat-light',
    fontSize: 20,
    lineHeight: 30
  },
  presentedBy: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999999',
    paddingVertical: 10
  },
  speaker: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  speakerName: {
    paddingLeft: 20,
    fontSize: 20,
    fontFamily: 'Montserrat-light',
    fontWeight: 'bold'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  spacer: {
    height: 2,
    backgroundColor: '#e6e6e6',
    marginVertical: 20
  }
})

export default styles
