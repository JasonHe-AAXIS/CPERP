import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUserInfo } from '../action'
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableHighlight,
    ActivityIndicator,
    Alert
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    doChangeUsername = (e) => {
        this.setState({
            username: e.nativeEvent.text
        })
    }
    doChangePassword = (e) => {
        this.setState({
            password: e.nativeEvent.text
        })
    }
    login = () => {
        console.log(`login with: ${this.state.username} -- ${this.state.password}`)
        this.props.updateUserInfo({ username: 'hhs', accessToken: '372349829432', refreshToken: 'dafeafdvdfaew' })
    }

    render() {
        return (<View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>用户名：</Text>
            <TextInput onChange={this.doChangeUsername} editable={true} style={{ margin: 10, borderWidth: 1, borderRadius: 10 }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>密码：</Text>
            <TextInput onChange={this.doChangePassword} editable={true} style={{ margin: 10, borderWidth: 1, borderRadius: 10 }} />
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <TouchableHighlight onPress={this.login}><Text>登录</Text></TouchableHighlight>
            </View>
            <Text>
            {this.props.username} -- 
            {this.props.accessToken} -- 
            {this.props.refreshToken}
            </Text>
        </View>)
    }
}

export default connect(state => ({
    username: state.userInfo.username,
    accessToken: state.userInfo.accessToken,
    refreshToken: state.userInfo.refreshToken
}), {
        updateUserInfo
    })(Login)