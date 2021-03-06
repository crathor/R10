import React, { Component } from 'react'
import { Text } from 'react-native'
import Faves from './Faves'
import FavesContext from '../../context/FavesContext'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { formatSessionData } from '../../lib/formatSessionData'
import Loader from '../../components/Loader'
import PropTypes from 'prop-types'

const GET_FAVES = gql`
  {
    allSessions {
      id
      location
      startTime
      title
    }
  }
`

export default class FavesContainer extends Component {
  static navigationOptions = {
    title: 'Favorites'
  }
  navigateToSession(id) {
    this.props.navigation.navigate('Session', { sessionID: id })
  }
  render() {
    return (
      <FavesContext.Consumer>
        {value => {
          return (
            <Query query={GET_FAVES}>
              {({ loading, error, data }) => {
                if (loading) return <Loader />
                if (error) return <Text>{`Error: ${error}`}</Text>
                // const filtered = data.allSessions.filter(session =>
                //   value.faveIds.includes(session.id)
                // )
                const faveIds = value.faveIds.map(fave => fave.id)
                const faves = data.allSessions.filter(session => {
                  if (faveIds.includes(session.id)) return session
                })

                return (
                  <Faves
                    faves={formatSessionData(faves)}
                    navigate={id => this.navigateToSession(id)}
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

FavesContainer.propTypes = {
  navigation: PropTypes.object.isRequired
}
