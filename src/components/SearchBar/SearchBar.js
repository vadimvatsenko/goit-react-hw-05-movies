import style from './Searchbar.module.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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
        if (name === null) {
                setSearchMovieObj([])
                return;
            }
            const getSearchFilmsObj = async () => {
                try {
                    const searchFilmObj = await findMovieByName(name);
                    setSearchMovieObj(searchFilmObj);
                    if (searchFilmObj.length === 0) {
                       Notify.failure('Nothing'); 
                    }
 
                } catch (error) {
                    setError(error);
                }
            }
            getSearchFilmsObj();
        },[name])


    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ name: form.elements.search.value.toLowerCase() });
       
        if (form.elements.search.value === '') {
            Notify.failure('Nothing');
            setSearchMovieObj(null);
            return;
        }
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



