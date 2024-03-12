import React from 'react'
import { ICar } from '../../pages/Cars'
import { IMAGE_URL } from '../../api/axios.api'

interface IProp{
  car: ICar
}

const CarElement = ({car}:IProp) => {
  return (
    <div className='border rounded-lg shadow w-full bg-gray-800 border-gray-700 flex  max-w-screen-xl mt-14 shadow-hover'>

        <img src={IMAGE_URL+car.img} className='w-1/3 rounded-lg' alt="" />

        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-400">{car.title}</h5>
            <p className='mb-3 font-normal text-white '>{car.description}</p>
        </div>

    </div>
  )
}

export default CarElement