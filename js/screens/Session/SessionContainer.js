import React, { Component } from 'react'
import { Text, ActivityIndicator } from 'react-native'
import Session from './Session'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_SESSION = gql`
  query getSession($id: ID) {
    Session(id: $id) {
      location
      startTime
      title
      description
      speaker {
        id
        name
        image
      }
    }
  }
`

export default class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session'
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const sessionID = this.props.navigation.getParam('sessionID', '')
    return (
      <Query query={GET_SESSION} variables={{ id: sessionID }}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator size="large" />
          if (error) return <Text>Error! {error.message}</Text>
          return <Session session={data.Session} />
        }}
      </Query>
    )
  }
}
