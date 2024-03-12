import React from 'react'
import { FC } from "react"
import ServiceTile from '../components/service/ServiceTile'
import { instance } from '../api/axios.api'
import { useLoaderData } from 'react-router-dom'

export interface IService{
  id:number
  title: string
  description: string
  price: string
}


export const serviceLoader = async()=>{
  const {data} = await instance.get('service')
  return data
}


const  Services:FC = () =>{

  const services = useLoaderData() as IService[] 

  return (
    <div className="container mb-auto mx-auto">
      <div className="flex flex-wrap gap-x-10 justify-center pt-10">
         {
            services.map((service, i)=> (
             <ServiceTile service={service} key={i}/>
            ))
          }
      </div>
        
       

    </div>
  )
}

export default Services