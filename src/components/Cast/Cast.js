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
            setMovieCastObj(castObj)

      } catch (error) {
        setError(error);
      }
    }
    getMovieObj();
   }, [movieId]);
    
 
    if (movieCastObj) {
        // const imgUrl = `https://image.tmdb.org/t/p/w500/${profile_path}`;
  
        return (
            <ul>
                {movieCastObj.map(({name, character, profile_path}) => (
                <li>
                    <img  alt={name} />
                    <p>{ name}</p>
                    <p>{character }</p>
                    </li>
                    ))}
                   
            </ul>
        )
    }
}