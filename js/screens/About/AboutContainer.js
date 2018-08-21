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
      description
      order
    }
  }
`

export default class AboutContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conductIdList: [],
      selectedIds: []
    }
  }

  render() {
    return (
      <Query query={CODE_OF_CONDUCT}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator size="large" />
          if (error) return <Text>Error! {error.message}</Text>
          const conductIdList = data.allConducts.map(conduct => conduct.id)
          return <About codeOfConduct={data.allConducts} />
        }}
      </Query>
    )
  }
}
