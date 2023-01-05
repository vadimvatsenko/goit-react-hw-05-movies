import { useParams } from "react-router-dom"


export default function MovieDetails({ trendMovie }) {
  
    // const { id } = useParams();
    console.log(trendMovie);

    const getMovieById = (movieId) => {
    return trendMovie.find((movie) => movie.id === movieId)
  }

    return (
        <h2>Hello</h2>
    )
}