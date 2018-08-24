import React from 'react'
import SessionList from '../../components/SessionList'
import PropTypes from 'prop-types'

const Schedule = ({ sessions, navigate }) => (
  <SessionList sessions={sessions} navigate={navigate} />
)

Schedule.propTypes = {
  sessions: PropTypes.array.isRequired,
  navigate: PropTypes.func.isRequired
}

export default Schedule
