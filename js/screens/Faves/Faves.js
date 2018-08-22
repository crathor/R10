import React from 'react'
import SessionList from '../../components/SessionList'

const Faves = ({ faves, navigate }) => (
  <SessionList sessions={faves} navigate={navigate} />
)
export default Faves
