import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux'
import App from './App.tsx'
import { store } from './store/store.tsx'

import { ThemeProvider } from "@material-tailwind/react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
  </Provider>
  

)
