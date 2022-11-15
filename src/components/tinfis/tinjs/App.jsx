import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import "swiper/css/navigation";
import "../../style/header/headdiv/app.css";
// import required modules
import { FreeMode, Navigation} from "swiper";
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
// import { Pagination } from 'react-bootstrap';



export default function App() {
  return (
    <div className='body p-0 m-0 p-4'>
      <Swiper
        className="swipslide1"
        slidesPerView={4.5}
        spaceBetween={20}
        slidesPerGroup={4}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        style={{width:'100%', height:'100%'}}
      >
        <SwiperSlide className='swipslide'>

            <Card className='card' style={ { width: '100%', height:'100%', border:'none'}} >
                <img className='img-fluid' alt="Sample" src="https://image.tinfis.uz/uploads/all/2022/11/TY2eW7JkAz71pYXQxMQW1wmkkMEM8XK78vBEorRj.jpg"/>
                <CardBody className='m-0 p-0'>
                    <CardTitle><a href="#" className='ahref text-decoration-none text-black-50 fs-6'>Iphone 14Plus samartfoni</a></CardTitle>
                        <CardSubtitle className=" text-warning"tag="h4">
                            11 760 000 <span className='fs-5'>so`m</span>
                        </CardSubtitle>
                </CardBody>
                <div className='but w-100'>
                    <span className='textcol'>1 244 600 so'm  x12oy</span>
                </div>
            </Card>

        </SwiperSlide>
        <SwiperSlide className='swipslide' style={{width:'15.5rem', borderRadius:'15px'}}>
            <Card style={ { width: '100%', height:'100%', border:'none'}} >
                <img className='img-fluid' alt="Sample" src="https://image.tinfis.uz/uploads/all/2022/11/TY2eW7JkAz71pYXQxMQW1wmkkMEM8XK78vBEorRj.jpg"/>
                <CardBody className='m-0 p-0 '>
                    <CardTitle><a href="#" className='ahref text-decoration-none text-black-50 fs-6'>Iphone 14Plus samartfoni</a></CardTitle>
                        <CardSubtitle className=" text-warning" tag="h4">
                            11 760 000 <span className='fs-5'>so`m</span>
                        </CardSubtitle>
                </CardBody>
                <div className='but w-100'>
                    <span className='textcol'>1 244 600 so'm  x12oy</span>
                </div>
            </Card>
        </SwiperSlide>
        <SwiperSlide className='swipslide'>
            <Card style={ { width: '100%', height:'100%', border:'none'}} >
                <img className='img-fluid' alt="Sample" src="https://image.tinfis.uz/uploads/all/2022/11/TY2eW7JkAz71pYXQxMQW1wmkkMEM8XK78vBEorRj.jpg"/>
                <CardBody className='m-0 p-0'>
                    <CardTitle><a href="#" className='ahref text-decoration-none text-black-50 fs-6'>Iphone 14Plus samartfoni</a></CardTitle>
                        <CardSubtitle className=" text-warning"tag="h4">
                            11 760 000 <span className='fs-5'>so`m</span>
                        </CardSubtitle>
                </CardBody>
                <div className='but w-100'>
                    <span className='textcol'>1 244 600 so'm  x12oy</span>
                </div>
            </Card>
        </SwiperSlide>
        <SwiperSlide className='swipslide'>
            <Card style={ { width: '100%', height:'100%', border:'none'}} >
                <img className='img-fluid' alt="Sample" src="https://image.tinfis.uz/uploads/all/2022/11/TY2eW7JkAz71pYXQxMQW1wmkkMEM8XK78vBEorRj.jpg"/>
                <CardBody className='m-0 p-0'>
                    <CardTitle><a href="#" className='ahref text-decoration-none text-black-50 fs-6'>Iphone 14Plus samartfoni</a></CardTitle>
                        <CardSubtitle className=" text-warning"tag="h4">
                            11 760 000 <span className='fs-5'>so`m</span>
                        </CardSubtitle>
                </CardBody>
                <div className='but w-100'>
                    <span className='textcol'>1 244 600 so'm  x12oy</span>
                </div>
            </Card>
        </SwiperSlide>
        <SwiperSlide className='swipslide'>
        <Card style={ { width: '100%', height:'100%', border:'none'}} >
                <img className='img-fluid' alt="Sample" src="https://image.tinfis.uz/uploads/all/2022/11/TY2eW7JkAz71pYXQxMQW1wmkkMEM8XK78vBEorRj.jpg"/>
                <CardBody className='m-0 p-0'>
                    <CardTitle><a href="#" className='ahref text-decoration-none text-black-50 fs-6'>Iphone 14Plus samartfoni</a></CardTitle>
                        <CardSubtitle className=" text-warning"tag="h4">
                            11 760 000 <span className='fs-5'>so`m</span>
                        </CardSubtitle>
                </CardBody>
                <div className='but w-100'>
                    <span className='textcol'>1 244 600 so'm  x12oy</span>
                </div>
            </Card>
        </SwiperSlide>
        <SwiperSlide className='swipslide'>
        <Card style={ { width: '100%', height:'100%', border:'none'}} >
                <img className='img-fluid' alt="Sample" src="https://image.tinfis.uz/uploads/all/2022/11/TY2eW7JkAz71pYXQxMQW1wmkkMEM8XK78vBEorRj.jpg"/>
                <CardBody className='m-0 p-0'>
                    <CardTitle><a href="#" className='ahref text-decoration-none text-black-50 fs-6'>Iphone 14Plus samartfoni</a></CardTitle>
                        <CardSubtitle className=" text-warning"tag="h4">
                            11 760 000 <span className='fs-5'>so`m</span>
                        </CardSubtitle>
                </CardBody>
                <div className='but w-100'>
                    <span className='textcol'>1 244 600 so'm  x12oy</span>
                </div>
        </Card>
        </SwiperSlide>
        <SwiperSlide className='swipslide'>
        <Card style={ { width: '100%', height:'100%', border:'none'}} >
                <img className='img-fluid' alt="Sample" src="https://image.tinfis.uz/uploads/all/2022/11/TY2eW7JkAz71pYXQxMQW1wmkkMEM8XK78vBEorRj.jpg"/>
                <CardBody className='m-0 p-0'>
                    <CardTitle><a href="#" className='ahref text-decoration-none text-black-50 fs-6'>Iphone 14Plus samartfoni</a></CardTitle>
                        <CardSubtitle className=" text-warning"tag="h4">
                            11 760 000 <span className='fs-5'>so`m</span>
                        </CardSubtitle>
                </CardBody>
                <div className='but w-100'>
                    <span className='textcol'>1 244 600 so'm  x12oy</span>
                </div>
        </Card>
        </SwiperSlide>
        <SwiperSlide className='swipslide'>
        <Card style={ { width: '100%', height:'100%', border:'none'}} >
                <img className='img-fluid' alt="Sample" src="https://image.tinfis.uz/uploads/all/2022/11/TY2eW7JkAz71pYXQxMQW1wmkkMEM8XK78vBEorRj.jpg"/>
                <CardBody className='m-0 p-0'>
                    <CardTitle><a href="#" className='ahref text-decoration-none text-black-50 fs-6'>Iphone 14Plus samartfoni</a></CardTitle>
                        <CardSubtitle className=" text-warning"tag="h4">
                            11 760 000 <span className='fs-5'>so`m</span>
                        </CardSubtitle>
                </CardBody>
                <div className='but w-100'>
                    <span className='textcol'>1 244 600 so'm  x12oy</span>
                </div>
            </Card>
        </SwiperSlide>
        <SwiperSlide className='swipslide'>
        <Card style={ { width: '100%', height:'100%', border:'none'}} >
                <img className='img-fluid' alt="Sample" src="https://image.tinfis.uz/uploads/all/2022/11/TY2eW7JkAz71pYXQxMQW1wmkkMEM8XK78vBEorRj.jpg"/>
                <CardBody className='m-0 p-0'>
                    <CardTitle><a href="#" className='ahref text-decoration-none text-black-50 fs-6'>Iphone 14Plus samartfoni</a></CardTitle>
                        <CardSubtitle className=" text-warning"tag="h4">
                            11 760 000 <span className='fs-5'>so`m</span>
                        </CardSubtitle>
                </CardBody>
                <div className='but w-100'>
                    <span className='textcol'>1 244 600 so'm  x12oy</span>
                </div>
            </Card>
        </SwiperSlide>
        <SwiperSlide className='swipslide'>
        <Card style={ { width: '100%', height:'100%', border:'none'}} >
                <img className='img-fluid' alt="Sample" src="https://image.tinfis.uz/uploads/all/2022/11/TY2eW7JkAz71pYXQxMQW1wmkkMEM8XK78vBEorRj.jpg"/>
                <CardBody className='m-0 p-0'>
                    <CardTitle><a href="#" className='ahref text-decoration-none text-black-50 fs-6'>Iphone 14Plus samartfoni</a></CardTitle>
                        <CardSubtitle className=" text-warning"tag="h4">
                            11 760 000 <span className='fs-5'>so`m</span>
                        </CardSubtitle>
                </CardBody>
                <div className='but w-100'>
                    <span className='textcol'>1 244 600 so'm  x12oy</span>
                </div>
            </Card>
        </SwiperSlide>
        <SwiperSlide className='swipslide'>
        <Card style={ { width: '100%', height:'100%', border:'none'}} >
                <img className='img-fluid' alt="Sample" src="https://image.tinfis.uz/uploads/all/2022/11/TY2eW7JkAz71pYXQxMQW1wmkkMEM8XK78vBEorRj.jpg"/>
                <CardBody className='m-0 p-0'>
                    <CardTitle><a href="#" className='ahref text-decoration-none text-black-50 fs-6'>Iphone 14Plus samartfoni</a></CardTitle>
                        <CardSubtitle className=" text-warning"tag="h4">
                            11 760 000 <span className='fs-5'>so`m</span>
                        </CardSubtitle>
                </CardBody>
                <div className='but w-100'>
                    <span className='textcol'>1 244 600 so'm  x12oy</span>
                </div>
            </Card>
        </SwiperSlide>
        <SwiperSlide className='swipslide'>Slide 12</SwiperSlide>
        <SwiperSlide className='swipslide'>Slide 13</SwiperSlide>
        <SwiperSlide className='swipslide'>Slide 14</SwiperSlide>
        <SwiperSlide className='swipslide'>Slide 15</SwiperSlide>
        <SwiperSlide className='swipslide'>Slide 16</SwiperSlide>
        <SwiperSlide className='swipslide'>Slide 17</SwiperSlide>
        <SwiperSlide className='swipslide'>Slide 18</SwiperSlide>
        <SwiperSlide className='swipslide'>Slide 19</SwiperSlide>
        <SwiperSlide className='swipslide'>Slide 20</SwiperSlide>
      </Swiper>
    </div>
  );
}


