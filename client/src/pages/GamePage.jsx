import React, {useEffect, useState} from 'react'
import { fetchFromAPI } from '../utils/apiFetch'
import GameCard from '../components/GameCard'

const Home = () => {
	const [games, setgames ] = useState([])
  useEffect(()=>{
    fetchFromAPI('games').then((data)=>{
		setgames(data)

	}
    )
	
  }, [])
  console.log(games);

  return (
    <div className=''>
		<GameCard games={games}/>
	</div>
  )
}

export default Home