import { useCounter, useFetch } from "../Hooks";
import "../Estilos/style.css";
import { LoadingQuote } from "../Examples/LoadingQuote";
import { Quotes } from "../Examples/Quotes";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/episode/${counter}`
  );
  const { name, url } = !!data && data;
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
    </>
  );
};
