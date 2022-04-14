import * as types from "../../actions/types";

const initialState = {
    loading:false,
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TODOS:
            return {
                loading:false,
                todos: action.payload
            }
        case types.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case types.DELETE_TODO:
            return {
                loading:false,
                todos: state.todos.filter(item => item._id !== action.payload)
            }
        case types.COMPLETED_TODO:
            return {
                loading:false,
                todos: state.todos.map(item => {
                    if (item.id === action.payload) {
                        item.isCompleted = !item.isCompleted;
                    }
                    return item;
                })
            }
        case types.LOADING_TODO:
            return {
                loading:true,
            }
        default:
            return {
                ...state
            }
    }
}

export default todoReducer;