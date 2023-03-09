export const ItemsList = ({ item }) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span className="align-self-center">{item}</span>
                <button className="btn btn-danger">Borrar</button>
            </li>
        </>
    )
}
