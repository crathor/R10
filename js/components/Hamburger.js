import React from 'react'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const HamburgerIcon = ({ pressed }) => {
  return (
    <TouchableOpacity
      style={{ marginLeft: 20 }}
      activeOpacity={0.6}
      onPress={pressed}
    >
      <Ionicons name={'md-menu'} size={30} color={'#ffffff'} />
    </TouchableOpacity>
  )
}

export default HamburgerIcon
