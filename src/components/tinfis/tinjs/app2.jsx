import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "../../style/header/headdiv/app2.css";
// import required modules
import { FreeMode, Navigation} from "swiper";
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
// import { Pagination } from 'react-bootstrap';


export default function App2() {
  return (
    <div className='body p-4'>
        <Swiper
        className="swiper"
        slidesPerView={6}
        spaceBetween={10}
        slidesPerGroup={6}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
      >
        <SwiperSlide><img className='imgs img-fluid' src="https://image.tinfis.uz/uploads/all/2022/04/o8QbTLHgVibNDhMI5AWrE527jxLadVXMO4AfbJJ2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgs img-fluid' src="https://image.tinfis.uz/uploads/all/2022/04/khfiwE09hXeZxmYUDmUOxycBci2Js7WF3F0dyX6Q.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgs img-fluid' src="https://image.tinfis.uz/uploads/all/2022/06/ggWLG11ZLHoB6RMPPA6OiEsGrKmUdN2UiQ7TwYzu.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgs img-fluid' src="https://image.tinfis.uz/uploads/all/2022/06/arLCysIUArGLNIrzYNlg13dF6eLZIcWYjKDN7eWB.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgs img-fluid' src="https://image.tinfis.uz/uploads/all/2022/07/i0uZNQgqRT5qIrScQTVpbtjHpTdXGLMsBeieZ3iU.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgs img-fluid' src="https://image.tinfis.uz/uploads/all/2022/04/RLMubEHJxRWyfjYkuVm9CLEqBsnj9Cx2QMEXkCOV.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgs img-fluid' src="https://image.tinfis.uz/uploads/all/2022/04/9Fq5mrhq9qafI1wLRxHbEpZTjY27WxH0WfIY9Ce4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgs img-fluid' src="https://image.tinfis.uz/uploads/all/2022/10/6k592TWTs1aKgda0K67aOLOAfitHMVwR5jdtStW0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgs img-fluid' src="https://image.tinfis.uz/uploads/all/2022/04/E5NCLOhQCmD9wGC8fEwbT7Jd60xytqVKBYEdGmP6.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

