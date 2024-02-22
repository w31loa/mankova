import React from 'react'
import { FC } from "react"
import HomeIntro from '../components/HomeIntro'
import {GrLike} from 'react-icons/gr'
import {FaCar } from 'react-icons/fa'
import {DiYeoman} from 'react-icons/di'
import {GiWallet } from 'react-icons/gi'
import HomeTail from '../components/HomeTail'
import СommentSlider from '../components/СommentSlider'

const  Home:FC = () =>{
  const advantages = [
    {
      title: "КАЧЕСТВО",
      description: 'Опыт работы более 10 лет позволяет качественно выполнять все поставленные задачи!',
      icon: GrLike
    },
    {
      title: "ПАРК АВТОМОБИЛЕЙ БОЛЕЕ 100 ЕДИНИЦ!",
      description: 'В парке автомобилей компании "МАКСВЕЛЛ" более 100 единиц техники отечественного и европейского производства! Любые виды прицепов: тентованные, изотермические, с рефрижераторной установкой, бортовые с кониками, тралы.',
      icon: FaCar 
    },
    {
      title: "СОТНИ БЛАГОДАРНЫХ КЛИЕНТОВ!",
      description: 'Более 1000 человек уже воспользовались услугами нашей компании! Сотни Благодарных клиентов и стабильных партнеров!',
      icon: DiYeoman
    },
    {
      title: "ЭКОНОМИЯ НА ДОСТАВКЕ ДО 50%!",
      description: 'Большой обыт при расчете и выборе маршрута доставки, демократичные цены, страхование грузов по низкой тарифной ставке, бесплтная доставка "до двери", позволяют нашим клиентам экономить до 50% затрат на доставку груза!',
      icon: GiWallet 
    },
  ]
  return (
    <>
       <HomeIntro/>
      <div className='container m-auto pt-10 mb-20'>

              <div className="text-center text-4xl">
                <span className='text-yellow-400'>НАШИ </span> 
                <span className='text-white'>ПРЕИМУЩЕСТВА</span>
              </div>

              <div className="flex gap-x-[100px] gap-y-[20px] px-[200px] flex-wrap justify-center py-10 ">
                {
                  advantages.map((el , i)=> (
                    <HomeTail Icon={el.icon} title={el.title} description={el.description} key={i}/>
                  ) )
                }
              </div>


              <div className="text-center text-4xl mt-10">
                <span className='text-yellow-400'>ОТЗЫВЫ </span> 
                <span className='text-white'>КЛИЕНТОВ</span>
              </div>
              <СommentSlider/>
          
      </div>
    </>
 
  )
}

export default Home

