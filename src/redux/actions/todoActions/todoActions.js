import * as types from "../types";

export const getTodos = (todos) => {
    return {
        type: types.GET_TODOS,
        payload: todos
    }
}

export const addTodo = (todo) => {
    return {
        type: types.ADD_TODO,
        payload: todo
    }
}


export const deleteTodo = (id) => {
    return {
        type: types.DELETE_TODO,
        payload: id
    }
}

export const completedTodo = (id) => {
    return {
        type: types.COMPLETED_TODO,
        payload: id
    }
}

const todoActions = {
    addTodo,
    getTodos,
    deleteTodo,
    completedTodo
}
export default todoActions;