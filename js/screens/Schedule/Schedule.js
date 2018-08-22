import React from 'react'
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import Moment from 'moment'
import Spacer from '../../components/Spacer'

const Schedule = ({ sessions, navigate }) => {
  return (
    <SectionList
      renderItem={({ item }) => (
        <TouchableHighlight onPress={() => navigate(item.id)}>
          <View key={item.id} style={styles.section}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.location}>{item.location}</Text>
          </View>
        </TouchableHighlight>
      )}
      stickySectionHeadersEnabled={false}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>
          {Moment(title).format('h:mm A')}
        </Text>
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
