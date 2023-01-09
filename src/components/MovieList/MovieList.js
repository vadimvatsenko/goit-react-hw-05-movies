//DONE
import { Link, useLocation } from "react-router-dom";
import style from './MovieList.module.scss';
import PropTypes from 'prop-types';

export default function MovieList({ movieList, children }) {
     const location = useLocation()

    return (
       
        <section className={style.trendingMovie}>
            {children && children}
            <ul>
                {movieList.map(({ title, name, id }) => (
                    <li key={id} className={style.trendingMovieItem}  >
                        <Link
                            to={`/goit-react-hw-05-movies/movie/${id}`}
                            state={{ from: location }}>
                            {title ? title : name}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
     
    );
}


MovieList.propTypes = {
 
  movieList: PropTypes.arrayOf(
      PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string
    }).isRequired
  )
}
