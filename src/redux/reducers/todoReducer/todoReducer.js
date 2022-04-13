import * as types from "../../actions/types";

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TODOS:
            return {
                todos: action.payload
            }
        case types.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case types.DELETE_TODO:
            console.log('action', action.payload);
            return {
                todos: state.todos.filter(item => item.id !== action.payload)
            }
        default:
            return {
                ...state
            }
    }
}

export default todoReducer;