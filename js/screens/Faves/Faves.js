import React from 'react'
import SessionList from '../../components/SessionList'
import PropTypes from 'prop-types'

const Faves = ({ faves, navigate }) => (
  <SessionList sessions={faves} navigate={navigate} />
)
export default Faves

Faves.propTypes = {
  faves: PropTypes.array.isRequired,
  navigate: PropTypes.func.isRequired
}
