import { useCounter, useFetch } from "../Hooks";
import { CharactersEpisode } from "./CharactersEpisode";
import { LoadingQuote } from "./LoadingQuote";
import { Quotes } from "./Quotes";
import "../Estilos/style.css";

export const MultipleCustomHokks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/episode/${counter}`
  );
  let idCharacter = 0;
  const { name, url, characters } = !!data && data;
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      <button
        className="btn btn-primary mx-2"
        onClick={() => increment(1)}
        disabled={isLoading}
      >
        Next Quote
      </button>
      {isLoading ? <LoadingQuote /> : <Quotes name={name} url={url} />}
      {
        <div className="character">
          {characters 
            ? characters.map(e => (<CharactersEpisode key={idCharacter++} uri={e} />)) 
            : (<LoadingQuote />)}
        </div>
      }

    </>
  );
};
