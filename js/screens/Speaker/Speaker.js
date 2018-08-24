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
      <ScrollView style={styles.speakerContainer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  closeBtn: {
    position: 'absolute',
    left: '5%'
  },
  closeBtnText: {
    color: '#ffffff',
    fontSize: 25
  },
  title: {
    fontSize: 20,
    color: '#ffffff'
  },
  header: {
    paddingHorizontal: 10,
    marginTop: 40,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff'
  },
  speakerContainer: {
    backgroundColor: '#ffffff',
    height: '100%',
    padding: 10,
    paddingBottom: 100,
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  speaker: {
    alignItems: 'center'
  },
  speakerName: {
    fontSize: 30,
    marginBottom: 20
  },
  speakerBio: {
    fontSize: 18,
    lineHeight: 30
  }
})

export default Speaker
