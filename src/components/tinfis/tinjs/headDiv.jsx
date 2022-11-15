import React from 'react'
import '../../style/header/headdiv/headdiv.css'

function HeadDiv(props) {
    return (
            <div className="headerDiv1">
             <div>
                  <img width="17px" src={props.name.img1} alt="" />
                  <span className="toshkent  text-white ms-2">{props.name.span1}
                    <span className='viloyat'>{props.name.span11}</span>
                  </span>
                 
                  <img width="30px" className='img2 ms-5' src={props.name.img2} alt="" />
                  <a href='#' className="text-white text-decoration-none ms-1">
                    <span className='num1'>{props.name.span2}
                        <span className='num2 ms-1'>{props.name.span22}</span>
                    </span>
                  </a>
             </div>
             <div>
                <a href='#' className='text-white text-decoration-none mx-5'>{props.name.span3}</a>
                <a href='#'><img width="30px" src={props.name.img3} ></img></a>
                <a href='#' className="text-white text-decoration-none me-4"><span>{props.name.span33}</span></a>

                <a href='#'><img width="30px" src={props.name.img4}></img></a>
                <a href='#' className="text-white me-2 text-decoration-none"><b>{props.name.span4}</b></a>
             </div>
            </div>
    )
}

export default HeadDiv;
