import React from 'react'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import PropTypes from 'prop-types'

const HamburgerMenu = ({ pressed }) => {
  return (
    <TouchableOpacity style={styles.menu} activeOpacity={0.6} onPress={pressed}>
      <Ionicons name={'md-menu'} size={30} color={'#ffffff'} />
    </TouchableOpacity>
  )
}

HamburgerMenu.propTypes = {
  pressed: PropTypes.func.isRequired
}
export default HamburgerMenu
