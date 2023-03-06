import "../Estilos/style.css";

const MovieBanner = ({ Poster, Title, imdbRating, Director, Actors, Plot }) => {
    console.log(Title)
  if (Title === undefined) {
    return (
      <>
        <h1>No hay pelicula</h1>
      </>
    );
  } else {
    return (
      <>
        <div className="padre">
          <div>
            <img src={Poster} alt={Title} />
          </div>
          <div>
            <h1>{Title}</h1>
            <p>{Director}</p>
            <p>{Actors}</p>
            <p>{imdbRating}</p>
            <p>{Plot}</p>
          </div>
        </div>
      </>
    );
  }
};

export default MovieBanner;
