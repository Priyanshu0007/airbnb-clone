import { useSearchStore } from '@/store'
import React, { useState } from 'react'
const CountIcon=({icon,onClick})=>{
    return(
        <button onClick={onClick} className='border rounded-full w-5 h-5 flex'>
            <span>{icon}</span>
        </button>
    )
}
const Counter = ({label}) => {
    const [guests,increaseGuests,decreaseGuests]=useSearchStore((state)=>[state.guests,state.increaseGuests,state.decreaseGuests]);
  return (
    <div className='flex justify-between'>
        <p className='font-bold'>{label}</p>
        <div className='flex items-center gap-x-1'>
            {
                guests>0 &&(
                    <CountIcon icon="-" onClick={decreaseGuests} />
                )
            }
            <span>{guests}</span>
                <CountIcon icon="+" onClick={increaseGuests} />
        </div>
    </div>
  )
}

export default Counter