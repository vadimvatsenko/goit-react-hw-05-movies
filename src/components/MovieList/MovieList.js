import { Link } from "react-router-dom";
import style from './MovieList.module.scss';

export default function MovieList({ movieList }) {
    return (
        <section className={style.trendingMovie}>
            
            <ul>
                {movieList.map(({ title, name, id }) => (
                <li key={id} className={style.trendingMovieItem}  >
                        <Link  to={`/goit-react-hw-05-movies/movie/${id}`}>
                        {title ? title : name}
                    </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}