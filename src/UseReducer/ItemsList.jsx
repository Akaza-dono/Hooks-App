export const ItemsList = ({ item, deleteTodo, id,onToggleTodo, done }) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between" onClick={()=>onToggleTodo(id)}>
                <span 
                    className={`align-self-center ${done ? 'text-decoration-line-through':''}`}
                >{item}</span>
                <button id={id} 
                        className="btn btn-danger" 
                        onClick={deleteTodo}
                >Borrar</button>
            </li>
        </>
    )
}
