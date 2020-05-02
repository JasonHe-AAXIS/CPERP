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
import { positionList } from '../data';

export default class HomeScreen extends Component {

  static navigationOptions = {
    headerTitle: '首 页',
    alignItems: 'center'
  };

  constructor(props) {
    super(props);

    this.state = {
      contentList: [],
      isLoading: true
    };

    this._loadData();
  }

  //获取数据
  _loadData() {
    setTimeout(() => {
      this.setState({
        contentList: positionList.list,
        isLoading: false
      });
    }, 2000);
  }

  handlePress = event => {
    console.log('go to product detail')
    this.props.navigation.navigate('AddStock');
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator color='gray' size='large' />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>库存情况：</Text>
        </View>
        <View>
          <Text>hw: 30</Text>
          <Text>oppo: 30</Text>
          <Text>vivo: 30</Text>
        </View>
        <View style={styles.line} />


        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <TouchableHighlight
              style={styles.optionsItem}
              underlayColor='#e0e0e0'
              onPress={this.handlePress}>
              <View>
                <Text>入   库</Text>
              </View>
            </TouchableHighlight >
            <View style={styles.optionsItem}>
              <Text>出   库</Text>
            </View>
          </View>
          <View style={styles.optionsRow}>
            <View style={styles.optionsItem}>
              <Text>库存管理</Text>
            </View>
            <View style={styles.optionsItem}>
              <Text>出入库记录</Text>
            </View>
          </View>
          <View style={styles.optionsRow}>
            <View style={styles.optionsItem}>
              <Text>营销报表</Text>
            </View>
            <View style={styles.optionsItem}>
              <Text>用户管理</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  _renderItem({ item, index }) {
    const { name, salary, cname, size, username, title } = item;
    return (
      <TouchableHighlight
        underlayColor='#e0e0e0'
        style={styles.itemContent}
        onPress={() => {
          Alert.alert('敬请期待');
        }}>
        <View>
          <View style={styles.pNameContent}>
            <Text style={styles.pName}>库存情况：</Text>

          </View>

          <Text style={styles.pCompany}>{`${cname} ${size}`}</Text>
          <View style={styles.pLine} />
          <Text style={styles.pHr}>{`${username} ${title}`}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  _keyExtractor = (item, index) => `default_${item.name}_${index}`;
}



const ITEM_HEIGHT = 120;
const SEPERATOR_HEIGHT = StyleSheet.hairlineWidth;

const styles = StyleSheet.create({
  optionsContainer: {
    justifyContent: 'space-between', flexDirection: 'column', marginTop: '10%'
  },
  optionsRow: {
    justifyContent: 'space-between', flexDirection: 'row', height: '25%'
  },
  optionsItem: {
    borderWidth: 1, width: '40%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', margin: 5
  },
  hr: {
    marginTop: 10,
    height: 20,
    fontSize: 18,
    color: 'rgb(29,216,200)'
  },
  line: {
    marginTop: 2,
    height: SEPERATOR_HEIGHT,
    backgroundColor: '#e0e0e0',
    borderWidth: 1
  },
  contentList: {
    flex: 1,
    backgroundColor: 'rgb(241,242,246)'
  },
  itemContent: {
    flex: 1,
    flexDirection: 'column',
    height: ITEM_HEIGHT,
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  pNameContent: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pName: {
    fontSize: 18
  },
  pSalary: {
    fontSize: 18,
    color: 'red'
  },
  pCompany: {
    marginTop: 10,
    height: 20,
    fontSize: 18,
    color: 'gray'
  },
  pLine: {
    backgroundColor: '#e0e0e0',
    height: SEPERATOR_HEIGHT,
    marginTop: 10,
  },
  pHr: {
    marginTop: 10,
    height: 20,
    fontSize: 18,
    color: 'rgb(29,216,200)'
  }

});