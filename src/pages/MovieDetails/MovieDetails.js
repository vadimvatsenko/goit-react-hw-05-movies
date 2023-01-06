import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findMovieById } from '../../services/API'
import style from './MovieDetails.module.scss'


export default function MovieDetails() {

  const { movieId } = useParams();
  const [currentMovieObj, setCurrentMovieObj] = useState({});
  const [error, setError] = useState(null);

  const { title, poster_path, release_date, overview} = currentMovieObj;
  const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
 

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
  }, [movieId])
  
  return (
    <div className={style.movieWrap}>
      <img src={imgUrl} alt={title} width='300' />
      <div>
        <h3>{title} {`(${release_date})`}</h3>

        <div className={style.overview}>
          <h4>Overview</h4>
          <p>{overview}</p>
        </div>

        <div className={style.overview}>
          <h4>Overview</h4>
          <p>{overview}</p>

        </div>
      </div>
    </div>
  );
}