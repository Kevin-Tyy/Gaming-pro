import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
const SearchPage = () => {
  const searchQuery = useParams()

  useEffect(()=> {
    searchAPI(`title?search_value=${searchQuery}`).then((data)=> {
      console.log(data);
    })
  },[searchQuery]);


  return (
    <div>
      
    </div>
  )
}

export default SearchPage