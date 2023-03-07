import { useFetch } from "../Hooks/useFetch";

export const MultipleCustomHokks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://rickandmortyapi.com/api/episode/28"
  );

    const {name, url} = !!data && data;
    console.log(name,url)

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{name}</p>
          <footer className="blockquote-footer">{url}</footer>
        </blockquote> 
      )}
    </>
  );
};
