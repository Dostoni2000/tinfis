import { useState } from "react";
import React from "react";
import '../../style/header/headdiv/carouselDiv.scss';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'bootstrap';


function CarouselDiv() {

    const [selected, setSelected] = useState(null)

    const togle = (i) => {
        if(selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return(
        <div className="carousel">

            <div className="scroll">
                <div class="overflow overflow-scroll">
                    
                    <div className="div">
                        <div class="item accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
                                    <span className="forimg d-flex align-items-center">
                                        <img className="imgi w-20 img-fluid" src="https://back.tinfis.uz/public/uploads/all/n3Bd942KHNUu9jDbqViGvUwsHlElZd2P0ezcI6Ep.svg" alt="" />
                                    </span>
                                    <a href="#" className="textspan text-decoration-none text-black ms-3 mt-1"><span className="textspan">Elektronika</span></a>
                                </button>
                                </h2>
                                <div id="collapseOne1" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <span>

                                    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOnee111">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOnee1" aria-expanded="true" aria-controls="collapseOnee1">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOnee1" class="accordion-collapse collapse show" aria-labelledby="headingOnee1" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo2">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo2" class="accordion-collapse collapse" aria-labelledby="headingTwo2" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree3">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree3" class="accordion-collapse collapse" aria-labelledby="headingThree3" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

                                    </span>


                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                    <div class="item accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                                    <span className="forimg d-flex align-items-center">
                                        <img className="imgi w-20 img-fluid" src="https://back.tinfis.uz/public/uploads/all/s6RSXKfMUTyBC1vfVOQm4uwZAbxrnDCnMbd8gdno.svg" alt="" />
                                    </span>
                                    <a href="#" className="textspan text-decoration-none text-black ms-3 mt-1"><span className="textspan">Maishiy tehnika</span></a>
                                </button>
                                </h2>
                                <div id="collapseOne2" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> <code>.accordion-body</code>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                    <div class="item accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
                                    <span className="forimg d-flex align-items-center">
                                        <img className="imgi w-20 img-fluid" src="https://back.tinfis.uz/public/uploads/all/jqvkX21uSzYMg06wNcnZGQHXtXlSWiLCSYCvT2A4.svg" alt="" />
                                    </span>
                                    <a href="#" className="textspan text-decoration-none text-black ms-3 mt-1"><span className="textspan">Oziq ovqatlar</span></a>
                                </button>
                                </h2>
                                <div id="collapseOne3" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> <code>.accordion-body</code>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                    <div class="item accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne4">
                                    <span className="forimg d-flex align-items-center">
                                        <img className="imgi w-20 img-fluid" src="https://back.tinfis.uz/public/uploads/all/avyr1ZFPBSofPVxSRA2pi67Tf8cUlJft431RvK30.svg" alt="" />
                                    </span>
                                    <a href="#" className="textspan text-decoration-none text-black ms-3 mt-1"><span className="textspan">Ayollar uchun</span></a>
                                </button>
                                </h2>
                                <div id="collapseOne4" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> <code>.accordion-body</code>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                    <div class="item accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true" aria-controls="collapseOne5">
                                    <span className="forimg d-flex align-items-center">
                                        <img className="imgi w-20 img-fluid" src="https://back.tinfis.uz/public/uploads/all/4ijca4JXjIXbBFyMXiG8j6NQFuvDzGh2QlV3r9hC.svg" alt="" />
                                    </span>
                                    <a href="#" className="textspan text-decoration-none text-black ms-3 mt-1"><span className="textspan">Erkakalar uchun</span></a>
                                </button>
                                </h2>
                                <div id="collapseOne5" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> <code>.accordion-body</code>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                    <div class="item accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne6" aria-expanded="true" aria-controls="collapseOne6">
                                    <span className="forimg d-flex align-items-center">
                                        <img className="imgi w-20 img-fluid" src="https://back.tinfis.uz/public/uploads/all/KkUY13fiMOSd2oGg3lCHGU4NxRpr1Z0q9k60fQD9.svg" alt="" />
                                    </span>
                                    <a href="#" className="textspan text-decoration-none text-black ms-3 mt-1"><span className="textspan">Bolalar uchun</span></a>
                                </button>
                                </h2>
                                <div id="collapseOne6" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> <code>.accordion-body</code>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                    <div class="item accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne7" aria-expanded="true" aria-controls="collapseOne7">
                                    <span className="forimg d-flex align-items-center">
                                        <img className="imgi w-20 img-fluid" src="https://back.tinfis.uz/public/uploads/all/xMlmdSvMYqbPCLkzM1TWeUTacmLdklnt2SSZAbhK.svg" alt="" />
                                    </span>
                                    <a href="#" className="textspan text-decoration-none text-black ms-3 mt-1"><span className="textspan">Poyabzal</span></a>
                                </button>
                                </h2>
                                <div id="collapseOne7" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> <code>.accordion-body</code>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                    <div class="item accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne8" aria-expanded="true" aria-controls="collapseOne8">
                                    <span className="forimg d-flex align-items-center">
                                        <img className="imgi w-20 img-fluid" src="https://back.tinfis.uz/public/uploads/all/5PgXoZLxL5NHZm0zhcR3VTS8iFdXQ9VQXcJK2qb0.svg" alt="" />
                                    </span>
                                    <a href="#" className="textspan text-decoration-none text-black ms-3 mt-1"><span className="textspan">Aksessuarlar</span></a>
                                </button>
                                </h2>
                                <div id="collapseOne8" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> <code>.accordion-body</code>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                    <div class="item accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne9" aria-expanded="true" aria-controls="collapseOne9">
                                    <span className="forimg d-flex align-items-center">
                                        <img className="imgi w-20 img-fluid" src="https://back.tinfis.uz/public/uploads/all/hRMoYj7nO8QCH2S4yUv2CiDFltODrRVgNjUc8A5S.svg" alt="" />
                                    </span>
                                    <a href="#" className="textspan text-decoration-none text-black ms-3 mt-1"><span className="textspan">Sport mollari</span></a>
                                </button>
                                </h2>
                                <div id="collapseOne9" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> <code>.accordion-body</code>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                    <div class="item accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne10" aria-expanded="true" aria-controls="collapseOne10">
                                    <span className="forimg d-flex align-items-center">
                                        <img className="imgi w-20 img-fluid" src="https://back.tinfis.uz/public/uploads/all/SXGEIB4tHygcsFQc7tVGi8aGjxRc9Jvdf32DX3Lq.svg" alt="" />
                                    </span>
                                    <a href="#" className="textspan text-decoration-none text-black ms-3 mt-1"><span className="textspan">Go'zallik mollari</span></a>
                                </button>
                                </h2>
                                <div id="collapseOne10" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> <code>.accordion-body</code>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                    <div class="item accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne11" aria-expanded="true" aria-controls="collapseOne11">
                                    <span className="forimg d-flex align-items-center">
                                        <img className="imgi w-20 img-fluid" src="https://back.tinfis.uz/public/uploads/all/HLyVy3fqBHtohh348XjKg7yQtHQFZBrfRq3spi0p.svg" alt="" />
                                    </span>
                                    <a href="#" className="textspan text-decoration-none text-black ms-3 mt-1"><span className="textspan">Mebel</span></a>
                                </button>
                                </h2>
                                <div id="collapseOne11" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> <code>.accordion-body</code>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                    <div class="item accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne12" aria-expanded="true" aria-controls="collapseOne12">
                                    <span className="forimg d-flex align-items-center">
                                        <img className="imgi w-20 img-fluid" src="https://back.tinfis.uz/public/uploads/all/GjlfB0MyvfXjrftkOGidrZBoBmEBXZzSDZyYqhYg.svg" alt="" />
                                    </span>
                                    <a href="#" className="textspan text-decoration-none text-black ms-3 mt-1"><span className="textspan">Uy jihozlari</span></a>
                                </button>
                                </h2>
                                <div id="collapseOne12" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> <code>.accordion-body</code>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                    <div class="item accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne13" aria-expanded="true" aria-controls="collapseOne13">
                                    <span className="forimg d-flex align-items-center">
                                        <img className="imgi w-20 img-fluid" src="https://back.tinfis.uz/public/uploads/all/SGOxjXmh9QnVmZHfdijE4V7qvzJwYtEpwO0i0ae9.svg" alt="" />
                                    </span>
                                    <a href="#" className="textspan text-decoration-none text-black ms-3 mt-1"><span className="textspan">Bog` va dala</span></a>
                                </button>
                                </h2>
                                <div id="collapseOne13" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> <code>.accordion-body</code>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                    <div class="item accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne14" aria-expanded="true" aria-controls="collapseOne14">
                                    <span className="forimg d-flex align-items-center">
                                        <img className="imgi w-20 img-fluid" src="https://back.tinfis.uz/public/uploads/all/EwFCDbmCJS1bSm6AkyeDqgAO48lcjxIQkMDHvXmW.svg" alt="" />
                                    </span>
                                    <a href="#" className="textspan text-decoration-none text-black ms-3 mt-1"><span className="textspan">Qurilish mollari</span></a>
                                </button>
                                </h2>
                                <div id="collapseOne14" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> <code>.accordion-body</code>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                    <div class="item accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne15" aria-expanded="true" aria-controls="collapseOne15">
                                    <span className="forimg d-flex align-items-center">
                                        <img className="imgi w-20 img-fluid" src="https://back.tinfis.uz/public/uploads/all/ceqTRAyYMsDkutTXAIYsL3pHwbVqksxfmj3D90Hi.svg" alt="" />
                                    </span>
                                    <a href="#" className="textspan text-decoration-none text-black ms-3 mt-1"><span className="textspan">Avtotovarlar</span></a>
                                </button>
                                </h2>
                                <div id="collapseOne15" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> <code>.accordion-body</code>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                    <div class="item accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne16" aria-expanded="true" aria-controls="collapseOne16">
                                    <span className="forimg d-flex align-items-center">
                                        <img className="imgi w-20 img-fluid" src="https://back.tinfis.uz/public/uploads/all/xGrkASGAhs3W23QtKf4zNbvVreMNnbTE8CJi8aG7.svg" alt="" />
                                    </span>
                                    <a href="#" className="textspan text-decoration-none text-black ms-3 mt-1"><span className="textspan">Dorixona</span></a>
                                </button>
                                </h2>
                                <div id="collapseOne16" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> <code>.accordion-body</code>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                    <div class="item accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne17" aria-expanded="true" aria-controls="collapseOne17">
                                    <span className="forimg d-flex align-items-center">
                                        <img className="imgi w-20 img-fluid" src="https://back.tinfis.uz/public/uploads/all/6kXoGNFs8ESHWCqXy2U6Ngeg6A0emC6EAxoucZLp.svg" alt="" />
                                    </span>
                                    <a href="#" className="textspan text-decoration-none text-black ms-3 mt-1"><span className="textspan">Zargarlik buyumlari</span></a>
                                </button>
                                </h2>
                                <div id="collapseOne17" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> <code>.accordion-body</code>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>







                    {/* <div className="wrapper">
                    <div className="accordion">
                        {data.map((item, i) =>  (
                            <div className="item">
                                <div className="title" onClick={() => togle(i)}>
                                    
                                    <b>{item.question}</b>
                                    <span className="fs-3">{selected == i ? '-' : '+'}</span>
                                </div>
                                <div className={selected == i ? 'content show' : 'content'}>
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                    </div> */}

              
                </div>
            </div>

            <div className="car me-4">
            <Carousel className="car1">
                <Carousel.Item>
                    <img
                    className="img d-block w-100"
                    src="https://image.tinfis.uz/uploads/all/2022/06/FdnkaSBmULqdNyKLsqg2we2Yc1ji9g02xOSHcqzQ.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img d-block w-100"
                    src="https://image.tinfis.uz/uploads/all/2022/06/zGdEEWCIn6LtC9mQcJCGZzqjAMnBMQQGxF7Rn9Jm.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img d-block w-100"
                    src="https://image.tinfis.uz/uploads/all/2022/06/f1PYQAtVci0OhSbulyTQFV1fh0xG43QGt0daOsVd.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img d-block w-100"
                    src="https://image.tinfis.uz/uploads/all/2022/06/AfrmHGSvtz0BY7K90hIGYphPp1pd6WoYL0vMYcU4.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img d-block w-100"
                    src="https://image.tinfis.uz/uploads/all/2022/06/7jueYgyNSrLWCM4qYE1ZOHq8hGHHyY1oy8UUc93n.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img d-block w-100"
                    src="https://image.tinfis.uz/uploads/all/2022/08/nCunlpYxGtSTnSm6xhL5wx6hefKSZgCngkGkdN4K.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            </div>
        
        </div>
    )
}
// const data = [
//     {
//         question: 'sdsриилотлотлотлотолkjnjkkjnnkjnwwqwerceat iure minus laborum distinctio, dolor reprehenderit ipsum voluptatibus impedit temporibus iusto officia ad?'
//     }
// ]


export default CarouselDiv;