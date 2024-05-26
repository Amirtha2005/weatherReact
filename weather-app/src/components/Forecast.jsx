import React from 'react'
import sun from '../assets/sun.png'

export default function Forecast({title , data}) {

  return (
    <div className='text-white'>
      <div className='flex items-center justify-start mt-6'>
        <p className='font-medium uppercase '>{title}</p>
      </div>
      <hr className='my-1'/>
      <div className='flex items-center justify-between'>
        {
            data.map((d,index)=>(
                <div key={index} className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>{d.title}</p>
                    <img src={d.icon} alt='weather' className='w-14 my-1'></img>
                    <p className='font-medium'>{`${d.temp.toFixed()}°`}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}
