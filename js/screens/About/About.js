import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  LayoutAnimation
} from 'react-native'
import Title from '../../components/Title'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: []
    }
  }
  componentDidUpdate() {
    LayoutAnimation.easeInEaseOut()
  }

  renderDescription(description) {
    return (
      <Text style={StyleSheet.flatten([styles.font, styles.margins])}>
        {description}
      </Text>
    )
  }
  toggleConduct(id) {
    let selected = [...this.state.selected]
    selected.includes(id)
      ? (selected = selected.filter(conductId => conductId !== id))
      : (selected = [...selected, id])

    this.setState({ selected })
  }

  render() {
    const { codeOfConduct } = this.props
    const { selected } = this.state
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require('../../assets/images/r10_logo.png')}
            />
            <View style={StyleSheet.flatten([styles.spacer, styles.margins])} />
            <Text style={StyleSheet.flatten([styles.font, styles.margins])}>
              R10 is a conference that focuses on just about any topic related
              to dev.
            </Text>
          </View>
          <View>
            <Title>Data and Venue</Title>
            <Text style={StyleSheet.flatten([styles.font])}>
              The R10 conference will take place on Friday, September 21, 2018
              in Vancouver, BC
            </Text>
          </View>
          <View>
            <Title>Code Of Conduct</Title>
            {codeOfConduct.map(conduct => {
              return (
                <View key={conduct.id}>
                  <TouchableOpacity
                    onPress={() => {
                      this.toggleConduct(conduct.id)
                    }}
                  >
                    <Text
                      style={StyleSheet.flatten([
                        styles.font,
                        styles.conductTitle,
                        styles.margins
                      ])}
                    >
                      {selected.includes(conduct.id) ? '- ' : '+ '}{' '}
                      {conduct.title}
                    </Text>
                  </TouchableOpacity>
                  {selected.includes(conduct.id) &&
                    this.renderDescription(conduct.description)}
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
    )
  }
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
