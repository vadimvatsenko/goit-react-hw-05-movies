import axios from "axios";

const API_KEY = '137ae7e6367e772dd156f1aad841f871';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'



export default async function getTrendMovie() {
    const axiosUrl = `trending/all/day?api_key=${API_KEY}`
    const response = await axios.get(axiosUrl)
    return response.data.results;
    
};


