import React, { Component } from 'react'
import Maps from './Maps'

export default class MapsContainer extends Component {
  static navigationOptions = {
    title: 'Maps'
  }
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <Maps />
  }
}
