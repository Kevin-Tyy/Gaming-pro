import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://steam-game-search-and-details.p.rapidapi.com/game_search/search_like/title/',

    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '4e398042e3msh659ac940dbb6dcap1d7a79jsndddf05ac940b',
      'X-RapidAPI-Host': 'steam-game-search-and-details.p.rapidapi.com'
    }

  };

  
export const searchAPI = async (queryString) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
   
}


