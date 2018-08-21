import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15
  }
})
export default Title
