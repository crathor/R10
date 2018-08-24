import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

const Spacer = ({ height }) => (
  <View style={{ height, BackgroundColor: '#e6e6e6', width: '100%' }} />
)

Spacer.propTypes = {
  height: PropTypes.string,
  height: PropTypes.number
}

export default Spacer
