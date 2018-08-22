import { createStackNavigator } from 'react-navigation'
import NavigationLayout from './NavigationLayout'
import SpeakerScreen from '../screens/Speaker'

export default createStackNavigator(
  {
    NavigationLayout,
    Speaker: SpeakerScreen
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)
