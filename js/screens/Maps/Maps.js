import React from 'react'
import { Platform } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import styles from './styles'
import ComingSoon from './ComingSoon'
import PropTypes from 'prop-types'

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

Maps.propTypes = {
  region: PropTypes.object.isRequired
}
export default Maps
