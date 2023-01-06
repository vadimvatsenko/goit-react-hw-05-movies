import React from "react";
import { Link } from "react-router-dom";
import style from './TrandingMovie.module.scss';

export default function TrandingMovie({ trandMovies }) {

    return (
        <section className={style.trendingMovie}>
            <h2 className={style.trendingMovieTitle}>Treding Movies</h2>
            <ul>
                {trandMovies.map(({ title, name, id }) => (
                <li key={id} className={style.trendingMovieItem}  >
                        <Link  to={`/movie/${id}`}>
                        {title ? title : name}
                    </Link>
                    </li>
                ))}
            </ul>
        </section>
    );

 
    
}