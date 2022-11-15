import React from 'react';
import NAvBar from '../../style/header/headdiv/navbar.css';
import {Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'


function NavBar(props) {
    return (
        <div className='navigation'>
           <div>
             <div className='tininp  w-100 d-flex justify-content-between align-items-center container-fluid '>
                 <div>
                     <a href=""><img width="180px" src="https://tinfis.uz/img/Logo.svg" alt="" /></a>
                 </div>
                 <div className='basicDiv2'>
                      <form className='d-flex align-items-center' action="" >
                            <input className='ms-1 ' type="text" placeholder="o'zingiz xohlagan narsani qidiring..." />
                            <a className=' mb-1' href=""><img src="https://tinfis.uz/img/sm-search.svg" alt="" /></a>
                      </form>         
                 </div>
                 <div>
                     <a className='me-4' href=""><img width="33px" src="https://tinfis.uz/img/Favorites.png" alt="" /></a>
                     <a className='me-4' href=""><img width="30px" src="https://tinfis.uz/img/cart.svg" alt="" /></a>
                     <a className='me-2' href=""><img width="30px" src="https://tinfis.uz/img/profile.svg" alt="" /></a>
                 </div>
             </div>
          <div>
              

          </div>

           </div>

           <div className='menubar container-fluid d-flex'>
                <div className='left d-flex' >
                    <a href='#'  className='text-black text-decoration-none'>
                        <img className='img-fluid' src='https://tinfis.uz/img/catalogBlack.svg'></img>
                        <span className='ms-1 text-black-75'>Kategoriyalar</span> 
                    </a>
                </div>

                <div className='right d-flex justify-content-evenly mt-1 align-items-center'>
                    <div className='firstdiv ms-3'>
                    <ul className='list-unstyled d-flex ms-5'>
                        <li className='ms-5'><a href="#" className='ms-3 text-secondary text-decoration-none'><img width="20px" className='gul'  src="https://tinfis.uz/img/percent.svg" alt="" /><span className='avia ms-2 text-secondary'>Aksiyalar</span></a></li>
                        <li className='ms-5'><a href="#" className='ms-2 text-secondary text-decoration-none'><img width="20px" className='gul' src="https://tinfis.uz/img/magazin.svg" alt="" /><span className='avia ms-2 text-secondary'>Do'konlar</span></a></li>
                        <li className='ms-5'><a href="#" className='ms-2 text-secondary text-decoration-none'><img width="20px" className='gul' src="https://tinfis.uz/img/star.svg" alt="" /><span className=' avia ms-2 text-secondary'>Brendlar</span></a></li>
                    </ul>
                    </div>
                    <div className='seconddiv ms-4'>
                        <div className=' d-flex justify-content-center'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <span className=''>Tez Kunda</span>
                            </div>
                        </div>
                        <div className='ms-3'>
                            <img width="20px" className='gul'  src="https://tinfis.uz/img/airplane.svg" alt="" />
                            <span className='avia ms-2 text-secondary'>Avia Chiptalar</span>
                        </div>
                    </div>

                    <div className='seconddiv ms-0'>
                        <div className=' d-flex justify-content-center'>
                            <div className='d-flex align-items-center justify-content-center '>
                                <span className=''>Tez Kunda</span>
                            </div>
                        </div>
                        <div className='ms-4'>
                            <img width="20px" className='gul' src="https://tinfis.uz/img/food.svg" alt="" />
                            <span className='avia ms-2 text-secondary'>Taomlar</span>
                        </div>
                    </div>
                    
                    <div className='seconddiv ms-0'>
                        <div className=' d-flex justify-content-center'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <span className=''>Tez Kunda</span>
                            </div>
                        </div>
                        <div className='ms-2'>
                            <img width="20px"  className='gul' src="https://tinfis.uz/img/flower.svg" alt="" />
                            <span className='avia ms-2 text-secondary'>Gullar</span>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default NavBar;

