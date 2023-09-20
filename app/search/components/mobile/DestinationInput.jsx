import { useSearchStore } from '@/store'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

const DestinationInput = () => {
    const locationInput=useSearchStore((state)=>state.location);
  return (
    <div className='destination-input bg-white border flex flex-row items-center rounded-md p-1'>
        <span>
            <MagnifyingGlassCircleIcon className='h-5 w-5 text-gray-400'/>     
        </span>
        <input type="text" id="destination" name="destination" placeholder="Where are you going?" value={locationInput} onChange={(e) => useSearchStore.setState({ location: e.target.value })} className="pl-4 py-2 pr-4 bg-transparent rounded-full focus:outline-none"/>
    </div>
  )
}

export default DestinationInput