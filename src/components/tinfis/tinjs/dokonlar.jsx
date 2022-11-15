import React from 'react'
import '../../style/header/headdiv/dokonlar.css'
import App2 from './app2'

function Dokonlar() {
    return (
        <>
            <div className='oorqadiv'>
                <div className="container-fluid">
                    <div className='w-100 title d-flex align-items-center justify-content-between'>
                        <span className='d-flex'>
                            <h1 className='du mt-1 text-secondary'>Mashhur do'konlar</h1>
                        </span>
                        <a href='#' className='href text-decoration-none mt-2'>Barchasi</a>
                    </div>
                    <App2 />
                </div>
            </div>
        </>
    )
}

export default Dokonlar
