import React from 'react'



const CalculatorModal = ({coast, setModalVisable, setOrderModalVisible}) => {
    
    const btnHander = ()=>{
        setModalVisable(false)
    }

    const orderBtn= ()=>{
        setModalVisable(false)
        setOrderModalVisible(true)
    }

    if(coast<5000){
        coast=5000
    }
    
  return (
        <div  className=" overflow-y-auto overflow-x-hidden bg-slate-900/50 absolute z-50 items-center w-full md:inset-0 h-[calc(100%-1rem)]  flex justify-center max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 transition-all">
                    
                        <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <div className="flex justify-center flex-col items-center">
                                <h3 className="text-xl font-semibold text-yellow-400 text-center"> 
                                    Пару кликов и заказ оформлен!
                                </h3>
                                <span className='text-xs text-slate-400'>Минимальная стоимость заказа 5000 рублей.</span>
                            </div>
                       
                            <button 
                                onClick={btnHander}
                                type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center absolute right-5" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                    
                        <div className="p-4 md:p-5 space-y-4">
                            <p className="text-base leading-relaxed text-3xl text-white  text-center">

                                Стоимость вашего заказа <span className='text-yellow-400'>{coast}</span> рублей

                            </p>
                           
                        </div>

                        <button onClick={orderBtn} className='text-black py-5 px-2 bg-yellow-400 rounded-md hover:bg-yellow-300 transition-colors min-w-full' > Сделать заказ</button>
                       
                    </div>
                </div>
        </div>
   
 
  )
}

export default CalculatorModal