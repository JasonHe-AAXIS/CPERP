import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableHighlight,
    ActivityIndicator,
    Alert
} from 'react-native';

import Login from './component/Login'

export default class MyScreen extends Component {
    static navigationOptions = {
        headerTitle: '我 的',
        alignItems: 'center'
    };

    render() {
        return <Login />
    }
}