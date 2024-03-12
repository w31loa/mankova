import React from 'react'
import { IOrder } from './OrderTable'
import { formatDateFromIsoToLocal } from '../../helpers/date.helper'

interface Iprop{
  order:IOrder
}

const TableRow = ({order}: Iprop) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {order.id}
    </th>
    <td className="px-6 py-4">
        {formatDateFromIsoToLocal(order.date)}
    </td>
    <td className={ order.status!='Ожидание'?order.status=='В пути'? 'text-yellow-400' : "text-green-400":"text-gray-500 " }>
        {order.status}
    </td>
</tr>
  )
}

export default TableRow