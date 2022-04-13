
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const TodoCheckBox = () => {
    return (
        <Checkbox {...label}  />

    )
}

export default TodoCheckBox;