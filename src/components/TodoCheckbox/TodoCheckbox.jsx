
import Checkbox from '@mui/material/Checkbox';

const TodoCheckbox = ({onClick, checked}) => {
    return (
        <Checkbox checked={checked} onClick={onClick}  />
    )
}

export default TodoCheckbox;