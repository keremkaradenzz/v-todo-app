import axios from 'axios';

const apiEndpoint = "http://localhost:5005/todos/";

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

export const updateTodo = async (id, data) => await axios.patch(`${apiEndpoint}${id}`, data);

export const todoDelete = async (id) => {
    try{
        const response = await axios.delete(`${apiEndpoint}${id}`);;
        return response;
     }catch(err){
         console.log(err);
     }
}

export const getByIdTodo = async (id) => await axios.get(`${apiEndpoint}/${id}`);