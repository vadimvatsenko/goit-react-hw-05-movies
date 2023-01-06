import { useParams } from "react-router-dom"
import { findMovieById } from '../services/API'


export default function MovieDetails() {
  const { movieId } = useParams();
  const movie = findMovieById(movieId);
  console.log(movie)
  console.log(movie)
   


    return (
      <h2>{movie}</h2>
    )
}