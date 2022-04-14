import * as types from "../types";
import { fetchTodo, todoDelete, createTodo, updateTodo } from '../../../api/index';

export const getTodos = () => async dispatch =>{
    const { data } = await fetchTodo();
    dispatch({
        type: types.GET_TODOS,
        payload: data
    })
}

export const addTodo = (todo) => async dispatch => {
    const { data } = await createTodo(todo);
    dispatch({
        type: types.ADD_TODO,
        payload: data
    })
}


export const deleteTodo = (id) => async dispatch => {
    const { data } = await todoDelete(id);
    dispatch({
        type: types.DELETE_TODO,
        payload: data._id
    })
}

export const completedTodo = (id, todo) => async dispatch =>  {
    const { data } = await updateTodo(id, todo);
    dispatch({
        type: types.COMPLETED_TODO,
        payload: data._id
    })
}

const todoActions = {
    addTodo,
    getTodos,
    deleteTodo,
    completedTodo
}
export default todoActions;