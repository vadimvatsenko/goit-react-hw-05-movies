import style from './Searchbar.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';


const Searchbar = ({onSubmit}) => {
    const [imgName, setImgName] = useState('')

    const handleChangeName = e => {
        setImgName(e.currentTarget.value.toLowerCase())
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(imgName);
        //проп с APP в него передаем значение submit
        setImgName('')
        //очистка после submit
        
    };

    return (
        <div className={style.searchbar}>
            <form
                className={style.searchForm}
                onSubmit={handleSubmit}>

                {/* {children} */}

                <input
                    className={style.searchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search Movies"
                    onChange={handleChangeName}
                    value={imgName}
                />
            </form>
        </div>
    );

}

export { Searchbar };
    
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}