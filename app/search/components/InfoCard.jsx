'use client'
import { StarIcon, HeartIcon as FilledHeartIcon } from '@heroicons/react/24/solid'
import {HeartIcon} from "@heroicons/react/24/outline"
import React, { useState } from 'react'

const InfoCard = ({listing}) => {
    const [isFav,setIsFav]=useState(false);
    const handleFavUpdate=()=>{
        setIsFav(prevIsFav=>!prevIsFav)
    }
  return (
    <div className='max-w-md mx-auto shadow-md rounded-lg overflow-hidden'>
        <img src={listing.image} alt={listing.name} className='w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110'/>
        <div className='p-4'>
            <div className='flex items-center justify-between mb-2'>
                <h3 className='text-xl font-semibold mb-2'>{listing.name}</h3>
                <div className='flex items-center'>
                    <StarIcon className='h-5 w-5 text-yellow-500 mr-1' />
                    <span className='text-gray-800'>{listing.rating}</span>
                </div>
            </div>
            <p className='text-gray-600 mb-4'>{listing.description}</p>
            <button onClick={handleFavUpdate} className=' p-1 right-4 -z-30'>
                {
                    isFav? <FilledHeartIcon className='w-5 h-5 text-primary'/> :<HeartIcon className='w-5 h-5 text-primary'/>
                }
            </button>
        </div>
    </div>
  )
}

export default InfoCard