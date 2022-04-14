
import React, { useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TodoCheckbox from '../TodoCheckbox/TodoCheckbox';
import './styles.scss'
import Actions from '../../redux/actions/todoActions/todoActions';
import { useDispatch, useSelector } from 'react-redux';


const TodoList = () => {
    const { todos, loading } = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.getTodos());
    }, [dispatch])

    if (todos?.length === 0) {
        return <div>Todos Not found ...</div>
    }

    const deleteTodo = (id) => {
        dispatch(Actions.deleteTodo(id));
    }

    const completeTodo = (item)=>{
        item.isCompleted = !item.isCompleted;
        dispatch(Actions.completedTodo(item._id, item));
    }


    return (
        <List sx={{ width: '100%' }}>
            {loading ? <div className='loading'>Loading...</div> :
            todos && todos.length > 0 && todos.map((item, index) =>
                <ListItem key={index}>
                    <TodoCheckbox checked={item.isCompleted} onClick={()=> completeTodo(item)}/>
                      <ListItemText primary={item.name} className={item.isCompleted ? 'completed-text' : '' }/>
                    <DeleteOutlineIcon  onClick={()=> deleteTodo(item._id)}/>
                </ListItem>
            )}
        </List>

    )
}

export default TodoList;