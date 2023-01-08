import style from './MovieInfo.module.scss';


export default function MovieInfo({title, imgUrl, release_date, overview, genres, vote_average}) {
    return (
        <section className={style.movieWrap}>
          <img src={imgUrl} alt={title} width='300' />
          <div>
            <h3>{title} {`(${release_date.slice(0, 4)})`}</h3>
            <div className={style.overview}>
              <h4>User Score</h4>
              <p className={style.genresItem}>{Math.round(vote_average * 10)}%</p>
            </div>

            <div className={style.overview}>
              <h4>Overview</h4>
              <p className={style.genresItem}>{overview}</p>
            </div>
            <div className={style.overview}>
              <h4>Genres</h4>
              <ul className={style.genres}>
                {genres.map(({ id, name }) => (
                  <li className={style.genresItem} key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
    )
}