import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCart = ({posterPath}) => {
  return (
    <div children='w-64 pr-4'>
        <img className="" alt='poster_path' src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCart;