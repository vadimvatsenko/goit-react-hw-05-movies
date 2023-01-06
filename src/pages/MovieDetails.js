import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findMovieById } from '../services/API'


export default function MovieDetails() {

  const { movieId } = useParams();
  const [currentMovieObj, setCurrentMovieObj] = useState({});
  const [error, setError] = useState(null);

  const { title, poster_path, release_date} = currentMovieObj;
  const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`

  useEffect(() => {
    const getMovieObj = async () => {
      try {
        const movieObj = await findMovieById(movieId);
        setCurrentMovieObj(movieObj)
      } catch (error) {
        setError(error);
      }
    }
    getMovieObj();
  },[movieId])
  return (
    <div>
      <img src={imgUrl} alt={title} width='300'/>
      <h3>{title} {`(${release_date.slice(0, 4)})`}</h3>
    </div>
  )
}