import { ItemsList } from "./ItemsList"

export const TodoList = ({ item,deleteTodo,id, onToggleTodo, done }) => {
    return (
        <>
            <ul className="list-group">
                <ItemsList item={item} deleteTodo={ deleteTodo } id={id} onToggleTodo={onToggleTodo} done={done}/>
            </ul>
        </>
    )
}
