import { combineReducers } from 'redux';
import todoReducer from './todo_reducers';



export default combineReducers({
    todo: todoReducer
});