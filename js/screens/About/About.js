import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import Title from '../../components/Title'

const About = ({ codeOfConduct }) => {
  console.log(codeOfConduct)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('../../assets/images/r10_logo.png')}
        />
        <View style={StyleSheet.flatten([styles.spacer, styles.margins])} />
        <Text style={StyleSheet.flatten([styles.font, styles.margins])}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
      </View>
      <View>
        <Title>Data and Venue</Title>
        <Text style={StyleSheet.flatten([styles.font])}>
          The R10 conference will take place on Friday, September 21, 2018 in
          Vancouver, BC
        </Text>
      </View>
      <View>
        <Title>Code Of Conduct</Title>
        {codeOfConduct.map(conduct => {
          return (
            <View key={conduct.id}>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={StyleSheet.flatten([
                    styles.font,
                    styles.conductTitle,
                    styles.margins
                  ])}
                >
                  + {conduct.title}
                </Text>
                <View>
                  <Text
                    style={StyleSheet.flatten([styles.font, styles.margins])}
                  >
                    {conduct.description}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  spacer: {
    height: 2,
    backgroundColor: '#CCC'
  },
  header: {
    justifyContent: 'center'
  },
  image: {
    alignSelf: 'center'
  },
  font: {
    fontSize: 20
  },
  margins: {
    marginVertical: 10
  },
  conductTitle: {
    color: 'purple'
  }
})
export default About
