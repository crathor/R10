import React, { Component } from 'react'
import Maps from './Maps'
import PropTypes from 'prop-types'

export default class MapsContainer extends Component {
  static navigationOptions = {
    title: 'Maps'
  }
  constructor(props) {
    super(props)
    this.state = {
      region: {
        latitude: 49.2637225,
        longitude: -123.1405315,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    }
  }

  render() {
    return <Maps region={this.state.region} />
  }
}

MapsContainer.propTypes = {
  navigation: PropTypes.object.isRequired
}
