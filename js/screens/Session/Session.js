import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} from 'react-native'
import Moment from 'moment'
import Title from '../../components/Title'
import LinearGradient from 'react-native-linear-gradient'
import LocationText from '../../components/LocationText'
import styles from './styles'

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
      <TouchableHighlight onPress={() => navigate(session.speaker.id)}>
        <View style={styles.speaker}>
          <Image style={styles.image} source={{ uri: session.speaker.image }} />
          <Text style={styles.speakerName}>{session.speaker.name}</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.spacer} />
      {/* <ButtonGradient title={'hello'} pressed={() => {}} /> */}
      <TouchableHighlight
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
      </TouchableHighlight>
    </ScrollView>
  )
}

export default Session
