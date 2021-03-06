import React, { Component } from 'react'
import { Text } from 'react-native'
import About from './About'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Loader from '../../components/Loader'
import PropTypes from 'prop-types'

const CODE_OF_CONDUCT = gql`
  {
    allConducts {
      id
      title
      description
      order
    }
  }
`

export default class AboutContainer extends Component {
  static navigationOptions = {
    title: 'About'
  }

  render() {
    return (
      <Query query={CODE_OF_CONDUCT}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />
          if (error) return <Text>Error! {error.message}</Text>
          return <About codeOfConduct={data.allConducts} />
        }}
      </Query>
    )
  }
}

AboutContainer.propTypes = {
  navigation: PropTypes.object.isRequired
}
