import React, { Component } from 'react'
import { addToFaves, removeFromFaves, getFaves } from '../../config/models'

const FavesContext = React.createContext()

class FavesProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faveIds: []
    }
  }

  componentDidMount() {
    this.getFavedSessionIds()
  }
  getFavedSessionIds = () => {
    try {
      this.setState({ faveIds: getFaves() })
    } catch (error) {
      console.log(error)
    }
  }
  addFaveSession = sessionId => {
    try {
      addToFaves(sessionId)
      this.getFavedSessionIds()
    } catch (error) {
      console.log(error)
    }
  }
  removeFaveSession = sessionId => {
    try {
      console.log(sessionId)
      removeFromFaves(sessionId)
      this.getFavedSessionIds()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSession: this.addFaveSession,
          removeFaveSession: this.removeFaveSession
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    )
  }
}
export { FavesProvider }
export default FavesContext
