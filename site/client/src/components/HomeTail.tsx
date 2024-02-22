import React, { FC } from 'react'
import { GenIcon, IconBase, IconContext, IconType } from 'react-icons'
import { GrLike } from 'react-icons/gr'

// interface ITailProps{
//     icon: string 
//     title: string
//     description: string
// }



const HomeTail:FC<any> = ({Icon , title , description} ) => {
  
  return (
        <div className=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <p className='flex justify-between items-center '>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-yellow-300">{title}</h5>
            <div className=""><Icon size={50}/></div> 
        </p>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}

export default HomeTail