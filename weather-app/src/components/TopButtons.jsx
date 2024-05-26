import React from 'react'

const TopButtons = ({setQuery}) => {

    const cities=[
        {
            id: 1,
            name: 'Trichy'
        },
        {
            id: 2,
            name: 'Coimbatore'
        },
        {
            id: 3,
            name: 'Chennai'
        },
        {
            id: 4,
            name: 'Bengaluru'
        },
        {
            id: 5,
            name: 'Hyderabad'
        }
    ]
  return (
    <div>
     {/* normal screens */}
    <div className='flex items-center justify-around my-6'>
        {
            cities.map(city =>(
                <button 
                key={city.id} 
                className='text-lg font-medium text-white hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in'
                onClick={()=> setQuery({q: city.name})}
                >
                {city.name}
                </button>
            ))
        }
    </div>
    </div>
  )
}

export default TopButtons;