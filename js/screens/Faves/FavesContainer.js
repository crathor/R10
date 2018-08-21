import React, { Component } from 'react'
import Faves from './Faves'

export default class FavesContainer extends Component {
  static navigationOptions = {
    title: 'Favorites'
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <Faves />
  }
}
