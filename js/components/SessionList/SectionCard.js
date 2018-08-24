import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import LocationText from '../LocationText'
import { globalStyles } from '../../config/styles'
import PropTypes from 'prop-types'

const SectionCard = ({ item, pressed, styles }) => {
  return (
    <TouchableHighlight onPress={item.speaker !== null ? pressed : () => {}}>
      <View style={StyleSheet.flatten([styles.section, globalStyles.mainFont])}>
        <Text style={styles.title}>{item.title}</Text>
        <LocationText location={item.location} sessionId={item.id} />
      </View>
    </TouchableHighlight>
  )
}

SectionCard.propTypes = {
  item: PropTypes.object.isRequired,
  pressed: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired
}
export default SectionCard
