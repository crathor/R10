import React from 'react'
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native'

const Speaker = ({ speaker, navigateBack }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Button onPress={navigateBack} title="X" />
        <Text style={{ fontSize: 30, color: '#ffffff' }}>
          About the Speaker
        </Text>
      </View>
      <View style={styles.speakerContainer}>
        <Image source={{ uri: speaker.image }} />
        <Text>{speaker.name}</Text>
        <Text>{speaker.bio}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  header: {
    color: '#ffffff'
  },
  speakerContainer: {
    backgroundColor: '#ffffff',
    height: '100%',
    padding: 10,
    margin: 10
  }
})

export default Speaker
