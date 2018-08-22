import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

const ScheduleSection = ({ item, pressed, styles }) => {
  return (
    <TouchableHighlight onPress={pressed}>
      <View key={item.id} style={styles.section}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default ScheduleSection
