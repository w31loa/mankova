import React from 'react'
import {InputMask} from 'primereact/inputmask'

const AuthModal = ({setAuthModalVisible}) => {

    const btnHandler = ()=>{
        setAuthModalVisible(false)
    }

  return (
    <div  className=" overflow-y-auto overflow-x-hidden bg-slate-900/50 absolute z-50 items-center md:inset-0 h-[calc(100%-1rem)]  flex justify-center ">
         <div className="relative p-4 max-h-full">
    
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 transition-all">
            
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
                                    className="w-72 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type='text'
                                    mask='8 (999) 999 99 99'
                                    placeholder='8 (___) ___-__-__'
                                    // onChange={(e) => setNumber(e.target.value)}
                                    // value={number}
                                />
                        {/* <input type="email" id="email" className="w-72 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required /> */}
                    </div>
                    
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш пароль</label>
                        <input type="password" id="password" className="w-72 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                 

                </div>

                <button className='text-black py-5 px-2 bg-yellow-400 rounded-md hover:bg-yellow-300 transition-colors w-full' >Войти</button>
            
            </div>
        </div>
    </div>
  )
}

export default AuthModal