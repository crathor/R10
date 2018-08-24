import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  closeBtn: {
    position: 'absolute',
    left: '5%'
  },
  closeBtnText: {
    color: '#ffffff',
    fontSize: 25
  },
  title: {
    fontSize: 20,
    color: '#ffffff'
  },
  header: {
    paddingHorizontal: 10,
    marginTop: 40,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff'
  },
  speakerContainer: {
    backgroundColor: '#ffffff',
    height: '100%',
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  speaker: {
    alignItems: 'center',
    padding: 10
  },
  speakerName: {
    fontSize: 30,
    marginBottom: 20
  },
  speakerBio: {
    fontSize: 18,
    lineHeight: 30
  }
})

export default styles
