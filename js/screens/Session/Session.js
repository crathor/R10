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
import styles from './styles'
import { globalStyles } from '../../config/styles'

const Session = ({ session, navigate, addFave, removeFave, faveIds }) => {
  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
      <LocationText location={session.location} sessionId={session.id} />

      <Title>{session.title}</Title>

      <Text style={StyleSheet.flatten([globalStyles.mainFont, styles.time])}>
        {Moment(session.startTime).format('h:mm A')}
      </Text>
      <Text
        style={StyleSheet.flatten([globalStyles.mainFont, styles.description])}
      >
        {session.description}
      </Text>
      <Text
        style={StyleSheet.flatten([globalStyles.mainFont, styles.presentedBy])}
      >
        Presented By:
      </Text>
      <TouchableOpacity onPress={() => navigate(session.speaker.id)}>
        <View style={styles.speaker}>
          <Image style={styles.image} source={{ uri: session.speaker.image }} />
          <Text
            style={StyleSheet.flatten([
              globalStyles.mainFont,
              styles.speakerName
            ])}
          >
            {session.speaker.name}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.spacer} />
      {/* <ButtonGradient title={'hello'} pressed={() => {}} /> */}
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.6}
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
          <Text
            style={StyleSheet.flatten([
              globalStyles.mainFont,
              styles.buttonText
            ])}
          >
            {faveIds.includes(session.id)
              ? 'Remove from Faves'
              : 'Add to Faves'}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Session
