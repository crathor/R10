import React from 'react'
import { SectionList, StyleSheet } from 'react-native'
import Spacer from '../../components/Spacer'
import ScheduleHeader from '../../components/ScheduleHeader'
import ScheduleSection from '../../components/ScheduleSection'

const Schedule = ({ sessions, navigate }) => {
  return (
    <SectionList
      renderItem={({ item }) => (
        <ScheduleSection
          item={item}
          pressed={() => navigate(item.id)}
          styles={styles}
        />
      )}
      stickySectionHeadersEnabled={false}
      renderSectionHeader={({ section: { title } }) => (
        <ScheduleHeader title={title} styles={styles.sectionHeader} />
      )}
      ItemSeparatorComponent={() => <Spacer height={1} />}
      sections={sessions}
      keyExtractor={(item, index) => item + index}
    />
  )
}

const styles = StyleSheet.create({
  section: {
    padding: 10,
    backgroundColor: '#fff',
    fontFamily: 'Montserrat'
  },
  sectionHeader: {
    paddingVertical: 4,
    paddingLeft: 10,
    fontFamily: 'Montserrat'
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 18
  },
  location: {
    color: '#999999',
    fontWeight: 'bold',
    paddingVertical: 7
  }
})

export default Schedule
