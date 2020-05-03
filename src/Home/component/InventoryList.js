import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    FlatList,
    TouchableHighlight,
    ActivityIndicator,
    Alert,
    Dimensions
} from 'react-native';
import { Picker } from '@react-native-community/picker'
import SelfadaptModal from 'react-native-selfadapt-modal';
import { inventoryData } from '../../mock/inventoryData'
import { brandList, memoryData, sizeData } from '../../mock/brandData'
const wWidth = Dimensions.get('window').width;


export default class InventoryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listData: inventoryData,
            brandOptions: brandList,
            modelOptions: [],
            colorOptions: [],
            searchCriteria: {
                brand: '',
                model: '',
                color: '',
                memory: '',
                size: ''
            }
        }
    }
    componentDidMount() {
        console.log('did mount')
    }
    handlePress = (item) => {
        this.props.onPressItem && this.props.onPressItem(item)
    }

    _keyExtractor = (item, index) => item.sn;
    _renderItem = ({ item, index, separators }) => {
        return (
            <TouchableHighlight
                style={styles.itemContent}
                key={item.sn}
                onPress={() => this.handlePress(item)}>
                <View>
                    <View style={styles.pNameContent}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{`${item.brand}`}</Text>
                        <Text style={{ fontSize: 16, marginHorizontal: 20 }}>{`${item.model}\n`}</Text>
                    </View>
                    <Text style={{ color: 'grey' }}>{`SN: ${item.sn}`}</Text>
                    <View style={styles.pLine} />
                    <Text style={styles.pSalary}>{`|${item.memory}\t|${item.size}\t|${item.color}`}</Text>
                </View>
            </TouchableHighlight>
        );
    };
    _renderListEmptyComponent = () => {
        return (
            <View style={styles.emptyContent}>
                <Text style={{ fontSize: 16 }}>暂无数据下拉刷新</Text>
            </View>
        );
    };

    doSelectBrand = (res) => {
        console.log(res)
    }
    onBranchChange = (itemValue, itemIndex) => {
        let brandName = this.state.brandOptions.find((ele) => ele.id === itemValue).name
        this.setState({
            listData: inventoryData.filter((ele) => ele.brand === brandName),
            modelOptions: brandList.find((ele, index) => ele.id === itemValue).version,
            searchCriteria: { ...this.state.searchCriteria, brand: itemValue }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'column', height: 100, borderWidth: 1 }}>
                    <View style={{ width: wWidth, height: 43, flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Picker
                            selectedValue={this.state.searchCriteria.brand}
                            style={{ height: 50, width: 100, borderWidth: 1 }}
                            onValueChange={this.onBranchChange}
                            mode={'dropdown'}>
                            {[{ name: '选择品牌', id: 'defaultOption' }, ...this.state.brandOptions]
                                .map((ele, index) => (<Picker.Item key={`brand_${ele.id}`} label={ele.name} value={ele.id} />))}
                        </Picker>
                        <Picker
                            selectedValue={this.state.searchCriteria.model}
                            style={{ height: 50, width: 100, borderWidth: 1 }}
                            onValueChange={(itemValue, itemIndex) => {
                                this.setState({
                                    colorOptions: itemValue !== 'defaultOption' ? this.state.modelOptions.find((ele, index) => ele.id === itemValue).colors : [],
                                    searchCriteria: { ...this.state.searchCriteria, model: itemValue }
                                })
                            }}
                            mode={'dropdown'}>
                            {[{ name: '选择型号', id: 'defaultOption' }, ...this.state.modelOptions]
                                .map((ele, index) => (<Picker.Item key={`model_${ele.id}`} label={ele.name} value={ele.id} />))}
                        </Picker>
                        <Picker
                            selectedValue={this.state.searchCriteria.color}
                            style={{ height: 50, width: 100, borderWidth: 1 }}
                            onValueChange={(itemValue, itemIndex) => {
                                this.setState({ searchCriteria: { ...this.state.searchCriteria, color: itemValue } })
                            }}
                            mode={'dropdown'}>
                            {[{ name: '选择颜色', id: 'defaultOption' }, ...this.state.colorOptions]
                                .map((ele, index) => (<Picker.Item key={`color_${ele.id}`} label={ele.name} value={ele.id} />))}
                        </Picker>
                    </View>
                    <View style={{ width: wWidth, height: 43, flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Picker
                            selectedValue={this.state.searchCriteria.memory}
                            style={{ height: 50, width: 100, borderWidth: 1 }}
                            onValueChange={(itemValue, itemIndex) => {
                                this.setState({ searchCriteria: { ...this.state.searchCriteria, memory: itemValue } })
                            }}
                            mode={'dropdown'}>
                            {[{ name: '内存大小', id: 'defaultOption' }, ...memoryData]
                                .map((ele, index) => (<Picker.Item key={`color_${ele.id}`} label={ele.name} value={ele.id} />))}
                        </Picker>
                        <Picker
                            selectedValue={this.state.searchCriteria.size}
                            style={{ height: 50, width: 100, borderWidth: 1 }}
                            onValueChange={(itemValue, itemIndex) => {
                                this.setState({ searchCriteria: { ...this.state.searchCriteria, size: itemValue } })
                            }}
                            mode={'dropdown'}>
                            {[{ name: '硬盘大小', id: 'defaultOption' }, ...sizeData]
                                .map((ele, index) => (<Picker.Item key={`color_${ele.id}`} label={ele.name} value={ele.id} />))}
                        </Picker>
                    </View>
                </View>

                <Text>{`查询到${this.state.listData ? this.state.listData.length : 0}个库存`}</Text>
                <View style={styles.pLine} />
                <FlatList
                    style={styles.contentList}
                    contentContainerStyle={{ paddingTop: 0, paddingBottom: 0 }}
                    data={this.state.listData}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    ItemSeparatorComponent={({ highlighted }) => (
                        <View style={styles.separator} />
                    )}
                    ListEmptyComponent={this._renderListEmptyComponent}
                    initialNumToRender={10}
                    getItemLayout={(item, index) => ({
                        length: ITEM_HEIGHT + SEPERATOR_HEIGHT,
                        offset: (ITEM_HEIGHT + SEPERATOR_HEIGHT) * index,
                        index,
                    })}
                    initialScrollIndex={0}
                    removeClippedSubviews>

                </FlatList>
            </View>
        )
    }
}
const ITEM_HEIGHT = 100;
const SEPERATOR_HEIGHT = StyleSheet.hairlineWidth;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentList: {
        width: wWidth,
        flex: 1,
        backgroundColor: 'rgb(241,242,246)',
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
        paddingVertical: 5,
    },
    pNameContent: {
        height: 30,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    pName: {
        fontSize: 12,
    },
    pSalary: {
        textAlignVertical: 'center',
        fontSize: 16,
        color: 'grey',
    },
    pLine: {
        marginTop: 10,
        height: SEPERATOR_HEIGHT,
        backgroundColor: '#e0e0e0',
    },
    separator: {
        height: 5,
        alignSelf: 'stretch',
    },
    emptyContent: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionText: { height: 20, width: 50, borderColor: 'gray', borderWidth: 1, fontWeight: 'bold', fontSize: 20 },
    demeOneBtn: {
        padding: 10,
        borderRadius: 5,
        // backgroundColor: '#58A0FF',
    }
})