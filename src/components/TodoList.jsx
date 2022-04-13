
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TodoCheckBox from './TodoCheckBox';

const TodoList = () => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                <TodoCheckBox/>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                <DeleteOutlineIcon/>
            </ListItem>
        </List>

    )
}

export default TodoList;