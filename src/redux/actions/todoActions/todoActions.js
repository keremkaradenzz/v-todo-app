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


export const deleteTodo = (todo) => {
    return {
        type: types.ADD_TODO,
        payload: todo
    }
}

const todoActions = {
    addTodo,
    getTodos,
    deleteTodo
}
export default todoActions;