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
import ProductDetail from './component/ProductDetail'

export default class AddStock extends Component {
    static navigationOptions = {
        headerTitle: '产品入库',
        alignItems: 'center'
    };
    render() {
        return <ProductDetail />
    }
}