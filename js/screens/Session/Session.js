import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import Moment from 'moment'
import Title from '../../components/Title'
import LinearGradient from 'react-native-linear-gradient'
import LocationText from '../../components/LocationText'

const Session = ({ session, navigate, addFave, removeFave, faveIds }) => {
  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
      <LocationText location={session.location} sessionId={session.id} />
      <Title>{session.title}</Title>
      <Text style={styles.time}>
        {Moment(session.startTime).format('h:mm A')}
      </Text>
      <Text style={styles.description}>{session.description}</Text>
      <Text style={styles.presentedBy}>Presented By:</Text>
      <TouchableOpacity onPress={() => navigate(session.speaker.id)}>
        <View style={styles.speaker}>
          <Image style={styles.image} source={{ uri: session.speaker.image }} />
          <Text style={styles.speakerName}>{session.speaker.name}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.spacer} />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.buttonContainer}
        onPress={() => {
          faveIds.includes(session.id)
            ? removeFave(session.id)
            : addFave(session.id)
        }}
      >
        <LinearGradient
          colors={['#8797D6', '#9963ea']}
          start={{ x: 1.0, y: 1.0 }}
          end={{ x: 0.0, y: 0.0 }}
          style={[StyleSheet.absoluteFill, styles.button]}
        >
          <Text style={styles.buttonText}>
            {faveIds.includes(session.id)
              ? 'Remove from Faves'
              : 'Add to Faves'}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15
  },
  button: {
    height: 55,
    width: '70%',
    borderRadius: 50,
    marginTop: 15,
    marginLeft: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Montserrat'
  },
  location: {
    color: '#999999',
    fontWeight: 'bold',
    fontSize: 16
  },
  time: {
    color: '#cf392a',
    fontSize: 18,
    paddingBottom: 10
  },
  description: {
    fontFamily: 'Montserrat-light',
    fontSize: 20,
    lineHeight: 30
  },
  presentedBy: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999999',
    paddingVertical: 10
  },
  speaker: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  speakerName: {
    paddingLeft: 20,
    fontSize: 20,
    fontFamily: 'Montserrat-light',
    fontWeight: 'bold'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  spacer: {
    height: 2,
    backgroundColor: '#e6e6e6',
    marginVertical: 20
  }
})
export default Session

// Medium Grey: #999999
// Light Grey: #e6e6e6
// Blue: #8797D6
// Purple: #9963ea
// Red: #cf392a
