import React, { Component } from 'react'
import { Text } from 'react-native'
import Session from './Session'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import FavesContext from '../../context/FavesContext'
import Loader from '../../components/Loader'
import PropTypes from 'prop-types'

const GET_SESSION = gql`
  query getSession($id: ID) {
    Session(id: $id) {
      id
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
  navigateToSpeaker(id) {
    this.props.navigation.navigate('Speaker', { speakerID: id })
  }
  render() {
    const sessionID = this.props.navigation.getParam(
      'sessionID',
      'cjh2j37mo163p01221qpcklry'
    )
    return (
      <FavesContext.Consumer>
        {value => {
          return (
            <Query query={GET_SESSION} variables={{ id: sessionID }}>
              {({ loading, error, data }) => {
                if (loading) return <Loader />
                if (error) return <Text>Error! {error.message}</Text>
                return (
                  <Session
                    session={data.Session}
                    navigate={id => this.navigateToSpeaker(id)}
                    addFave={value.addFaveSession}
                    removeFave={value.removeFaveSession}
                    faveIds={value.faveIds.map(fave => fave.id)}
                  />
                )
              }}
            </Query>
          )
        }}
      </FavesContext.Consumer>
    )
  }
}

SessionContainer.propTypes = {
  navigation: PropTypes.object.isRequired
}
