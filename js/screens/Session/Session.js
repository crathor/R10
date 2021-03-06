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
import LocationText from '../../components/LocationText'
import styles from './styles'
import { globalStyles } from '../../config/styles'
import GradientButton from '../../components/GradientButton'
import PropTypes from 'prop-types'

const Session = ({ session, navigate, addFave, removeFave, faveIds }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <LocationText location={session.location} sessionId={session.id} />

        <Title>{session.title}</Title>

        <Text style={StyleSheet.flatten([globalStyles.mainFont, styles.time])}>
          {Moment(session.startTime).format('h:mm A')}
        </Text>
        <Text
          style={StyleSheet.flatten([
            globalStyles.mainFont,
            styles.description
          ])}
        >
          {session.description}
        </Text>
        <Text
          style={StyleSheet.flatten([
            globalStyles.mainFont,
            styles.presentedBy
          ])}
        >
          Presented By:
        </Text>
        <TouchableOpacity onPress={() => navigate(session.speaker.id)}>
          <View style={styles.speaker}>
            <Image
              style={styles.image}
              source={{ uri: session.speaker.image }}
            />
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
        <GradientButton
          pressed={() => {
            faveIds.includes(session.id)
              ? removeFave(session.id)
              : addFave(session.id)
          }}
          title={
            faveIds.includes(session.id) ? 'Remove from Faves' : 'Add to Faves'
          }
        />
      </ScrollView>
    </View>
  )
}

Session.propTypes = {
  session: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
  addFave: PropTypes.func.isRequired,
  removeFave: PropTypes.func.isRequired,
  faveIds: PropTypes.array.isRequired
}
export default Session
