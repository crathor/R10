import React, { Component } from 'react'
import { Text } from 'react-native'
import Schedule from './Schedule'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { formatSessionData } from '../../lib/formatSessionData'
import Loader from '../../components/Loader'
import PropTypes from 'prop-types'

const All_SESSIONS = gql`
  {
    allSessions {
      id
      location
      startTime
      title
      speaker {
        id
      }
    }
  }
`

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule'
  }

  navigateToSession(id) {
    this.props.navigation.navigate('Session', { sessionID: id })
  }
  render() {
    return (
      <Query query={All_SESSIONS}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />
          if (error) return <Text>Error! {error.message}</Text>
          return (
            <Schedule
              sessions={formatSessionData(data.allSessions)}
              navigate={id => this.navigateToSession(id)}
            />
          )
        }}
      </Query>
    )
  }
}

ScheduleContainer.propTypes = {
  navigation: PropTypes.object.isRequired
}
