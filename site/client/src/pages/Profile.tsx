import React from 'react'
import { FC } from "react"
import OrderTable from '../components/profile/OrderTable'

const  Profile:FC = () =>{
  return (
    <div className="container mb-auto mx-auto">
        <div className="text-black">
          <div className="text-center text-4xl mt-10 mb-10">
                  <span className='text-yellow-400'>ВАШИ </span> 
                  <span className='text-white'>ДОСТАВКИ</span>
          </div>

          <OrderTable/>
        </div>

    </div>
  )
}

export default Profile