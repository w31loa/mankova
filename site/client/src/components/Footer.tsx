import { FC } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

const Footer:FC = () => {

//   const dispatch = useDispatch()
//   const {user, isAuth} = useSelector(state=>{
//       return state.user
//   })


  return (
    <div className="bg-gray-800 font-roboto pt-2 text-white flex justify-center align-top  ">
        <div className="container ">



            <footer className='flex items-center justify-between  p-10 shadow-sm backdrop-blur-sm'>
                  <img src="../public/img/logo.webp" width={80} alt="" />

                <nav> 
                    <ul className='flex items-center gap-5 ml-auto mr-10 text-white '>
                      <li>
                          <NavLink to={'/'} className={({ isActive})=> isActive ? 'text-white' : 'text-white/50'} >Главная</NavLink>
                      </li>
                      <li>
                          <NavLink  to={'/calculator'} className={({ isActive})=> isActive ? 'text-white' : 'text-white/50'} >Калькулятор</NavLink>
                      </li>
                      <li>
                          <NavLink to={'/services'} className={({ isActive})=> isActive ? 'text-white' : 'text-white/50'} > Услуги</NavLink>
                      </li>
        
                      <li>
                        <NavLink to={'/cars'} className={({ isActive})=> isActive ? 'text-white' : 'text-white/50'} > Парк автомобилей</NavLink>
                      </li>
                      <li>
                        <NavLink to={'/about'} className={({ isActive})=> isActive ? 'text-white' : 'text-white/50'} >О нас</NavLink>
                      </li>
                    </ul> 
                </nav>
                
                <div className="flex gap-[30px] items-center">
                      
                    <div className="">
                        <p>Maxwell56 2024  ©</p>
                        <p>8 987 118 35 00 </p>
                        
                        
                    </div>

                </div>

                
            </footer>
        </div>
    </div>
  )
}

export default Footer