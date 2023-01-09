//DONE
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { castMovieById } from "services/API";
import style from './Cast.module.scss';

export default function Cast() {
    const { movieId } = useParams();
    const [movieCastObj, setMovieCastObj] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null);

   useEffect(() => {
    const getMovieObj = async () => {
      try {
          const castObj = await castMovieById(movieId);
          setMovieCastObj(castObj);


      } catch (error) {
        setError(error);
      }
    }
    getMovieObj();
   }, [movieId]);
    
 
    if (movieCastObj) {
  
        return (
            <section>
                <ul className={style.cast}>
                    {movieCastObj.map(({ id, name, character, profile_path, gender }) => (
                    
                        <li key={id} className={style.castWrap}>
                            {profile_path !== null ?
                                <div className={style.noFotoWrap}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                                        alt={name}
                                        width='280' />
                                </div>
                                :
                                <div className={style.noFotoWrap}>
                                    <img className={style.noFotoImg}
                                        src={gender === 1 ? 'https://svgsilh.com/svg/2028615.svg' : 'https://svgsilh.com/svg_v2/40041.svg'}
                                        alt={name}
                                        width='280'
                                    />
                                </div>}
                           
                            <div className={style.castInfo}>
                                <p>{name}</p>
                                <p>{character}</p>
                            </div>

                        </li>
                    ))}
                   
                </ul>
            </section>
        );
    } if (movieCastObj === false) {
        return (
            <div className={style.castEmty}>Cast is Emty</div>
        );
    }
}
    


