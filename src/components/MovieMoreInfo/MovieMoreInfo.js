import style from './MovieMoreInfo.module.scss';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';



export default function MovieMoreInfo({ backLinkHref }) {
  console.log(backLinkHref)
  

  return (
    <section className={style.moviMoreInfoSection}>
      <ul className={style.movieMoreInfo}>
        <li className={style.movieMoreInfoLink}>
          <Link state={{ from: backLinkHref }}
            to="cast">
            Cast
          </Link>
        </li>
        <li className={style.movieMoreInfoLink}>
          <Link
            state={{ from: backLinkHref }}
            to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
    </section>
  );
}

MovieMoreInfo.propTypes = {
 
  backLinkHref: 
      PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.any,
      key: PropTypes.string
      
    }).isRequired
  
}