import { FC } from "react"
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import React from "react"
import Footer from "../components/Footer"

const Layout:FC = () => {
  return (
    <div className="min-h-screen  font-roboto text-white m-auto bg-slate-600">
      
        <Header/>
        {/* //показывает куда мы будем встраивать остльные компоненты  */}
            <Outlet/> 
        <Footer/>
    </div>
  )
}

export default Layout