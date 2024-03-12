import React from 'react'
import { IService } from '../../pages/Services'

interface Iprops{
    service: IService
}


const ServiceTile = ({service}:Iprops) => {
  return (
    <div className="shadow-hover mb-10 w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-400">{service.title}</h5>
            </a>
            <p className="mb-3 font-normal text-white">Описание услуги: {service.description}</p>
            <p className='text-gray-400  text-right mb-2'>{service.price} рублей</p>
            <a href="#" className="inline-flex items-center text-black py-3 px-2 bg-yellow-400 rounded-md hover:bg-yellow-300 transition-colors min-w-full">
                    Сделать заказ
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
      
        </div>
    </div>
  )
}

export default ServiceTile