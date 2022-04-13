import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import Container from "../components/Container/Container";
import TodoTextInput from "../components/TodoTextInput/TodoTextInput";
import TodoButton from "../components/TodoButton/TodoButton";
import TodoList from "../components/TodoList/TodoList";
import { useDispatch } from 'react-redux';
import Actions from '../redux/actions/todoActions/todoActions';

const Todos = () => {
    const dispatch = useDispatch();
    const [value , setValue] = useState('');
    const addTodo = (event) => {
        event.preventDefault();
        dispatch(Actions.addTodo({
            id:uuid(),
            name: value,
            isCompleted:false
        }));
        setValue('');
    }
    return (
        <>
            <Container>
                <TodoTextInput value={value} setValue={setValue} />
                <TodoButton value="Add" onClick={addTodo} />
            </Container>
            <Container>
                <TodoList />
            </Container>
        </>
    )
}

export default Todos;