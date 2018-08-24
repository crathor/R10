import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import { globalStyles } from '../../config/styles'

const GradientButton = ({ pressed, title }) => (
  <TouchableOpacity
    style={styles.buttonContainer}
    activeOpacity={0.6}
    onPress={pressed}
  >
    <LinearGradient
      colors={['#8797D6', '#9963ea']}
      start={{ x: 1.0, y: 1.0 }}
      end={{ x: 0.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, styles.button]}
    >
      <Text
        style={StyleSheet.flatten([globalStyles.mainFont, styles.buttonText])}
      >
        {title}
      </Text>
    </LinearGradient>
  </TouchableOpacity>
)

export default GradientButton
