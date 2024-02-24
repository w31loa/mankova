import React from 'react'
import { FC } from "react"
import CarElement from '../components/car/CarElement'

const  Cars:FC = () =>{

  const data = [
    {
      image: 'volvo.webp',
      title: 'Volvo AB100',
      description:'Описание машинки: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quibusdam, cum et vel in aperiam dignissimos sint ipsum optio. Autem exercitationem obcaecati sapiente optio quasi voluptatibus aliquam eum enim quos.'
    },
    {
      image: 'volvo.webp',
      title: 'Volvo AB100',
      description:'Описание машинки: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quibusdam, cum et vel in aperiam dignissimos sint ipsum optio. Autem exercitationem obcaecati sapiente optio quasi voluptatibus aliquam eum enim quos.'
    },
    {
      image: 'volvo.webp',
      title: 'Volvo AB100',
      description:'Описание машинки: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quibusdam, cum et vel in aperiam dignissimos sint ipsum optio. Autem exercitationem obcaecati sapiente optio quasi voluptatibus aliquam eum enim quos.'
    },
    {
      image: 'volvo.webp',
      title: 'Volvo AB100',
      description:'Описание машинки: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quibusdam, cum et vel in aperiam dignissimos sint ipsum optio. Autem exercitationem obcaecati sapiente optio quasi voluptatibus aliquam eum enim quos.'
    },
    {
      image: 'volvo.webp',
      title: 'Volvo AB100',
      description:'Описание машинки: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quibusdam, cum et vel in aperiam dignissimos sint ipsum optio. Autem exercitationem obcaecati sapiente optio quasi voluptatibus aliquam eum enim quos.'
    },
  ]

  return (
    <div className="container m-auto">
        <div className="flex flex-col items-center mb-40">
          {
            data.map((el, i)=> (
              <CarElement key={i} image={el.image} title={el.title} description={el.description}/>
            ))
          }
        </div>

    </div>
  )
}

export default Cars