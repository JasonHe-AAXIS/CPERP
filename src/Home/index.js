import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import AddStock from './AddStock'
import EditStock from './EditStock'
import InventoryManager from './InventoryManager'

const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    AddStock: {
      screen: AddStock
    },
    EditStock: {
      screen: EditStock
    },
    InventoryManager: {
      screen: InventoryManager
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'rgb(29,216,200)',
      },
      gesturesEnabled: true,
      gestureResponseDistance: 100,
    },
  },
);
export default HomeStackNavigator;
