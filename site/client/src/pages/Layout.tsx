import { FC, useState } from "react"
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import React from "react"
import Footer from "../components/Footer"
import AuthModal from "../components/profile/AuthModal"

const Layout:FC = () => {

 const [authModalVisible, setAuthModalVisible] = useState(false)


  return (
    <div className="min-h-screen  font-roboto text-white m-auto bg-slate-600 flex flex-col">
      
        <Header setAuthModalVisible={setAuthModalVisible}/>
        {/* //показывает куда мы будем встраивать остльные компоненты  */}
            <Outlet/> 

        {
          authModalVisible && (
            <AuthModal setAuthModalVisible={setAuthModalVisible}/>
          )
        }

        <Footer/>
    </div>
  )
}

export default Layout