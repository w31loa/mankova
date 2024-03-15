import React, { useEffect, useState } from 'react'
import { instance } from '../../api/axios.api'
import { IOrder } from '../profile/OrderTable'
import TableRow from '../profile/TableRow'
import AdminRow from './AdminRow'



export interface IAllOrder{
    id:number
    phoneNumber: string
    name: string
    status: string
    distance: string
    value: string
    weight: string
    dangerClass: string
    date: string
    email: string
    serviceId: number|null
    service: {
        title:string
    }
}

const AdminTable = () => {

    const[orders , setOrders] = useState<IAllOrder[]>()
    const getServicesData = async()=>{
        const {data}= await instance.get(`request`)
        setOrders(data)
    }
    
    useEffect(()=>{
        getServicesData()
    }, [])

  return (
    
<div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto mb-20">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
                <th scope="col" className="px-2 py-3 text-yellow-400">
                    Номер заказа
                </th>
                <th scope="col" className="px-2 py-3 text-yellow-400">
                    Номер телефона
                </th>
                <th scope="col" className="px-2 py-3 text-yellow-400">
                    Почта
                </th>
                <th scope="col" className="px-2 py-3 text-yellow-400">
                    Имя
                </th>
                <th scope="col" className="px-2 py-3 text-yellow-400">
                    Расстояние
                </th>
                <th scope="col" className="px-2 py-3 text-yellow-400">
                    Объем
                </th>
                <th scope="col" className="px-2 py-3 text-yellow-400">
                    Вес
                </th>
                <th scope="col" className="px-2 py-3 text-yellow-400">
                    Класс опасности
                </th>
                <th scope="col" className="px-2 py-3 text-yellow-400">
                    Дата
                </th>
                <th scope="col" className="px-2 py-3 text-yellow-400">
                    Услуга
                </th>
                <th scope="col" className="px-2 py-3 text-yellow-400">
                    Статус
                </th>
            </tr>
        </thead>
        <tbody>
            {
                orders?.map((order , i) => (
                    <AdminRow order={order}/>
                ))
            }
          
        </tbody>
    </table>
</div>
  )
}

export default AdminTable