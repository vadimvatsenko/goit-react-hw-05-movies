import { Routes, Route } from "react-router-dom";

// pages
import { Home } from '../pages/Home';
import { Movie } from '../pages/Movies';
import {MovieDetails} from '../pages/MovieDetails'
import { NotFound } from "../pages/NotFound";
// elements
import Nav  from './Nav/Nav';
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

export const App = () => {
  

  return (
    <div>
      
    <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<Movie />} />
          <Route path="movie/:movieId" element={<MovieDetails />}>
          <Route path='cast' element={<Cast/>} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>

      
    </div>
  );
};

