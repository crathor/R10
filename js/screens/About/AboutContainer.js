import React, { Component } from 'react'
import { Text, ActivityIndicator } from 'react-native'
import About from './About'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const CODE_OF_CONDUCT = gql`
  {
    allConducts {
      id
      title
    }
  }
`

export default class AboutContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Query query={CODE_OF_CONDUCT}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator size="large" />
          if (error) return <Text>Error! {error.message}</Text>
          console.log(data)
          return <About codeOfConduct={data} />
        }}
      </Query>
    )
  }
}
