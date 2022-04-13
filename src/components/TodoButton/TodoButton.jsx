import Button from '@mui/material/Button';
import './styles.scss';

const TodoButton = ({value, onClick}) => {
    return (
        <Button onClick={onClick} variant="contained">{value}</Button>
    )
}

export default TodoButton;