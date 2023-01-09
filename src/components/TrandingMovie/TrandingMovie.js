import React from "react";
import { Link } from "react-router-dom";
import style from './TrandingMovie.module.scss';
import { useState, useEffect } from 'react';
//Api
import { getTrendMovie } from "services/API";

export default function TrandingMovie() {

    const [trendMovies, setTrendMovies] = useState([]);
    useEffect(() => {
   
      const getTrandObj = async () => {
        const trandObj = await getTrendMovie();
        setTrendMovies(trandObj);
      }
      getTrandObj();
    
    }, []);
    

    return (
        <section className={style.trendingMovie}>
            <h2 className={style.trendingMovieTitle}>Treding Movies</h2>
            <ul>
                {trendMovies.map(({ title, name, id }) => (
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