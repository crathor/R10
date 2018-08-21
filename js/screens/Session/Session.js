import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Moment from 'moment'
import Spacer from '../../components/Spacer'

const Session = ({ session }) => {
  return (
    <View style={styles.container}>
      <Text>{session.location}</Text>
      <Text>{session.title}</Text>
      <Text>{Moment(session.startTime).format('h:mm A')}</Text>
      <Text>{session.description}</Text>
      <Text>Presented By:</Text>
      <View>
        <Image style={styles.image} source={{ uri: session.speaker.image }} />
        <Text>{session.speaker.name}</Text>
      </View>
      <Spacer height={2} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})
export default Session
