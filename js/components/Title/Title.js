import React from 'react'
import { Text } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>

Title.propTypes = {
  children: PropTypes.string.isRequired
}
export default Title
