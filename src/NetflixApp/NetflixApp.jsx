import { useEffect, useState } from 'react';
import MovieBanner from '../MovieBanner/MovieBanner';
const NetflixApp = () => {
  const [myObject, setMyObject] = useState({});
  const [movie,setMovie] = useState('mega');
  const [isData,setIsData] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {        
        const response = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=adf4a366`);
        const data = await response.json();
        setMyObject(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [movie]);

  function setNewValue({target:{value}}){
    console.log(value)
    setMovie(value)
  }

  return (
    <>
      <MovieBanner 
        Poster={myObject.Poster}
        Title={myObject.Title}
        Director={myObject.Director}
        Actors={myObject.Actors}
        imdbRating={myObject.imdbRating}
        Plot={myObject.Plot}
      />
      <input type="text" onChange={setNewValue}/>
    </>
  );
};

export default NetflixApp;
