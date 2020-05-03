import * as constant from './constant'

export function updateUserInfo(data) {
    return {
        type: constant.UPDATE_USER_INFO,
        data
    }
}