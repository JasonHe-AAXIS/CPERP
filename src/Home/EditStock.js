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

export default class EditStock extends Component {
    static navigationOptions = {
        headerTitle: '更新库存',
        alignItems: 'center'
    };
    render() {
        const { params } = this.props.navigation.state;
        const { product } = params;
        console.log(product)
        return <ProductDetail product={product} />
    }
}