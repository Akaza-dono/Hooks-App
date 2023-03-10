import { useEffect, useReducer } from "react";
import { todoReducer } from "../UseReducer/todoReducer";

export const useTodo = () => {

    const init = () => {
        return JSON.parse(localStorage.data) || [];
    };
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.data = JSON.stringify(todos);  
    }, [todos]);

    const handleNewToDo = (todo) => {
        dispatch({
            type: "[TODO] Add Todo",
            payload: todo,
        });
    };

    const toDosCount  = () => {
        return todos.length
    }

    const pendingCount  = () => {
        return todos.filter(e => e.done !== !false).length
    }

    const handleDeleteTodo = ({ target: { id } }) => {
        dispatch({
            type: "[TODO] Remove Todo",
            payload: id,
        });
    };

    const onToggleTodo = (idi) => {
        dispatch({
            type: "[TODO] Toggle Todo",
            payload: idi,
        });
    };

    return {
        init,
        handleNewToDo,
        handleDeleteTodo,
        onToggleTodo,
        todos,
        toDosCount,
        pendingCount
    }
}