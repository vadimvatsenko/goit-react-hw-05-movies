import style from './MovieMoreInfo.module.scss';
import { Link } from "react-router-dom";

export default function  MovieMoreInfo() {
    return (
        <section className={style.moviMoreInfoSection}>
          <ul className={style.movieMoreInfo}>
            <li className={style.movieMoreInfoLink}><Link to="cast">Cast</Link></li>
            <li className={style.movieMoreInfoLink}><Link to="reviews">Reviews</Link></li>
          </ul>
        </section>
    )
}