import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStackNavigator from './Home';
import WelcomePage from './Welcome/index';
import MyStackNavigator from './My'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Alert,
    TouchableOpacity,
    Button,
    ActivityIndicator,
    Image,
    TextInput,
    Dimensions
  } from 'react-native';

const TabNavigator = createBottomTabNavigator(
    {
      Home: {
        screen: HomeStackNavigator,
        navigationOptions: {
          tabBarLabel: '首页',
        },
      },
      Prodcut: {
        screen: WelcomePage,
        navigationOptions: {
          tabBarLabel: '商品',
        },
      },
      Work: {
        screen: WelcomePage,
        navigationOptions: {
          tabBarLabel: '工作',
        },
      },
      My: {
        screen: MyStackNavigator,
        navigationOptions: {
          tabBarLabel: '我的',
        },
      },
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = 'globe';
          } else if (routeName === 'Prodcut') {
            iconName = 'building-o';
          } else if (routeName === 'Work') {
            iconName = 'comments-o';
          } else if (routeName === 'My') {
            iconName = 'user-circle-o';
          }
          return <Icon name={iconName} size={20} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'rgb(29,216,200)',
        inactiveTintColor: 'gray',
      },
    },
  );

  const AppInitNavigator = createStackNavigator({
    welcome: {
      screen: WelcomePage,
      navigationOptions: {
        header: null,
      }
    }
  });
  
  const swtichNavigator = createSwitchNavigator({
    Init: AppInitNavigator,
    Main: TabNavigator,
  });


const AppNavigator = createAppContainer(swtichNavigator);

export default AppNavigator;