import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import styles from './styles'

const Maps = ({ region }) => {
  return (
    <MapView style={styles.container} region={region}>
      <Marker
        coordinate={region}
        image={require('../../assets/images/map_pin.png')}
      />
    </MapView>
  )
}

export default Maps
