//DONE
import axios from "axios";

const API_KEY = '137ae7e6367e772dd156f1aad841f871';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'



export async function getTrendMovie() {
    const axiosUrl = `trending/movie/day?api_key=${API_KEY}`
    const response = await axios.get(axiosUrl)
    return response.data.results;

};

export async function findMovieById(movie_id) {
    const axiosUrl = `movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    const response = await axios.get(axiosUrl);
    return response.data;
}

export async function findMovieByName(movieName) {
    const axiosUrl = `search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`
    const response = await axios.get(axiosUrl);
    return response.data.results;
}

export async function castMovieById(movie_id) {
    const axiosUrl = `movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(axiosUrl);
    if (response.data.cast.length === 0) {
        return false
    }
    return response.data.cast;
}

export async function reviewMovieById(movie_id) {
    const axiosUrl = `movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await axios.get(axiosUrl);  
    if (response.data.total_results === 0) {
        return false
    }
    return response.data.results;
}

