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
import SelfadaptModal from 'react-native-selfadapt-modal';

// const TestData = [
//     { id: 10086, name: 'Option 1(This is a long, long, long option.)' },
//     { id: 10087, name: 'Option 2' },
//     { id: 10088, name: 'Option 3' },
//     { id: 10089, name: 'Option 4' }
// ];
import { brandList } from '../../mock/brandData'
import { TextInput } from 'react-native-gesture-handler';
export default class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brandOptions: brandList,
            versionOptions: [],
            colorOptions: [],
            brand: {},
            version: {},
            color: {},
            memory: '',
            size: ''
        }
    }
    doSelectBrand = (res, defaultOption) => {
        console.log(res)
        console.log(this.state.brandOptions.find((ele, index) => ele.id === res.id).version)
        this.setState({
            versionOptions: this.state.brandOptions.find((ele, index) => ele.id === res.id).version,
            brand: res,
            version: {},
            color: {}
        })
    }
    doSelectVersion = (res) => {
        console.log(`select version is: ${res.name}`)
        this.setState({
            colorOptions: this.state.versionOptions.find((ele, index) => ele.id === res.id).colors,
            version: res,
            color: {}
        })
    }
    doSelectColor = (res) => {
        console.log(`select color is: ${res.name}`)
        this.setState({
            color: res
        })
    }
    doSelectMemory = (res) => {
        this.setState({
            memory: res
        })
    }
    doSelectSize = (res) => {
        this.setState({
            size: res
        })
    }
    render() {
        return (
            <View style={{ justifyContent: 'space-between', flex: 1 }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                        串 号：
                </Text>
                    <TextInput
                        editable={true}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, fontWeight: 'bold', fontSize: 18, margin: 10 }}
                        value={this.state.brand.name}
                    />
                </View>
                <View>
                    <Text style={styles.optionTitle}>
                        品 牌：
                    </Text>
                    <SelfadaptModal
                        menuList={this.state.brandOptions}
                        containerStyle={styles.demeOneBtn}
                        onPress={(res) => this.doSelectBrand(res)}>
                        <TextInput
                            editable={false}
                            style={styles.optionText}
                            value={this.state.brand.name}
                        />
                    </SelfadaptModal>
                </View>

                <View>
                    <Text style={styles.optionTitle}>
                        型 号：
                </Text>
                    <SelfadaptModal
                        menuList={this.state.versionOptions}
                        containerStyle={styles.demeOneBtn}
                        onPress={(res) => this.doSelectVersion(res)}>
                        <TextInput
                            editable={false}
                            style={styles.optionText}
                            value={this.state.version.name}
                        />
                    </SelfadaptModal>

                </View>

                <View>
                    <Text style={styles.optionTitle}>
                        颜 色：
                </Text>
                    <SelfadaptModal
                        menuList={this.state.colorOptions}
                        containerStyle={styles.demeOneBtn}
                        onPress={(res) => this.doSelectColor(res)}>
                        <TextInput
                            editable={false}
                            style={styles.optionText}
                            value={this.state.color.name}
                        />
                    </SelfadaptModal>

                </View>

                <View>
                    <Text style={styles.optionTitle}>
                        内 存：
                </Text>
                    <SelfadaptModal
                        menuList={['1G', '2G', '3G', '4G', '6G', '8G']}
                        containerStyle={styles.demeOneBtn}
                        onPress={(res) => this.doSelectMemory(res)}>
                        <TextInput
                            editable={false}
                            style={styles.optionText}
                            value={this.state.memory}
                        />
                    </SelfadaptModal>
                </View>

                <View>
                    <Text style={styles.optionTitle}>
                        硬 盘：
                    </Text>
                    <SelfadaptModal
                        menuList={['32G', '64G', '128G', '256G', '512G']}
                        containerStyle={styles.demeOneBtn}
                        onPress={(res) => this.doSelectSize(res)}>
                        <TextInput
                            editable={false}
                            style={styles.optionText}
                            value={this.state.size}
                        />
                    </SelfadaptModal>
                </View>


                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableHighlight
                        onPress={() => alert('enter')}
                        style={styles.button}>
                        <Text>确 定</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}>
                        <Text>下一个</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    optionTitle: { fontWeight: 'bold', fontSize: 20 },
    optionText: { height: 40, borderColor: 'gray', borderWidth: 1, fontWeight: 'bold', fontSize: 20 },
    demeOneBtn: {
        padding: 10,
        borderRadius: 5,
        // backgroundColor: '#58A0FF',
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(241,242,246)',
        padding: 10
    }
});