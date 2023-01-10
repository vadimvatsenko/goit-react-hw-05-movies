import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';

import Nav  from './Nav/Nav';
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

const Home = lazy(() => import('../pages/Home'));
const Movie = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const NotFound = lazy(() => import('../pages/NotFound'));


export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<Nav />}>
          <Route index element={<Home />} />
          
          <Route path="/goit-react-hw-05-movies/movie" element={<Movie />} />
          <Route path="/goit-react-hw-05-movies/movie/:movieId" element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};




