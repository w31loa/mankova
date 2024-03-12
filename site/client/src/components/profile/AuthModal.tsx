import React, { FormEvent, useState } from 'react'
import {InputMask} from 'primereact/inputmask'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { instance } from '../../api/axios.api'
import { setTokenToLocalStorage } from '../../helpers/localStorage.helper'
import { login } from '../../store/reducers/user.reducer'
import { useUser } from '../../hooks/useUser.hook'
import { toast } from 'react-toastify'


const AuthModal = ({setAuthModalVisible}) => {


    const [number , setNumber] = useState('')
    const [password , setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true)
    const user = useUser()

    const btnHandler = ()=>{
        setAuthModalVisible(false)
    }

    const regBtnHandler = (e)=>{

      setIsLogin(false)
    }

    const logBtnHandler = (e)=>{
     
      setIsLogin(true)
      console.log(isLogin)
    }

    const loginHandler = async (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      
    

        try{
          const res = await instance.post("/auth/login", {
            number,
            password
          })
      
          const data = res.data
          if(data){
              setTokenToLocalStorage('token', data.access_token)
              dispatch(login({user:data}))
              toast.success('Успех!')
            
              setAuthModalVisible(false)
           
          }else{
            toast.error('Неправильные номер или пароль!')

           }
        }
        
        
        catch(err:any){
          const error = err.response?.data.message
          toast.error('Неправильные номер или пароль!')

        }  
    } 

    const registrationHandler = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try {
          const data = await instance.post('/user' ,  {number,password})
          if(data){
            toast.success('Аккаунт создан!')
          }
        } catch (err:any) {
          const error = err.response?.data.message
          toast.error(error.toString())
        }
      }

  return (
    <div  className=" overflow-y-auto overflow-x-hidden bg-slate-900/50 absolute z-50 items-center md:inset-0 h-[calc(100%-1rem)]  flex justify-center ">
         <div className="relative p-4 max-h-full">
      <form className="relative bg-white rounded-lg shadow dark:bg-gray-700 transition-all" onSubmit={isLogin?loginHandler:registrationHandler}>
    
            
                <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-yellow-400 text-center"> 
                        Авторизация
                    </h3>
                    <button 
                        onClick={btnHandler}
                        type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center absolute right-5" data-modal-hide="default-modal">
                        <svg className="w-3 h-3" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
            
                <div className="p-4 md:p-5 space-y-4">

                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш номер телефона</label>
                        <InputMask
                                    required
                                    className="w-72 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type='text'
                                    mask="+7(999) 999-9999" 
                                    placeholder="+7(999) 999-9999" 
                                    value={number} onChange={(e:any) => setNumber(e.target.value)}
                                />
                    </div>
                    
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш пароль</label>
                        <input 
                              
                             onChange={(e)=>{
                             setPassword(e.target.value)
                            }}
                            type="password" id="password" className="w-72 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                 

                </div>
                <button type='submit' onClick={(e)=>{
                                regBtnHandler(e)
                            }} className='text-center w-full py-2 hover:text-yellow-400 transition-colors'>Регистрация</button>
                <button  type='submit'  onClick={(e)=>{
                                logBtnHandler(e)
                            }}  className='text-black py-5 px-2 bg-yellow-400 rounded-md hover:bg-yellow-300 transition-colors w-full' >Войти</button>
            
            </form>
        </div>
    </div>
  )
}

export default AuthModal

