import { useParams } from "react-router-dom"
import { findMovieById } from '../services/API'


export default function MovieDetails() {
  const { movieId } = useParams();
  const movie = findMovieById(movieId);
  const { title, genres, vote_average } = movie;

  console.log(title)



  

  return (
    
   <div>{title}</div>
    )
}