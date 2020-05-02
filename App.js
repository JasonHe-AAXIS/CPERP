/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import AppContainter from './src';
// import AppContainter from './src/testNav'

const { width, height } = Dimensions.get('window');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animating: false
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.containers}>
          {/* <View style={{ height: 50, width, backgroundColor: 'red' }} /> */}
          {/* <StatusBar barStyle="dark-content" />
       <Text>Testing</Text> 
       <Icon name="building-o" size={20} />
       <Icon name="building-o" size={20} /> */}
          <AppContainter />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    // width: width,
    // height: height
    // alignItems: 'center'
  },
  button: {
    width: 80,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  clickButton: {
    height: 40,
    margin: 10,
    backgroundColor: '#e6e6fa',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7fff00'
  },
  textInput: {
    marginHorizontal: 20,
    marginTop: 50,
    height: 30,
    borderWidth: 1,
    borderColor: '#7fff00',
    fontSize: 15
  }
});