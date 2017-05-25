import {
    TabNavigator,
} from 'react-navigation';
import MainScreen from './MainScreen';
import Setup from './SetupScreen';

const BasicApp = TabNavigator({
    Main: {screen: MainScreen},
    Setup: {screen: Setup},
});
export default BasicApp;