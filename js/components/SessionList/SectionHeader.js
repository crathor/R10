import React from 'react'
import { Text } from 'react-native'
import Moment from 'moment'

const SectionHeader = ({ title, styles }) => {
  return <Text style={styles}>{Moment(title).format('h:mm A')}</Text>
}

export default SectionHeader
