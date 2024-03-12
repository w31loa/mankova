import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'
import App from './App.tsx'
import { store } from './store/store.ts'
import { ModalState } from './context/modal.context.tsx'
import { ThemeProvider } from "@material-tailwind/react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <ThemeProvider>
          <ModalState>
                    <App/>
            </ModalState>
            <ToastContainer hideProgressBar={true}  position="bottom-center" theme="dark" />
      </ThemeProvider>
  </Provider>
  

)
