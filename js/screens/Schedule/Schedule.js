import React from 'react'
import SessionList from '../../components/SessionList'

const Schedule = ({ sessions, navigate }) => (
  <SessionList sessions={sessions} navigate={navigate} />
)

export default Schedule
