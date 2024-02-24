import React from 'react'

const CarElement = ({image, title, description}) => {
  return (
    <div className='border rounded-lg shadow bg-gray-800 border-gray-700 flex  max-w-screen-xl mt-14 shadow-hover'>

        <img src={"../public/img/cars/"+image} className='w-1/3 rounded-lg' alt="" />

        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-400">{title}</h5>
            <p className='mb-3 font-normal text-white '>{description}</p>
        </div>

    </div>
  )
}

export default CarElement