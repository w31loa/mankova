import React from 'react'
import { FC } from "react"

const  About:FC = () =>{
  return (
    <div className="container mx-auto mb-auto">
          <div  className="text-black mt-10">
            <h5 className="mb-10 text-5xl  tracking-tight text-center text-yellow-400">МАКСВЕЛЛ с нами надёжно!</h5>
            <div className="flex justify-between">

                <iframe className='rounded-lg' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d154.11761885827866!2d55.10713596866431!3d51.82658780267274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x417bf698bd4c5961%3A0x590ad93f1bc0c3be!2z0YPQu9C40YbQsCDQqNC-0YHRgdC10LnQvdCw0Y8sIDMyLCDQsy4g0J7RgNC10L3QsdGD0YDQsywg0KDQvtGB0YHQuNGPLCA0NjAwMjg!3m2!1d51.826577799999995!2d55.107323!5e0!3m2!1sru!2sru!4v1708805784090!5m2!1sru!2sru" width="600" height="450"  loading="lazy"></iframe>
            
                   <p className='mb-3 font-medium text-lg text-white w-1/2 '>Транспортная компания <span className='text-yellow-400'>«МАКСВЕЛЛ»</span> готова предложить услуги по доставке грузов по территории РФ,   Казахстана, Украине и Белоруссии по демократичным ценам с самые сжатые сроки! Осуществляя перевозку Вашего Груза, наша Компания, в первую очередь, ориентируется на надежность и качество предоставляемых услуг. <br /> <br /> У нас возможно заказать не только транспорт, но и профессиональных грузчиков. Единственное, что от Вас требуется-позвонить по номеру  <span className='text-yellow-400'>8 987 118 35 00</span> и оставить заявку! </p>
              
      
            </div>
        
          </div>

    </div>
  )
}

export default About