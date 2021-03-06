import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class WelcomePage extends Component {

  componentDidMount() {
    console.log('show welcome page...')
    setTimeout(()=>{
      this.props.navigation.navigate('Main');
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>CPERP</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(29,216,200)'
  },
  welcome: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});
