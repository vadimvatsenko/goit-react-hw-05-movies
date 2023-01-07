import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

import { getTrendMovie } from "services/API";
import TrandingMovie from './TrandingMovie/TrandingMovie';

// pages
import { Home } from '../pages/Home';
import { Movie } from '../pages/Movies';
import {MovieDetails} from "../pages/MovieDetails/MovieDetails";
import { NotFound } from "../pages/NotFound";
// elements
import { Nav } from './Nav/Nav';




export const App = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  // const [searchMovie, setSearchMovie] = useState([]);
  useEffect(() => {
   
      const getTrandObj = async () => {
        const trandObj = await getTrendMovie();
        setTrendMovies(trandObj);
      }
      getTrandObj();
    
  }, []);

  return (
    <div>
      <Nav />
    <Routes>
        <Route path="/" element={<Home>
          <TrandingMovie trandMovies={trendMovies} />
        </Home>} />
        
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path='/movies/:movieId/cast' element={<Cast/>} />
        <Route path='/movies/:movieId/reviews' element={<Reviews/>} />
        <Route path="*" element={<NotFound />} />
    </Routes>

      
    </div>
  );
};