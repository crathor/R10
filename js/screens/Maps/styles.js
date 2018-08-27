import { Dimensions, StyleSheet } from 'react-native'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height
  }
})

export default styles
