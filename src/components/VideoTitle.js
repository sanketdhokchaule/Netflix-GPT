import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-[100%] aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div className='my-4 md:m-0'>
            <button className='bg-white text-black py-1 md:py-3 px-3 md:px-12 text-lg rounded-sm hover:bg-opacity-80'>▶ Play</button>
            <button className='hidden md:inline-block bg-white text-white p-3 px-12 text-lg rounded-sm ml-3 bg-opacity-30 hover:bg-opacity-40'>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;