import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
// import Home from "path/to/pages/Home";
// import About from "path/to/pages/About";
// import Products from "path/to/pages/Products";


import getTrendMovie from '../services/API';
import TrandingMovie from './TrandingMovie/TrandingMovie';
import MovieDetails from "./MovieDetails/MovieDetails";
import { Home } from '../pages/Home';
import { Movie} from '../pages/Movies'
import { NotFound } from "../pages/NotFound";
import { Nav } from './Nav/Nav';




export const App = () => {
  const [trendMovie, setTrendMovie] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);


  useEffect(() => {
   
      const getTrandObj = async () => {
        const trandObj = await getTrendMovie();
        setTrendMovie(trandObj);
      }
      getTrandObj();
    
  }, []);



//   const getProductById = (productId) => {
//   return products.find((product) => product.id === productId);
// };

  

  return (
    <div>
      <Nav />
      
    <Routes>
        <Route path="/" element={<Home>
          <TrandingMovie trandMovies={trendMovie} />
        </Home>} />
        
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:movieId" element={<MovieDetails trandMovies={trendMovie}/>} />

        <Route path="*" element={<NotFound />} />
    </Routes>

      
    </div>
  );
};