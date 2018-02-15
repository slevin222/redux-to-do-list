import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todoReducer from './todo_reducers';



export default combineReducers({
    form: formReducer,
    todo: todoReducer
});