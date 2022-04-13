
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const TodoCheckbox = () => {
    return (
        <Checkbox {...label}  />

    )
}

export default TodoCheckbox;