import { useState } from "react"

export const AddToDo = ({ addTodo }) => {

    const [description, setDescription] = useState("")
    let idTodo = 0;
    const sendNewTodo = () => {
        addTodo({
            id: idTodo++,
            description: description,
            done: false
        });
    }
    const setDescriptionData = ({ target: { value } }) => {
        setDescription(value);
    }

    return (
        <>
            <input type="text"
                placeholder="Que hay que hacer?"
                className="form-control"
                onChange={setDescriptionData} />
            <button
                className="btn btn-outline-primary mt-1"
                onClick={() => sendNewTodo()}
            >Agregar
            </button>
        </>
    )
}
