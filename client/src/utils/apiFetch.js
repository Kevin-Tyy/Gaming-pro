import axios from "axios";

const BASE_URL = "https://free-to-play-games-database.p.rapidapi.com/api"

const options = {
    headers : {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '4e398042e3msh659ac940dbb6dcap1d7a79jsndddf05ac940b',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
}
export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}