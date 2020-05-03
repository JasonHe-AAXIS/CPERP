import * as constant from './constant'

const init = {
    username: '',
    accessToken: '',
    refreshToken: ''
}

export default function userInfo(state = init, action) {
    switch (action.type) {
        case constant.UPDATE_USER_INFO:
            return { ...state, ...action.data }
        default:
            return state
    }
}