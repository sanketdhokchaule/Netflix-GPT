import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-[100%] aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='py-6 text-sm w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-3 px-10 text-lg rounded-sm hover:bg-opacity-80'>▶ Play</button>
            <button className='bg-white text-white p-3 px-12 text-lg rounded-sm ml-3 bg-opacity-30 hover:bg-opacity-40'>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;