import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { globalStyles } from '../../config/styles'

const ComingSoon = props => (
  <View style={[styles.container, styles.comingSoonContainer]}>
    <Text style={[globalStyles.mainFont, styles.comingSoonText]}>
      Coming Soon!
    </Text>
  </View>
)

export default ComingSoon
