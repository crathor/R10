import React from 'react'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'

const HamburgerMenu = ({ pressed }) => {
  return (
    <TouchableOpacity style={styles.menu} activeOpacity={0.6} onPress={pressed}>
      <Ionicons name={'md-menu'} size={30} color={'#ffffff'} />
    </TouchableOpacity>
  )
}

export default HamburgerMenu
