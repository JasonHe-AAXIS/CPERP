import { createStackNavigator } from 'react-navigation-stack';
import MyScreen from './MyScreen'

const MyStackNavigator = createStackNavigator(
    {
        My: {
            screen: MyScreen
        }
    },
    {
        initialRouteName: 'My',
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
export default MyStackNavigator;
