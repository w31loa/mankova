import React, { useEffect, useState } from 'react'
import { instance } from '../../api/axios.api'
import { IService } from '../../pages/Services'
import { useUser } from '../../hooks/useUser.hook'
import TableRow from './TableRow'


export interface IOrder {
    id:number
    phoneNumber: string
    name: string
    status: string
    distance: string
    value: string
    weight: string
    dangerClass: string
    date: string
    serviceId: number|null
}



const OrderTable = () => {


    const user = useUser()
    console.log({user})


    const[orders , setOrders] = useState<IOrder[]>()
    const getServicesData = async()=>{
        const {data}= await instance.get(`request/${user?.number}`)
        setOrders(data)
    }
    
    useEffect(()=>{
        getServicesData()
    }, [])

    console.log(orders)

  return (


<div className="relative overflow-x-auto shadow-md sm:rounded-lg w-1/2 mx-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
                <th scope="col" className="px-6 py-3 text-yellow-400">
                    Номер заказа
                </th>
                <th scope="col" className="px-6 py-3 text-yellow-400">
                    Дата
                </th>
                <th scope="col" className="px-6 py-3 text-yellow-400">
                    Статус
                </th>
            </tr>
        </thead>
        <tbody>
            {
                orders?.map((order , i) => (
                    <TableRow order={order}/>
                ))
            }
          
        </tbody>
    </table>
</div>

  )
}

export default OrderTable