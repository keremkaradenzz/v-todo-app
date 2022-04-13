import { combineReducers } from 'redux';

import todoReducer from './todoReducer/todoReducer'

const rootReducer = combineReducers({
    todos: todoReducer
})

export default rootReducer;