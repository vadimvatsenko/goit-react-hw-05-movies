import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { castMovieById } from "services/API";



export default function Cast() {
    const { movieId } = useParams();
    const [movieCastObj, setMovieCastObj] = useState(null);
    const [error, setError] = useState(null);

    console.log(movieId)

   useEffect(() => {
    const getMovieObj = async () => {
      try {
          const castObj = await castMovieById(movieId);
          console.log(castObj)
          const { character, name, profile_path } = castObj;
          setMovieCastObj({
              character,
              name,
              profile_path
          });
  
      } catch (error) {
        setError(error);
      }
    }
    getMovieObj();
   }, [movieId]);
    
    if (movieCastObj) {
        const { character, name, profile_path } = movieCastObj;
        const imgUrl = `https://image.tmdb.org/t/p/w500/${profile_path}`;
  
        return (
            <ul>
                <li>
                    <img src={imgUrl} alt={name} />
                    <p>{ name}</p>
                    <p>{character }</p>
                </li>
            </ul>
        )
    }
}