import {
  StackNavigator,
} from 'react-navigation';
import MainScreen from './MainScreen';
// import ProfileScreen from './ProfileScreen';
import BasicApp2 from '../TabNavigator/BasicApp2';
const BasicApp = StackNavigator({
  Main: {
    screen: MainScreen,
  },
  BasicApp2: {
    screen: BasicApp2,
      navigationOptions:({navigation})=>({
          title:`${navigation.state.params.name}'s Profile1`,
      }),
  },

});
export default BasicApp;