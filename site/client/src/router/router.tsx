import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import React from "react";
import About from "../pages/About";
import Calculator from "../pages/Calculator";
import Services from "../pages/Services";
import Cars from "../pages/Cars";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        // errorElement: <ErrorPage/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'calculator',
                element:  <Calculator/>
            },
            {
                path: 'services',
                element: <Services/>
            },
            {
                path: 'cars',
                element:  <Cars/>
            },
            {
                path: 'about',
                element:  <About/>
            },
            {
                path: 'profile',
                element: <Profile/>
            }
        ]
    }
])