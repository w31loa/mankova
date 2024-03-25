import { InputMask } from 'primereact/inputmask'
import React, { useEffect, useState } from 'react'
import { useUser } from '../hooks/useUser.hook'
import { instance } from '../api/axios.api'
import { IService } from '../pages/Services'
import { toast } from 'react-toastify'
import { useAuth } from '../hooks/useAuth.hook'




const OrderModal = ({setOrderModalVisible, 
                        distance ,
                        volume,
                        weight,
                        dangerClass
                    }) => 
{

    const[services , setService] = useState<IService[]>()
    const[selected , setSelected] = useState(null)
    const [email, setEmail] = useState('')

    const getServicesData = async()=>{
        const {data}= await instance.get('service')
        setService(data)
    }
    
    useEffect(()=>{
        getServicesData()
    }, [])


    const sendHandler = async(e)=>{
      
        e.preventDefault()
        const date = new Date(Date.now())

    try{
        const data = {
            phoneNumber: number,
          name: name, 
          email: email,
          distance: `${distance}`,
          value: `${volume}`,
          weight: `${weight}`,
          request_from: `${from}`,
          request_to:  `${to}`,
          dangerClass: `${dangerClass}`,
          date: date.toISOString(),
          serviceId: Number(selected)==0?null:Number(selected)
        }

        console.log(data)
        instance.post('/request' , data)
        setOrderModalVisible(false)

        toast.success('Заявка отправлена!')
    }catch(err){
        const error = err.response?.data.message
        toast.error(error)
    }
       
        

    }


    const user = useUser()
    console.log(user)
    const isAuth = useAuth()
    const [number,setNumber] = useState('')
    const [name, setName] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    // if(isAuth){
    //     setNumber(user?.number||'')
    // }

    const btnHander = ()=>{
        setOrderModalVisible(false)
    }

  return (
    <div  className=" overflow-y-auto overflow-x-hidden bg-slate-900/50 absolute z-50 items-center w-full md:inset-0 h-[calc(100%-1rem)]  flex justify-center max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                
                    <form className="relative bg-white rounded-lg shadow dark:bg-gray-700 transition-all" onSubmit={sendHandler}>
                    
                        <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-yellow-400 text-center"> 
                                Последний шаг - введите данные для связи с Вами!
                            </h3>
                            
                  


                            <button 
                                onClick={btnHander}
                                type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center absolute right-5" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                    
                        <div className="px-10 py-10">
                                <div className="mb-5">    
                                    <label htmlFor="email" className="block mb-4 text-xl font-medium text-yellow-400 ">Номер телефона</label>

                                    <InputMask className="bg-gray-50 py-2 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" value={number} 
                                    onChange={(e:any) => setNumber(e.target.value)}
                                    mask="+7(999) 999-9999" 
                                    placeholder="+7(999) 999-9999" 
                                    required/>

                                </div>   

                                <div className="mb-5">    
                                    <label htmlFor="text" className="block    mb-4 text-xl font-medium text-yellow-400" >Имя</label>
                                    <input
                                    onChange={(e)=>{
                                        setName(e.target.value)
                                    }}
                                    type="text" id="text" className= " py-2 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" placeholder="Иван Иванов" required />
                                </div>   
                                <div className="mb-5">    
                                    <label htmlFor="text" className="block    mb-4 text-xl font-medium text-yellow-400" >Откуда доставить</label>
                                    <input
                                    onChange={(e)=>{
                                        setFrom(e.target.value)
                                    }}
                                    type="text" id="text" className= " py-2 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" placeholder="Оренбург" required />
                                </div>   
                                <div className="mb-5">    
                                    <label htmlFor="text" className="block    mb-4 text-xl font-medium text-yellow-400" >Куда доставить</label>
                                    <input
                                    onChange={(e)=>{
                                        setTo(e.target.value)
                                    }}
                                    type="text" id="text" className= " py-2 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" placeholder="Москва " required />
                                </div>   

                                <div className="mb-5">    
                                    <label htmlFor="email" className="block    mb-4 text-xl font-medium text-yellow-400" >Элекронная почта</label>
                                    <input
                                    onChange={(e)=>{
                                        setEmail(e.target.value)
                                    }}
                                    type="email" id="email" className= " py-2 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" placeholder="mail@mail.ru" required />
                                </div>   

                                <label htmlFor="countries" className="block    mb-4 text-xl font-medium text-yellow-400">Выберете дополнительную услугу</label>
                                <select onChange={(e:any)=>{
                                        setSelected( e.target.value)
                                }} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full py-2 px-10 ">
                                    <option selected>Услуга</option>
                                    {
                                        services?.map((service,i)=>(
                                            <option className='flex justify-between' value={service.id}><span>{service.title}</span> - <span>{service.price} рублей</span></option>
                                        ))
                                    }
                             
                                </select>
                        </div>


                        <button className='text-black py-5 px-2 bg-yellow-400 rounded-md hover:bg-yellow-300 transition-colors min-w-full' > Сделать заказ</button>
                       
                    </form>
                </div>
        </div>
  )
}

export default OrderModal