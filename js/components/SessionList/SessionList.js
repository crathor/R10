import React from 'react'
import { SectionList, StyleSheet } from 'react-native'
import SectionCard from './SectionCard'
import SectionHeader from './SectionHeader'
import Spacer from '../Spacer'
import { globalStyles } from '../../config/styles'

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
  />
)

export default SessionList
