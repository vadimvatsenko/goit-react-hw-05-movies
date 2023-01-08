import Searchbar  from "components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { findMovieByName } from 'services/API'

export const Movie = () => {
    const [searchMovie, setSearchMovie] = useState('');
    const [error, setError] = useState(null);
    const [searchMoviesObj, setSearchMovieObj] = useState([]);

    useEffect(() => {
            if (searchMovie === '') {
                return;
            }
            const getSearchFilmsObj = async () => {
                try {
                    const searchFilmObj = await findMovieByName(searchMovie);
                    setSearchMovieObj(searchFilmObj)
                } catch (error) {
                    setError(error);
                }
            }
            getSearchFilmsObj();
        },[searchMovie])
    
    


        const handleFormSubmit = name => {
            setSearchMovie(name)
        }
    
        return (
            <>
            <Searchbar
                    onSubmit={handleFormSubmit} />
            
        </>
        )
    }