import React from 'react'
import ResultsList from './ResultsList';

const page = async() => {
    const res=await fetch('http://localhost:3000/api/search');
    const data=await res.json();
  return (
    <>
       <ResultsList data={data} />
    </>
  )
}

export default page