import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { globalStyles } from '../../config/styles'

const EmptyList = () => {
  return (
    <View
      style={StyleSheet.flatten([globalStyles.section, globalStyles.mainFont])}
    >
      <Text style={globalStyles.title}>No Items</Text>
    </View>
  )
}

export default EmptyList
