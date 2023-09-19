import {create} from 'zustand'
const initalState={
    location:"",
    dates:[new Date(),new Date()],
    guests:0
}
export const useSearchStore=create((set)=>({
    ...initalState,
    increaseGuests:()=>set((state)=>({guests:state.guests+1})),
    decreaseGuests:()=>set((state)=>({guests:state.guests-1})),
    removeAllFilter:()=>set(initalState)
}))
