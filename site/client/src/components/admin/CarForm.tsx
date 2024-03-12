import React, { useState } from 'react'
import { IService } from '../../pages/Services'
import { instance, multiInstance } from '../../api/axios.api'
import { toast } from 'react-toastify'
import { ICar } from '../../pages/Cars'

interface Props{
    isEdit: boolean
    car?: ICar
}

const CarForm = ({car , isEdit}:Props) => {

    const[title, setTitle] = useState(isEdit?car?.title:'')
    const[description, setDesctription] = useState(isEdit?car?.description:'')
    const [file, setFile] = useState<File>()

    const addHandler = (e)=>{
        e.preventDefault()
        const data = {
            title: title,
            description : description,
            image: file
        }
        // console.log(file)
        multiInstance.post('car', data)
        toast.success('Машина добавлена')
    }


    const updHandler = (e)=>{
        e.preventDefault()
        const data = {
            title: title,
            description : description
        }

        instance.patch(`car/${car?.id}`, data)
        toast.success('Машина изменена')
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


        {
            isEdit?<></>
            :<div className="mb-5">    
            <label htmlFor="email" className="block    mb-4 text-xl font-medium text-gray-700" >Фото</label>
            
            <input onChange={(e)=>{
                    if(e.target.files){
                        setFile(e.target.files[0])
                    }
                    
            }} className="p-2 block w-full text-sm rounded-lg cursor-pointer  text-gray-400 focus:outline-none placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
            <p className="mt-1 text-sm text-gray-500" id="file_input_help">SVG, PNG, JPG.</p>

            </div>   
        }
   

        <button className={(isEdit?'bg-yellow-400 hover:bg-yellow-300':'bg-green-400 hover:bg-green-300 ')+ 'text-black w-full py-2 px-3 rounded-md  transition-colors'} >{isEdit?"Изменить": "Добавить"}</button>

        </form>
    </div>
  )
}

export default CarForm