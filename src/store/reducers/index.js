import loginReducer from './loginReducer';
import ImageListReducer from './ImageListReducer';
import SelectImageReducer from './selectImageReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    LoginReducer:loginReducer,
    imageListReducer:ImageListReducer,
    SelectImageReducer:SelectImageReducer

}) 