import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Schedule from './Schedule'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { formatSessionData } from '../../lib/formatSessionData'
const All_SESSIONS = gql`
  {
    allSessions {
      id
      location
      startTime
      title
    }
  }
`

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule'
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Query query={All_SESSIONS}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator size="large" />
          if (error) return <Text>Error! {error.message}</Text>
          return <Schedule sessions={formatSessionData(data.allSessions)} />
        }}
      </Query>
    )
  }
}
