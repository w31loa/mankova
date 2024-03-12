import React from 'react'
import { formatDateFromIsoToLocal } from '../../helpers/date.helper'
import { IAllOrder } from './AdminTable'
import { instance } from '../../api/axios.api'
import { toast } from 'react-toastify'

interface Iprop{
    order:IAllOrder
  }

const AdminRow = ({order}: Iprop) => {

    const statusHandler= (e: React.ChangeEvent<HTMLSelectElement>)=>{
        console.log(e.target.value)
        const data = {
            status: e.target.value
        }
        instance.patch(`request/${order.id}` , data)
        toast.success('Статус изменен')
    }

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {order.id}
    </th>

    <td className="px-6 py-4">
        {order.phoneNumber}
    </td>
    <td className="px-6 py-4">
        {order.name}
    </td>
    <td className="px-6 py-4">
        {order.distance}
    </td>
    <td className="px-6 py-4">
        {order.value}
    </td>
    <td className="px-6 py-4">
        {order.weight}
    </td>
    <td className="px-6 py-4">
        {order.dangerClass? order.dangerClass : '-'}
    </td>
    <td className="px-6 py-4">
        {formatDateFromIsoToLocal(order.date)}
    </td>
    <td className="px-6 py-4">
        {order.service?.title? order.service.title : '-'}
    </td>
    <td className="pr-2">
  
        <select onChange={statusHandler} id="countries" className="bg-gray-800 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>      {order.status}</option>
            <option value="Ожидание">Ожидание</option>
            <option value="В пути">В пути</option>
            <option value="Выполнен">Выполнен</option>
        </select>
    </td>
</tr>
  )
}

export default AdminRow