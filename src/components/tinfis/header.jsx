import React from 'react';
import HeadDiv from '../tinfis/tinjs/headDiv';
import NavBar from './tinjs/NavBar';
import  "../style/header/headdiv/header.css"
import CarouselDiv from '../tinfis/tinjs/carouselDiv';
// import Example from './tinjs/example';
import Yangi from './tinjs/yangi';
import Rek from './tinjs/rek';
import Dokonlar from './tinjs/dokonlar';
import Cols from './tinjs/cols';


var obj = {
    img1: "https://tinfis.uz/img/location.svg",
    span1: "Toshkent shahar,",
    span11: "Toshkent viloyati",

    img2: "https://tinfis.uz/img/24,7.svg",
    span2: "+998",
    span22: "71 209 03 33",

    img3: "https://tinfis.uz/img/icons/help.svg",
    span3: "Sotuvchi kanineti",
    span33: "Yordam",

    img4: "https://tinfis.uz/uz.svg",
    span4: "UZ"
}

var nav = {
    img1: "https://tinfis.uz/img/Logo.svg",

    img2: "https://tinfis.uz/img/Favorites.png",
    img3:  "https://tinfis.uz/img/cart.svg",
    img4: "https://tinfis.uz/img/profile.svg",

    imgse: "https://tinfis.uz/img/sm-search.svg",
}





function Header() {
    return (
   <div className='birinchi'>
        <HeadDiv name={obj} />
        <NavBar name={nav} />
        <CarouselDiv />
        {/* <Example /> */}
        <Yangi />
        <Rek />
        <Dokonlar />
        <Cols />
   </div>
    )
}
export default Header;
