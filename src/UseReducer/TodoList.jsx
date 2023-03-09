import { ItemsList } from "./ItemsList"

export const TodoList = ({ item }) => {
    return (
        <>
            <ul className="list-group">
                <ItemsList item={item}/>
            </ul>
        </>
    )
}
