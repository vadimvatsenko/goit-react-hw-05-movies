import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { RotatingLines } from "react-loader-spinner";

import Nav  from './Nav/Nav';
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

const Home = lazy(() => import('../pages/Home'));
const Movie = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const NotFound = lazy(() => import('../pages/NotFound'));


export const App = () => {
  return (
    <Suspense fallback={
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />}>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:movieId" element={<MovieDetails />}>
            
            <Route path='cast' element={<Cast />} />
              
            <Route path='reviews' element={<Reviews />} />
           
          </Route>
        </Route>

          <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
};




