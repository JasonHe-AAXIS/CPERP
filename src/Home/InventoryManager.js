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
import InventoryList from './component/InventoryList'

export default class InventoryManager extends Component {
    static navigationOptions = {
        headerTitle: '库存管理',
        alignItems: 'center'
    };
    _onPressItem = (item) => {
        console.log('on press: ' + item.sn)
        this.props.navigation.navigate('EditStock', { product: item });
    }
    render() {
        return (
            <InventoryList onPressItem={this._onPressItem} />
        )
    }
}