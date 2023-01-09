import style from './Searchbar.module.scss';
import { useState, useEffect } from 'react';
import { useSearchParams} from 'react-router-dom';
import { findMovieByName } from 'services/API';
import MovieList from 'components/MovieList/MovieList';

export default function Searchbar() {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name");
    const [searchMoviesObj, setSearchMovieObj] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (name === null ) {
                return;
            }
            const getSearchFilmsObj = async () => {
                try {
                    const searchFilmObj = await findMovieByName(name);
                    setSearchMovieObj(searchFilmObj)
                } catch (error) {
                    setError(error);
                }
            }
            getSearchFilmsObj();
        },[name, searchMoviesObj])


    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ name: form.elements.search.value });
        form.reset();
    }
    
    return (
        <>
            <section className={style.searchbar}>
            
                <form
                    className={style.searchForm}
                    onSubmit={handleFormSubmit}
                >
                    <input
                        className={style.searchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search Movies"
                        name='search'

                    />
                    <button className={style.searchFormButton} type='submit'></button>
                </form>
            </section>
            <section>
                {searchMoviesObj && <MovieList movieList={searchMoviesObj} />}
            </section>
        </>
    );

}



