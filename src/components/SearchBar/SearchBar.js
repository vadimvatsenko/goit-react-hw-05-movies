import style from './Searchbar.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';


export default function Searchbar() {
    const [searchMovie, setSearchMovie] = useState('');
    const [changeInput, setChangeInput] = useState('');

    const handleChangeName = e => {
        setChangeInput(e.currentTarget.value.toLowerCase())
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSearchMovie(e.currentTarget.value.toLowerCase())
        // onSubmit(imgName);
        // проп с APP в него передаем значение submit
        setSearchMovie('')
        //очистка после submit
        
    };

    return (
        <div className={style.searchbar}>
            <form
                className={style.searchForm}
                onSubmit={handleSubmit}>
                <input
                    className={style.searchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search Movies"
                    onChange={handleChangeName}
                    value={searchMovie}
                />
                <button className={style.searchFormButton} type='submit'></button>
            </form>
        </div>
    );

}

    
