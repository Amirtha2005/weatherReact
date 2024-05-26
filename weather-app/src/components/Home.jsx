import React, { useEffect, useState } from 'react'
import weather1 from '../assets/weather1.jpg'
import thunder from '../assets/thunder.webp'
import TopButtons from './TopButtons'
import Inputs from './Inputs'
import Time from './Time'
import Temp from './Temp'
import Forecast from './Forecast'
import getWeatherData from '../services/weatherService'
import getFormattedWeatherData from '../services/weatherService'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const [query, setQuery] =useState({q: 'Trichy'})
  const [units, setUnits]= useState('metric')
  const [weather, setWeather]= useState(null)

  const getWeather= async()=>{
    const message = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${message.charAt(0).toUpperCase() + message.slice(1)}`);
    const data= await getFormattedWeatherData({...query, units})
    .then(data=>{
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`)
      setWeather(data)
    })
    console.log(data);
  }

  useEffect(()=>{
    getWeather();
  }, [query, units])

  return (
    <div className='py-5 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-gradient-to-br shadow-gray-400 from-cyan-500 to-blue-800'>
      {
        
        weather && (
          <>
          <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} setUnits={setUnits}/>
          <Time weather={weather}/>
          <Temp weather={weather} units={units}/>
          <Forecast title="3 hour step forcast" data={weather.hourly}/>
          <Forecast title="daily forcast" data={weather.daily}/>
          </>
        )
      }
    <ToastContainer autoClose={2500} hideProgressBar={true} theme='colored'/>  
    </div>
  )
}
