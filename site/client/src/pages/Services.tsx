import React from 'react'
import { FC } from "react"
import ServiceTile from '../components/service/ServiceTile'

const  Services:FC = () =>{

  const data = [1,2,3,4,5,6,7,8]

  return (
    <div className="container m-auto mb-10">
      <div className="flex flex-wrap gap-x-10 justify-center pt-10">
         {
            data.map((i)=> (
             <ServiceTile key={i}/>
            ))
          }
      </div>
        
       

    </div>
  )
}

export default Services