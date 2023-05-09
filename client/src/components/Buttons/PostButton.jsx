import React from 'react'

const PostButton = ({ handlePostToggle }) => {
  return (
        <button onClick={handlePostToggle} className='text-white py-2 px-5 bg-gradient-to-r from-blue-700 to-violet-800 rounded-full'>
            Create a post
        </button>
  )
}

export default PostButton