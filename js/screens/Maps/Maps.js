import React from 'react'
import { Platform } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import styles from './styles'
import ComingSoon from './ComingSoon'

const Maps = ({ region }) =>
  Platform.select({
    ios: (
      <MapView style={styles.container} region={region}>
        <Marker
          coordinate={region}
          image={require('../../assets/images/map_pin.png')}
        />
      </MapView>
    ),
    android: <ComingSoon />
  })

export default Maps
