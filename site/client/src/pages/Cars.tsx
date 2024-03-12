import React from 'react'
import { FC } from "react"
import CarElement from '../components/car/CarElement'
import { instance } from '../api/axios.api'
import { useLoaderData } from 'react-router-dom'


export interface ICar{
  title:string
  description: string
  img: string
}

export const carsLoader = async()=>{
  const {data} = await instance.get('car')
  return data
}


const  Cars:FC = () =>{

  const cars = useLoaderData() as ICar[]

  return (
    <div className="container m-auto">
        <div className="flex flex-col items-center mb-40">
          {
            cars.map((car, i)=> (
              <CarElement car={car} key={i} />
            ))
          }
        </div>

    </div>
  )
}

export default Cars