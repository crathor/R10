import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import LocationText from '../LocationText'

const SectionCard = ({ item, pressed, styles }) => {
  return (
    <TouchableHighlight onPress={pressed}>
      <View style={styles.section}>
        <Text style={styles.title}>{item.title}</Text>
        <LocationText location={item.location} sessionId={item.id} />
      </View>
    </TouchableHighlight>
  )
}

export default SectionCard
