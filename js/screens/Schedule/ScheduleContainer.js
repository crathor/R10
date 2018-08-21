import React, { Component } from 'react'
import Schedule from './Schedule'

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule'
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <Schedule />
  }
}
