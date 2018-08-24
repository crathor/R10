import React from 'react'
import { SectionList, StyleSheet, Text } from 'react-native'
import SectionCard from './SectionCard'
import SectionHeader from './SectionHeader'
import EmptyList from './EmptyList'
import Spacer from '../Spacer'
import { globalStyles } from '../../config/styles'
import PropTypes from 'prop-types'

const SessionList = ({ sessions, navigate }) => (
  <SectionList
    renderItem={({ item }) => (
      <SectionCard
        item={item}
        pressed={() => navigate(item.id)}
        styles={globalStyles}
      />
    )}
    stickySectionHeadersEnabled={false}
    renderSectionHeader={({ section: { title } }) => (
      <SectionHeader
        title={title}
        styles={StyleSheet.flatten([
          globalStyles.sectionHeader,
          globalStyles.mainFont
        ])}
      />
    )}
    ItemSeparatorComponent={() => <Spacer height={1} />}
    sections={sessions}
    keyExtractor={(item, index) => item + index}
    ListEmptyComponent={<EmptyList />}
  />
)

SessionList.propTypes = {
  sessions: PropTypes.array.isRequired,
  navigate: PropTypes.func.isRequired
}
export default SessionList
