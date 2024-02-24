import { FC } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

const Header = ({setAuthModalVisible}) => {

//   const dispatch = useDispatch()
//   const {user, isAuth} = useSelector(state=>{
//       return state.user
//   })


  const btnHander = ()=>{
    setAuthModalVisible(true)
  }

  return (
    <div className="bg-gray-800 font-roboto py-2 text-white flex justify-center align-top">
        <div className="container ">



            <header className='flex items-center justify-between  p-4 shadow-sm backdrop-blur-sm'>
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
{/*                      
                    <NavLink to={'/basket'} className=''><SlBasket size={30}/></NavLink>
                    <NavLink to={'/profile'} className='text-white' >{isAuth?(<span>Профиль</span>): (<span>Авторизация</span>)}</NavLink> */}
                    <button className='text-black py-2 px-3 bg-yellow-400 rounded-md hover:bg-yellow-300 transition-colors' onClick={btnHander}>Войти</button>


                </div>

                
            </header>
        </div>
    </div>
  )
}

export default Header