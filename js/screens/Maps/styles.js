import { Dimensions, StyleSheet } from 'react-native'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height
  },
  comingSoonText: {
    fontSize: 40
  },
  comingSoonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6e6'
  }
})

export default styles
