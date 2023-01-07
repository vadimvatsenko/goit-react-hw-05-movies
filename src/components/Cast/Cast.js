import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { castMovieById } from "services/API";
import style from './Cast.module.scss';



export default function Cast() {
    const { movieId } = useParams();
    const [movieCastObj, setMovieCastObj] = useState(null);
    const [error, setError] = useState(null);

    console.log(movieId)

   useEffect(() => {
    const getMovieObj = async () => {
      try {
          const castObj = await castMovieById(movieId);
            setMovieCastObj(castObj)

      } catch (error) {
        setError(error);
      }
    }
    getMovieObj();
   }, [movieId]);
    
 
    if (movieCastObj) {
        // const imgUrl = `https://image.tmdb.org/t/p/w500/${profile_path}`;
  
        return (
            <ul className={style.cast}>
                {movieCastObj.map(({ id, name, character, profile_path }) => (
                    
                    <li key={id} className={style.castWrap}>
                        {profile_path !== null ?
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                                alt={name}
                                width='280' /> :
                            
                            
                            <div className={style.noFotoWrap}><img className={style.noFotoImg}
                                src='https://w7.pngwing.com/pngs/998/203/png-transparent-black-and-white-no-to-camera-logo-video-on-demand-retail-website-simple-no-miscellaneous-television-text.png'
                                alt={name}
                               
                            /></div>}
                           
                        <div className={style.castInfo}>
                            <p>{name}</p>
                            <p>{character}</p>
                        </div>
                    </li>
                ))}
                   
            </ul>
        );
    }
}