import { useState, useEffect } from 'react';
import { getTrendMovie } from "services/API";
import MovieList from 'components/MovieList/MovieList';

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
        <>
            
            <MovieList movieList={trendMovies}>
                <h2
                style={{
                    textAlign: 'center',
                    marginTop: '20px'
                }}>
                Treding Movies
            </h2>
            </MovieList>
        </>

    );
}