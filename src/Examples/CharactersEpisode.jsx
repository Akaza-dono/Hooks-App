import { useFetch } from "../Hooks"
import "../Estilos/style.css";

export const CharactersEpisode = ({ uri }) => {
    const { data} = useFetch(uri)
    const { image, name } = !!data && data;

    return (
        <div className="CardCharacter">
            <h1>{name}</h1>
            <img src={image} alt={"image of" + name} />
        </div>
    )
}
