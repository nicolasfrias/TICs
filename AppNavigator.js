import { createStackNavigator } from 'react-navigation';
import Home from './home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
});

export default AppNavigator;