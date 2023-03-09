import { useReducer } from "react";
import { AddToDo } from "./AddToDo";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

export const TodoApp = () => {
    let id = 0;
    const initialState = [
        {
            id: id++,
            description: "Recolectar la piedra del alma",
            done: false,
        },
        {
            id: id++,
            description: "Recolectar la piedra del tiempo",
            done: false,
        },
    ];

    const handleNewToDo = (description) => {
        console.log(description)
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    return (
        <>
            <h1>Todo App: 10 <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {initialState.map(e => (
                        <TodoList key={e.id} item={e.description}/>
                    ))}
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                        <AddToDo addTodo={handleNewToDo}/>
                </div>
            </div>
        </>
    );
};
