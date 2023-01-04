import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
// import Home from "path/to/pages/Home";
// import About from "path/to/pages/About";
// import Products from "path/to/pages/Products";


import getTrendMovie from '../services/API';
import TrandingMovie from './TrandingMovie/TrandingMovie';
import { Home } from '../pages/Home';
import { Movie} from '../pages/Movies'
import { NotFound } from "../pages/NotFound";
import { Nav } from './Nav/Nav';




export const App = () => {
  const [trendMovie, setTrendMovie] = useState([])


  useEffect(() => {
   
      const getTrandObj = async () => {
        const trandObj = await getTrendMovie();
        setTrendMovie(trandObj);
      }
      getTrandObj();
    
  }, []);

  

  return (
    <div>
      <Nav />
      
    <Routes>
        <Route path="/" element={<Home>
          <TrandingMovie trandMovies={trendMovie} />
        </Home>} />
        <Route path="/movie" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
    </Routes>

      
    </div>
  );
};