import React from 'react'
import '../../style/header/headdiv/yangi.scss'
import App from "./App.jsx";




function Yangi(){
    return (
        <>

            <div className='orqadiv'>
                <div className='w-100 title d-flex align-items-center justify-content-between'>
                    <span className='d-flex'>
                        <h1 className='mt-1'>Yanggi mahsulotlar</h1>
                        <b className='ms-2 mt-4'>233 mahsulotlar</b>
                    </span>
                    <a href='#' className='href text-decoration-none mt-2'>Barchasi</a>
                </div>
                <App />
            </div>

        </>
    )
}

export default Yangi
