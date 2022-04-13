
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TodoCheckbox from '../TodoCheckbox/TodoCheckbox';
import './styles.scss'
const TodoList = () => {
    return (
        <List sx={{ width: '100%'}}>
            <ListItem>
                <TodoCheckbox/>
                <ListItemText primary="Photos" />
                <DeleteOutlineIcon/>
            </ListItem>
            <ListItem>
                <TodoCheckbox/>
                <ListItemText primary="Photos" />
                <DeleteOutlineIcon/>
            </ListItem>
        </List>

    )
}

export default TodoList;