import React, { useContext, useEffect, useState } from 'react'
import AdminTable from '../components/admin/AdminTable'
import { ModalContext } from '../context/modal.context'
import Modal from '../components/Modal'
import ServiceForm from '../components/admin/ServiceForm'
import { instance } from '../api/axios.api'
import { IService } from './Services'
import { ICar } from './Cars'
import CarForm from '../components/admin/CarForm'
import { toast } from 'react-toastify'


const Admin = () => {

    const {modal, close, open} = useContext(ModalContext)
    const openModalHandler = () => open()
    const сloseModalHandler = () => close()


    const[services , setService] = useState<IService[]>()
    const[selectedService , setSelectedService] = useState(null)
    const getServicesData = async()=>{
        const {data}= await instance.get('service')
        setService(data)
    }


    const[cars , setCars] = useState<ICar[]>()
    const[selectedCar , setSelectedCar] = useState(null)
    const getCarsData = async()=>{
        const {data}= await instance.get('car')
        setCars(data)
    }

    const serviceToEdit = (id:any)=>{
        const service = services?.filter((e)=> e.id==id)
        if(service){
            return service[0] as IService
        }
    }
    const carToEdit = (id:any)=>{
        const car = cars?.filter((e)=> e.id==id)
        if(car){
            return car[0] as ICar
        }
    }

    const deleteCarHandler = ()=>{
        instance.delete(`car/${selectedCar}`)
        toast.success('Удалено!')
    }

    const deleteServiceHandler = ()=>{
        instance.delete(`service/${selectedService}`)
        toast.success('Удалено!')
    }

    
    
    useEffect(()=>{
        getServicesData()
        getCarsData()
    }, [])


    const[isEdit , setIsEdit] = useState(false)
    const[isCar , setIsCar] = useState(false)


  return (
    <div className=' container mx-auto mb-auto pt-10'>

        <div className="flex">
            <div className="w-1/2">
                    <div className="text-3xl text-yellow-400 text-center">Услуги</div>   

                    <div className="flex flex-col items-center gap-10 p-10">
                        <select onChange={(e:any)=>{
                                            setSelectedService( e.target.value)
                                    }} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-1/2 py-2 px-10 h-14 ">
                                        <option selected>Услуга</option>
                                        {
                                            services?.map((service,i)=>(
                                                <option className='flex justify-between' value={service.id}><span>{service.title}</span> - <span>{service.price} рублей</span></option>
                                            ))
                                        }
                                
                        </select>

                        <div className="flex justify-between w-1/2">
                             <button className=' text-black py-2 px-3 bg-green-400 rounded-md hover:bg-green-300 transition-colors' onClick={()=>{
                                setIsCar(false)
                                 setIsEdit(false)
                                open()
                             }}>Добавить</button>
                             <button className=' text-black py-2 px-3 bg-yellow-400 rounded-md hover:bg-yellow-300 transition-colors' onClick={()=> {
                                setIsCar(false)
                                 setIsEdit(true)
                                open()
                             } }>Редактировать</button>
                             <button className=' text-black py-2 px-3 bg-red-400 rounded-md hover:bg-red-300 transition-colors' onClick={()=>{
                                deleteServiceHandler()
                                setIsCar(false)
                             }} >Удалить</button>
                            
                        </div>
                    </div>
                 
            </div> 
            <div className="w-1/2">
                    <div className="text-3xl text-yellow-400 text-center">Машины</div>   

                    <div className="flex flex-col items-center gap-10 p-10">
                        <select onChange={(e:any)=>{
                                            setSelectedCar( e.target.value)
                                    }} id="cars" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-1/2 py-2 px-10 h-14 ">
                                        <option selected>Машина</option>
                                        {
                                            cars?.map((car,i)=>(
                                                <option className='flex justify-between' value={car.id}><span>{car.title}</span></option>
                                            ))
                                        }
                                
                        </select>

                        <div className="flex justify-between w-1/2">
                             <button className=' text-black py-2 px-3 bg-green-400 rounded-md hover:bg-green-300 transition-colors' onClick={()=>{
                                 setIsCar(true)
                                 setIsEdit(false)
                                open()
                             }}>Добавить</button>
                             <button className=' text-black py-2 px-3 bg-yellow-400 rounded-md hover:bg-yellow-300 transition-colors' onClick={()=> {
                                  setIsCar(true)
                                  setIsEdit(true)
                                 open()
                             }}>Редактировать</button>
                             <button className=' text-black py-2 px-3 bg-red-400 rounded-md hover:bg-red-300 transition-colors' onClick={()=>{
                                  setIsCar(true)
                                  deleteCarHandler()
                             }}>Удалить</button>
                            
                        </div>
                    </div>
                 
            </div> 
        </div>
        <div className="text-3xl text-yellow-400 text-center mb-5">Заявки</div>   
        
        <AdminTable/>

        {
        modal&&<>
                    {
                        isCar?<Modal title='Машина' onClose={сloseModalHandler} >
                                    <CarForm  isEdit={isEdit} car={carToEdit(selectedCar)}/>
                            </Modal>
                        :<Modal title='Услуга' onClose={сloseModalHandler} >
                                <ServiceForm  isEdit={isEdit} service={serviceToEdit(selectedService)}/>
                        </Modal>
                    }
    
            </>
              
      }
    </div>
  )
}

export default Admin