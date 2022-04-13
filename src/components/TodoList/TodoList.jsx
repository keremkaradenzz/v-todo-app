
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
    const { todos } = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.getTodos([]));
    }, [dispatch])

    if (todos.length === 0) {
        return <div>Not found Todo...</div>
    }

    return (
        <List sx={{ width: '100%' }}>
            {todos && todos.length > 0 && todos.map((item, index) =>
                <ListItem key={index}>
                    <TodoCheckbox />
                    <ListItemText primary={item.name} />
                    <DeleteOutlineIcon />
                </ListItem>
            )}
        </List>

    )
}

export default TodoList;