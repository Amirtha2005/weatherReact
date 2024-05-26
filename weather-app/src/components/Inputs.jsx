import React, { useState } from 'react'
import { CgSearch } from "react-icons/cg";
import { FaLocationCrosshairs } from "react-icons/fa6";

export default function Inputs({setQuery , setUnits}) {

  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false);

  const handleSearch = ()=>{
   // if(city !== "") setQuery({q : city})
      if (city !== "") {
        setLoading(true);
        setQuery({ q: city });
        // Simulate an API call
        setTimeout(() => {
          setLoading(false); // Remove this line in a real scenario where setQuery would handle it
        }, 1000); // Adjust time as needed
      }
  }

  const handleLocationClick = ()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        const {latitude , longitude} = position.coords
        setQuery({lat: latitude, lon: longitude})
      })
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row width-3/4 items-center space-x-4'>
        <input 
        type='text' 
        placeholder='search' 
        className='p-2 font-semibold w-full capitalize focus:outline-none rounded'
        onChange={(e)=>setCity(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        ></input>
        <CgSearch onClick={handleSearch}  className='text-4xl text-white cursor-pointer transition ease-out hover:scale-125 '/>
        <FaLocationCrosshairs onClick={handleLocationClick}  className='text-3xl text-white cursor-pointer transition ease-out hover:scale-125 '/>
      </div>

      <div className='flex flex-row w-1/4 items-center justify-center text-white'>
        <button onClick={()=> setUnits("metric")} className='text-2xl font-medium transition ease-out hover:scale-125'>°C</button>
        <p className='text-2xl px-1 font-medium'>|</p>
        <button onClick={()=> setUnits("imperial")} className='text-2xl font-medium transition ease-out hover:scale-125'>°F</button>
      </div>
    </div>
  )
}
