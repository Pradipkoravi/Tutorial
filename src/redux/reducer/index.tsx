import { combineReducers, Reducer } from 'redux';
import userReducer from '../app/user/userReducer';
const rootReducer: Reducer<any, any> = combineReducers({ userReducer });

export default rootReducer;
