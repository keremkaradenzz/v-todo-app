import Container from "../components/Container/Container";
import TodoTextInput from "../components/TodoTextInput/TodoTextInput";
import TodoButton from "../components/TodoButton/TodoButton";
import TodoList from "../components/TodoList/TodoList";

const Todos = () => {


    const addTodo = (event) => {
        event.preventDefault();
        console.log("burada")

    }
    return (
        <>
            <Container>
                <TodoTextInput />
                <TodoButton value="Add" onClick={addTodo} />
            </Container>
            <Container>
                <TodoList />
            </Container>
        </>
    )
}

export default Todos;