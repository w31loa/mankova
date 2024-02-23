import { Button, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { FC } from "react"
import CalculatorModal from '../components/calculator/CalculatorModal'
import { calculateCoast } from '../helpers/calculator.helper'

const  Calculator:FC = () =>{

 const [distance , setDistance]  = useState(0)
 const [volume, setVolume]  = useState(0)
 const [weight, setWeight] = useState(0)
 const [dangerClass, setDangerClass] = useState('')
 const [modalVisable, setModalVisable] = useState(false)
 const [coast, setCoast] = useState(0)

 console.log(calculateCoast(1000, 120,1111, 2))

 const btnHandler = ()=>{

  setModalVisable(true)
  setCoast(calculateCoast(distance,volume,weight,dangerClass))
 }

  return (
    <div className="container m-auto">
        <div className="text-black flex flex-col items-center pt-10">

          <label htmlFor=""  className="text-yellow-400 text-xl">Расстояние(км):</label>
          <input className="light-input w-1/3 text-center"type="number"  onChange={(e)=> setDistance(Number(e.target.value))} />

          <label htmlFor=""  className="text-yellow-400  text-xl">Объем груза(м³):</label>
          <input className='light-input w-1/3 text-center' type="number" onChange={(e)=> setVolume(Number(e.target.value))} />

          <label htmlFor=""  className="text-yellow-400 text-xl">Вес груза(кг)</label>
          <input type="number" className='light-input w-1/3 text-center'  onChange={(e)=> setWeight(Number(e.target.value))} />

          <label htmlFor="countries" className="text-yellow-400 text-xl">Класс опасности:</label>
          <select id="countries" className="w-1/3 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 mb-10"
            onChange={(e)=> setDangerClass(e.target.value)} >
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

          <button className='text-black py-2 px-2 bg-yellow-400 rounded-md hover:bg-yellow-300 transition-colors w-1/3 mb-52' onClick={btnHandler}> Расчитать</button>
        </div>

        {
          modalVisable && (
               <CalculatorModal coast={coast} setModalVisable={setModalVisable} />  
          )
        }
    </div>
  )
}

export default Calculator