import React from 'react'

export default function Time({weather: {formattedLocalTime, name, country}}) {
  return (
    <div className='text-white'>
      <div className='flex items-center justify-center py-6'>
        <p className='text-xl font-extralight'>
           {formattedLocalTime}
        </p>
      </div>

      <div className='flex items-center justify-center py-3'>
        <p className='text-3xl font-medium'>
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  )
}
