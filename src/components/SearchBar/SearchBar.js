import style from './Searchbar.module.scss';
import { useState } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function Searchbar({onSubmit}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movie";
    const [searchMovies, setSearchMovies] = useState('')
    const name = searchParams.get("name");

    const handleChangeName = e => {
        setSearchParams({ name: e.currentTarget.value.toLowerCase() });
        setSearchMovies(e.currentTarget.value.toLowerCase())
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        onSubmit(searchMovies);
        searchMovies('')


    }
    
    return (
        <>
        <Link to={backLinkHref}>Back to products</Link>
        <div className={style.searchbar}>
            
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
                    onChange={handleChangeName}
                    value={name}
                />
                <button className={style.searchFormButton} type='submit'></button>
            </form>
            </div>
            </>
    );

}

    
