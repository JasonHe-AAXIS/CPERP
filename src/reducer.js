import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppContainter from './index';
import userInfo from './My/userReducer'

const navReducer = createNavigationReducer(AppContainter);

export default combineReducers({
    userInfo,
    nav: navReducer,
});
