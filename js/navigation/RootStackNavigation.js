import { createStackNavigator } from 'react-navigation'
import NavigationLayout from './NavigationLayout'
import SpeakerScreen from '../screens/Speaker'

export default createStackNavigator(
  {
    Speaker: SpeakerScreen,
    NavigationLayout
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)
