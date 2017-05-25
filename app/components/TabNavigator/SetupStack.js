import StackNavigator from 'react-navigation';
import MainScreen from './MainScreen';
import SetupStack from './SetupStack';

const SetupStack = StackNavigator ({

    Main: {screen: MainScreen},
    SetupStack: {screen: SetupStack},
});
export default SetupStack;