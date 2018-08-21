import React from 'react'
import { View, Text, SectionList, StyleSheet } from 'react-native'
import Moment from 'moment'

const Schedule = ({ sessions }) => {
  return (
    <SectionList
      renderItem={({ item }) => (
        <View key={item.id} style={styles.section}>
          <Text>{item.title}</Text>
          <Text>{item.location}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>
          {Moment(title).format('h:mm A')}
        </Text>
      )}
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
    paddingVertical: 8,
    paddingLeft: 10,
    fontFamily: 'Montserrat'
  }
})

export default Schedule
