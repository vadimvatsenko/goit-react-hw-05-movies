import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { reviewMovieById } from "services/API";
import style from './Reviews.module.scss'



export default function Reviews() {
    const { movieId } = useParams();
    const [reviewsObj, setReviewsObj] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovieObj = async () => {
            try {
                const getReviewsObj = await reviewMovieById(movieId);
                setReviewsObj(getReviewsObj);
            } catch (error) {
                setError(error);
            }
        }
        getMovieObj();
    }, [movieId]);

    
    if (reviewsObj) {
        return (
            <section>
                <ul className={style.reviews}>
                    {reviewsObj.map(({ id, author, content }) => (
                        <li key={id} className={style.reviewsItem}>
                            <p>{author}</p>
                            <p className={style.reviewsItemDescr}>{content}</p>
                        </li>
                    ))}
                </ul>
            </section>
          
        );
    } if (reviewsObj === false) {
        return (
            <section className={style.reviews}>
                <p>Reviews is Emty</p>
            </section>
        )
    }
            
}       
    
                

