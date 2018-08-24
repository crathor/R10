import React from 'react'
import { Text } from 'react-native'
import Moment from 'moment'
import PropTypes from 'prop-types'

const SectionHeader = ({ title, styles }) => {
  return <Text style={styles}>{Moment(title).format('h:mm A')}</Text>
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired
}
export default SectionHeader
