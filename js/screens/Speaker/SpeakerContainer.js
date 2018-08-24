import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Speaker from './Speaker'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'

const GET_SPEAKER = gql`
  query getSpeaker($id: ID) {
    Speaker(id: $id) {
      bio
      image
      name
      url
    }
  }
`

export default class SpeakerContainer extends Component {
  static navigationOptions = {
    title: 'Speaker'
  }

  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { navigation } = this.props
    const speakerID = navigation.getParam(
      'speakerID',
      'cjh2ka8z500gs0108v08v6pyk'
    )
    return (
      <Query query={GET_SPEAKER} variables={{ id: speakerID }}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator size="large" />
          if (error) return <Text>Error! {error.message}</Text>
          return (
            <Speaker
              navigateBack={() => navigation.goBack()}
              speaker={data.Speaker}
            />
          )
        }}
      </Query>
    )
  }
}

SpeakerContainer.propTypes = {
  navigation: PropTypes.object.isRequired
}
