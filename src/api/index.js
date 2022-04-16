import axios from 'axios';

const apiEndpoint = "https://v-todo-app-be.herokuapp.com/todos/";

export const fetchTodo = async () => {
    try{
        const response = await axios.get(apiEndpoint);
        return response;
    } catch(err){
        console.log(err);
    }
}

export const createTodo = async (data) => {
    try{
       const response = await axios.post(apiEndpoint, data);
       return response;
    }catch(err){
        console.log(err);
    }
}

export const updateTodo = async (id, data) => {
    try{
        const response = await axios.patch(`${apiEndpoint}${id}`, data);
        return response;
    }catch(err){
        console.log(err);
    }
}

export const todoDelete = async (id) => {
    try{
        const response = await axios.delete(`${apiEndpoint}${id}`);;
        return response;
     }catch(err){
         console.log(err);
     }
}

export const getByIdTodo = async (id) => {
    try{
        const response = await axios.get(`${apiEndpoint}/${id}`);
        return response;
    }catch(err){
        console.log(err)
    }
}