import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer
    // other reducers go here
});

export default rootReducer;
