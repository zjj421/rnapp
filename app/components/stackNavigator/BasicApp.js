import {
  StackNavigator,
} from 'react-navigation';
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';
const BasicApp = StackNavigator({
  Main: {
    screen: MainScreen,
  },
  Profile: {
    screen: ProfileScreen,
      /*navigationOptions:({navigation})=>({
          title:`${navigation.state.params.name}'s Profile1`,
      }),*/
  },

});
export default BasicApp;