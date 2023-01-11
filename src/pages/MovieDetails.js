import { useParams, Outlet, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { findMovieById } from '../services/API';
import { HiArrowLeft } from "react-icons/hi";
import MoreInfo from '../components/MovieInfo/MovieInfo';
import MovieMoreInfo from "components/MovieMoreInfo/MovieMoreInfo";

export default function MovieDetails() {

  const { movieId } = useParams();
  const [currentMovieObj, setCurrentMovieObj] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movie";

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
      
        <div>
        <Link to={backLinkHref}
          style={{
          position: 'absolute',
          display: 'inline-block',
          backgroundColor: 'yellow',
          padding: '10px',
          borderRadius: '5px',
        }}>
          <HiArrowLeft />
          Back
        </Link>
        <MoreInfo
          
          title={title}
          imgUrl={imgUrl}
          release_date={release_date}
          overview={overview}
          genres={genres}
          vote_average={vote_average}
        
        />
          
        <MovieMoreInfo backLinkHref={ backLinkHref} />
        <Outlet />
      </div>
    );
  }
}