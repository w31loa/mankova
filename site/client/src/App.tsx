import { RouterProvider } from "react-router-dom"
import { useState } from 'react'
import React from 'react'
import { router } from "./router/router"

 
function App() {

  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
