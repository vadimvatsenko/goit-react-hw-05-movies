import { Searchbar } from "components/SearchMovieForm/SearchBar";
import { useState } from "react";

export const Movie = () => {
    const [searchMovie, setSearchMovie] = useState('')
    return (
        <Searchbar/>
        
    )
}