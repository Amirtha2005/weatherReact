import React, { Component } from 'react'
import { GiSunrise, GiSunset  } from "react-icons/gi";
import { RiWaterFlashLine } from "react-icons/ri";
import { FaTemperatureHalf } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { IoIosArrowUp ,IoIosArrowDown} from "react-icons/io";
import sun from '../assets/sun.png'

const Temp = ({weather:{
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
},
units,
})=> {
  

    const verticleDetails=[
        {
            id:1,
            Icon: FaTemperatureHalf,
            title: "Real feel",
            value: `${feels_like.toFixed()}°`
        },
        {
            id:2,
            Icon: RiWaterFlashLine,
            title: "Humidity",
            value: `${humidity.toFixed()}%`
        },
        {
            id:3,
            Icon: FaWind,
            title: "Wind",
            value: `${speed.toFixed()} ${units === "metric" ? "Km/h" : "m/s"}`
        },
    ]

    const horizontalDetail=[
        {
            id:1,
            Icon: GiSunrise,
            title: "Sunrise",
            value: sunrise
        },
        {
            id:2,
            Icon: GiSunset,
            title: "Sunset",
            value: sunset
        },
        {
            id:3,
            Icon: IoIosArrowUp,
            title: "High",
            value: `${temp_max.toFixed()}°`
        },
        {
            id:4,
            Icon: IoIosArrowDown,
            title: "Low",
            value: `${temp_min.toFixed()}°`
        },
    ]

    return (
      <div className='text-white'>
        <div className='flex items-center justify-center text-xl py-6 text-cyan-300'>
            <p>{details}</p>
        </div>

        <div className='flex flex-row items-center justify-between py-3'>
            <img src={icon} className='w-20' alt='sun icon'/>
            <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
            <div className=' flex flex-col space-y-3 items-start'>
                {
                    verticleDetails.map(({id,Icon, title, value})=>(
                        <div key={id} className='flex font-light text-sm items-center justify-center'>
                        <Icon className='text-2xl mr-1'/>
                        {`${title}: `} 
                        <span className='font-medium ml-1'>{value}</span>
                       </div>
                    ))
                }
              
            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-10 text-sm py-3'>
            {
                horizontalDetail.map(({id,Icon,title,value})=>(
                    <div key={id} className='flex flex-row items-center'>
                        <Icon className='text-3xl'/>
                        <p className='font-light ml-1'>
                            {`${title}`}
                            <span className='font-medium ml-1'>{value}</span>
                        </p>
                    </div>
                ))
            }
        </div>
        
      </div>
    )
}

export default Temp;
