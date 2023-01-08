import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { findMovieById } from '../../services/API'
import style from './MovieDetails.module.scss'


export const MovieDetails = () => {

  const { movieId } = useParams();
  const [currentMovieObj, setCurrentMovieObj] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieObj = async () => {
      try {
        const movieObj = await findMovieById(movieId);
        const {title, poster_path, release_date, overview, genres, vote_average} = movieObj
        setCurrentMovieObj({
          title,
          poster_path,
          release_date,
          overview,
          genres,
          vote_average
        })
      } catch (error) {
        setError(error);
      }
    }
    getMovieObj();
  }, [movieId]);
  
  if (currentMovieObj) {
    const { title, poster_path, release_date, overview, genres, vote_average } = currentMovieObj;
    const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  
    return (
      <main >
        <section className={style.movieWrap}>
          <img src={imgUrl} alt={title} width='300' />
          <div>
            <h3>{title} {`(${release_date.slice(0, 4)})`}</h3>
            <div className={style.overview}>
              <h4>User Score</h4>
              <p className={style.genresItem}>{Math.round(vote_average * 10)}%</p>
            </div>

            <div className={style.overview}>
              <h4>Overview</h4>
              <p className={style.genresItem}>{overview}</p>
            </div>
            <div className={style.overview}>
              <h4>Genres</h4>
              <ul className={style.genres}>
                {genres.map(({ id, name }) => (
                  <li className={style.genresItem} key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className={style.moviMoreInfoSection}>
          <ul className={style.movieMoreInfo}>
            <li className={style.movieMoreInfoLink}><Link to="cast" end>Cast</Link></li>
            <li className={style.movieMoreInfoLink}><Link to="reviews" end>Reviews</Link></li>
          </ul>
        </section>
        <Outlet />
      </main>
    );
  }
}