import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Linking
} from 'react-native'
import { globalStyles } from '../../config/styles'
import GradientButton from '../../components/GradientButton'
import styles from './styles'
import PropTypes from 'prop-types'

const Speaker = ({ speaker, navigateBack }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeBtn} onPress={navigateBack}>
          <Text style={styles.closeBtnText}>X</Text>
        </TouchableOpacity>
        <Text style={StyleSheet.flatten([globalStyles.mainFont, styles.title])}>
          About the Speaker
        </Text>
      </View>
      <ScrollView
        style={styles.speakerContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image style={styles.image} source={{ uri: speaker.image }} />
        <View
          style={StyleSheet.flatten([globalStyles.mainFont, styles.speaker])}
        >
          <Text style={styles.speakerName}>{speaker.name}</Text>
          <Text style={styles.speakerBio}>{speaker.bio}</Text>
        </View>
        <GradientButton
          pressed={() => {
            Linking.openURL(speaker.url).catch(err =>
              console.error('An error occurred', err)
            )
          }}
          title="Read More on Wikipedia"
        />
      </ScrollView>
    </View>
  )
}

Speaker.propTypes = {
  speaker: PropTypes.object.isRequired,
  navigateBack: PropTypes.func.isRequired
}

export default Speaker
