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
  getFavedSessionIds() {
    this.setState({ faveIds: getFaves() })
  }
  addFaveSession(sessionId) {
    addToFaves(sessionId)
  }
  removeFaveSession(sessionId) {
    removeFromFaves(sessionId)
  }

  render() {
    return (
      <FavesContext.Provider
        value={{ ...this.state, addFaveSession, removeFavesSession }}
      >
        {this.props.children}
      </FavesContext.Provider>
    )
  }
}
export { FavesProvider }
export default FavesContext
