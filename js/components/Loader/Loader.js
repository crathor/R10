import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import styles from './styles'

const Loader = props => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="#9963ea" />
    </View>
  )
}

export default Loader
