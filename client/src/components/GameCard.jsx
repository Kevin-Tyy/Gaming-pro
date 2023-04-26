import { Skeleton, Typography } from '@mui/material'
import { CircularProgress } from '@mui/material';
import React , { useState } from 'react'

const GameCard = ({games}) => {
    const [currentPage, setCurrentPage] = useState(1);
    if(!games.length){
        return (
            <div className='grid grid-cols-5'>
            </div>
        )
    }
    const gameCardPerPage = 20;
    const gamesArray = games;
    const numberOfPages = Math.ceil(gamesArray.length / gameCardPerPage)
    const paginatedArray = Array.from({length: gameCardPerPage}, (_, i) => gamesArray.slice(i * gameCardPerPage , i * gameCardPerPage + gameCardPerPage))

    function displayPage (pageNumber) {
        const pageItems = paginatedArray[pageNumber];
    }
    const handlePaginationClick = (pageNumber) => {
        displayPage(pageNumber);
    } 
    console.log(games)
    
    displayPage[0];
  return (
    <div className='flex flex-wrap items-center justify-center text-white font-extrabold'>

        {games.map((gameElement)=> (
            <div>
                <img src={gameElement.thumbnail} alt={gameElement.title}/>
                <Typography className='text-white'>
                    {gameElement.title}
                </Typography>   
            </div>
        ))}
        </div>        
  )
}

export default GameCard;