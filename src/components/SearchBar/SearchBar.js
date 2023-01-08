import style from './Searchbar.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';


export default function Searchbar({onSubmit}) {
    // const [searchMovie, setSearchMovie] = useState('');
    const [changeInput, setChangeInput] = useState('');

    const handleChangeName = e => {
        setChangeInput(e.currentTarget.value.toLowerCase())
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(changeInput);
        setChangeInput('')
        
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
                    value={changeInput}
                />
                <button className={style.searchFormButton} type='submit'></button>
            </form>
        </div>
    );

}

    
