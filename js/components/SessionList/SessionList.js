import React from 'react'
import { SectionList } from 'react-native'
import styles from './styles'
import SectionCard from './SectionCard'
import SectionHeader from './SectionHeader'
import Spacer from '../Spacer'

const SessionList = ({ sessions, navigate }) => (
  <SectionList
    renderItem={({ item }) => (
      <SectionCard
        item={item}
        pressed={() => navigate(item.id)}
        styles={styles}
      />
    )}
    stickySectionHeadersEnabled={false}
    renderSectionHeader={({ section: { title } }) => (
      <SectionHeader title={title} styles={styles.sectionHeader} />
    )}
    ItemSeparatorComponent={() => <Spacer height={1} />}
    sections={sessions}
    keyExtractor={(item, index) => item + index}
  />
)

export default SessionList
