import { Button, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { FC } from "react"
import CalculatorModal from '../components/calculator/CalculatorModal'
import { calculateCoast } from '../helpers/calculator.helper'
import OrderModal from '../components/OrderModal'
import yaps from 'ymaps'

const  Calculator:FC = () =>{

 const [distance , setDistance]  = useState(0)
 const [volume, setVolume]  = useState(0)
 const [weight, setWeight] = useState(0)
 const [dangerClass, setDangerClass] = useState('')
 const [modalVisable, setModalVisable] = useState(false)
 const [coast, setCoast] = useState(0)
 const [orderModalVisble, setOrderModalVisible] = useState(false)

//  console.log(calculateCoast(1000, 120,1111, 2))

 const btnHandler = (e)=>{
  e.preventDefault()
  setModalVisable(true)
  setCoast(calculateCoast(distance,volume,weight,dangerClass))
 }

//  yaps.ready(init);

function init() {
    // Стоимость за километр.
    var DELIVERY_TARIFF = 20,
    // Минимальная стоимость.
        MINIMUM_COST = 500,
        myMap = new yaps.Map('map', {
            center: [60.906882, 30.067233],
            zoom: 9,
            controls: []
        }),
    // Создадим панель маршрутизации.
        routePanelControl = new yaps.control.RoutePanel({
            options: {
                // Добавим заголовок панели.
                showHeader: true,
                title: 'Расчёт доставки'
            }
        }),
        zoomControl = new yaps.control.ZoomControl({
            options: {
                size: 'small',
                float: 'none',
                position: {
                    bottom: 145,
                    right: 10
                }
            }
        });
    // Пользователь сможет построить только автомобильный маршрут.
    routePanelControl.routePanel.options.set({
        types: {auto: true}
    });

    // Если вы хотите задать неизменяемую точку "откуда", раскомментируйте код ниже.
    /*routePanelControl.routePanel.state.set({
        fromEnabled: false,
        from: 'Москва, Льва Толстого 16'
     });*/

    myMap.controls.add(routePanelControl).add(zoomControl);

    // Получим ссылку на маршрут.
    routePanelControl.routePanel.getRouteAsync().then(function (route) {

        // Зададим максимально допустимое число маршрутов, возвращаемых мультимаршрутизатором.
        route.model.setParams({results: 1}, true);

        // Повесим обработчик на событие построения маршрута.
        route.model.events.add('requestsuccess', function () {

            var activeRoute = route.getActiveRoute();
            if (activeRoute) {
                // Получим протяженность маршрута.
                var length = route.getActiveRoute().properties.get("distance"),
                // Создадим макет содержимого балуна маршрута.
                    balloonContentLayout = yaps.templateLayoutFactory.createClass(
                        '<span>Расстояние: ' + length.text + '.</span><br/>' )
                    
                // Зададим этот макет для содержимого балуна.
                route.options.set('routeBalloonContentLayout', balloonContentLayout);
                // Откроем балун.
                activeRoute.balloon.open();
            }
        });

    });
  }

  return (
    <div className="container m-auto">
            <div className="text-center text-4xl mt-10">
                <span className='text-yellow-400'>РАСЧЕТ </span> 
                <span className='text-white'>ЦЕНЫ</span>
              </div>
        <form className="text-black flex flex-col items-center pt-10" onSubmit={(e)=>{
          btnHandler(e)
        }}>

          <label htmlFor=""  className="text-yellow-400 text-xl">Расстояние(км):</label>
          <input required className="light-input w-1/3 text-center"type="number"   min={0} onChange={(e)=> {
                setDistance(Number(e.target.value))
                e.target.value = Math.abs(Number(e.target.value)).toString() 
          }} />

          <label htmlFor=""  className="text-yellow-400  text-xl">Объем груза(м³):</label>
          <input required className='light-input w-1/3 text-center' type="number" onChange={(e)=> 
            {
              setVolume(Number(e.target.value))
              e.target.value = Math.abs(Number(e.target.value)).toString() 
            }
          } />

          <label htmlFor=""  className="text-yellow-400 text-xl">Вес груза(кг)</label>
          <input type="number" required className='light-input w-1/3 text-center'  onChange={(e)=>{
                setWeight(Number(e.target.value))
                e.target.value = Math.abs(Number(e.target.value)).toString() 
          } } />

          <label htmlFor="countries" className="text-yellow-400 text-xl">Класс опасности:</label>
          <select id="countries" className="w-1/3 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 mb-10"
            onChange={(e)=> setDangerClass(e.target.value)} required>
            <option selected value={0} >Безопасный груз</option>
            <option value={1}>1 Класс. Взрывчатые вещества</option>
            <option value={2}>2 класс. Газы</option>
            <option value={3}>3 класс. Легковоспламеняющиеся жидкости</option>
            <option value={4}>4 класс. Легковоспламеняющиеся твердые вещества</option>
            <option value={5}>5 класс. Окисляющие вещества</option>
            <option value={6}>6 класс. Токсичные вещества</option>
            <option value={7}>7 класс. Радиоактивные вещества</option>
            <option value={8}>8 класс. Коррозионные</option>
            <option value={9}>9 класс. Прочие опасные вещества</option>
          </select>

          <button className='text-black py-2 px-2 bg-yellow-400 rounded-md hover:bg-yellow-300 transition-colors w-1/3 mb-52'> Рассчитать и оформить заказ!</button>
        </form>

        {
          modalVisable && (
               <CalculatorModal coast={coast} setModalVisable={setModalVisable} setOrderModalVisible={setOrderModalVisible}/>  
          )
        }
        {
          orderModalVisble&&(
            <OrderModal setOrderModalVisible={setOrderModalVisible} distance={distance} volume={volume}
            weight={weight} dangerClass={dangerClass}/>
          )
        }
    </div>
  )
}

export default Calculator