import React, { useState } from 'react'
import { IService } from '../../pages/Services'
import { instance } from '../../api/axios.api'
import { toast } from 'react-toastify'

interface Props{
    isEdit: boolean
    service?: IService
}

const ServiceForm = ({service , isEdit}:Props) => {

    const[title, setTitle] = useState(isEdit?service?.title:'')
    const[description, setDesctription] = useState(isEdit?service?.description:'')
    const[price, setPrice] = useState(isEdit?service?.price:'')

    const addHandler = (e)=>{
        e.preventDefault()
        const data = {
            title: title,
            description : description,
            price: price
        }

        instance.post('service', data)
        toast.success('Услуга добавлена')
    }


    const updHandler = (e)=>{
        e.preventDefault()
        const data = {
            title: title,
            description : description,
            price: price
        }

        instance.patch(`service/${service?.id}`, data)
        toast.success('Услуга изменена')
    }

  return (
    <div className=''>
        
        <form onSubmit={isEdit?updHandler:addHandler}>
            
        <div className="mb-5">    
                <label htmlFor="email" className="block    mb-4 text-xl font-medium text-gray-700" >Название</label>
                <input
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                value={title}
                type="text" id="text" className= " py-2 bg-gray-200 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10"required />
        </div>  


        <div className="mb-5">    
                <label htmlFor="email" className="block    mb-4 text-xl font-medium text-gray-700" >Описание</label>
                <textarea
                onChange={(e)=>{
                    setDesctription(e.target.value)
                }}
                value={description}
                 id="text" className= " py-2 bg-gray-200 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10"required />
        </div> 



        <div className="mb-5">    
                <label htmlFor="email" className="block    mb-4 text-xl font-medium text-gray-700" >Цена</label>
                <input required className=' py-2 bg-gray-200 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10"' value={price} type="number" onChange={(e)=> 
                        {
                        setPrice(e.target.value)
                        e.target.value = Math.abs(Number(e.target.value)).toString() 
                        }
                        
                } />
        </div>   

        <button className={(isEdit?'bg-yellow-400 hover:bg-yellow-300':'bg-green-400 hover:bg-green-300 ')+ 'text-black w-full py-2 px-3 rounded-md  transition-colors'} >{isEdit?"Изменить": "Добавить"}</button>

        </form>
    </div>
  )
}

export default ServiceForm