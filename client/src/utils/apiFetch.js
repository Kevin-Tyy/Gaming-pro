import axios from "axios";

const BASE_URL = "https://api.rawg.io/api"
const key ="42d4a1424e9f43acb4ce34bb34c4b0df"

export const fetchFromAPI = async (url, page) => {
    const {data} = await axios.get(`${BASE_URL}/${url}?key=${key}&page=${page}`)
    return data;
}
export const fetchDetail = async (url)=> {
    const {data} = await axios.get(`${BASE_URL}/${url}?key=${key}`)
    return data;
}
