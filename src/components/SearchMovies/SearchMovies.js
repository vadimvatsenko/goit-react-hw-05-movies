import style from '../TrandingMovie/TrandingMovie.module.scss';
import { Link } from 'react-router-dom';


export default function SearchMovies({ searchMoviesObj }) {
    
    return (
        <section className={style.trendingMovie}>
            <ul>
                {searchMoviesObj.map(({ title, name, id }) => (
                <li key={id} className={style.trendingMovieItem}  >
                        <Link  to={`/goit-react-hw-05-movies/movie/${id}`}>
                        {title ? title : name}
                    </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}