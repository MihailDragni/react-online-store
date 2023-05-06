import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'

import 'swiper/scss'
import 'swiper/scss/navigation'

import Home1 from '../assets/img/home1.jpg'
import Home2 from '../assets/img/home2.jpg'
import Home3 from '../assets/img/home3.jpg'

function Presentation() {
  return (
    <Swiper
      className="main-presentation"
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide
        className="main-presentation__item"
        style={{
          backgroundImage: `url(${Home2})`,
        }}
      >
        <h2 className="main-presentation__title">
          Лучшие товары для вашего дома
        </h2>
        <h3 className="main-presentation__subtitle">по низким ценам</h3>
      </SwiperSlide>
      <SwiperSlide
        className="main-presentation__item"
        style={{
          backgroundImage: `url(${Home1})`,
        }}
      >
        <h2 className="main-presentation__title">
          Лучшие товары для вашего дома
        </h2>
        <h3 className="main-presentation__subtitle">по низким ценам</h3>
      </SwiperSlide>
      <SwiperSlide
        className="main-presentation__item"
        style={{
          backgroundImage: `url(${Home3})`,
        }}
      >
        <h2 className="main-presentation__title">
          Лучшие товары для вашего дома
        </h2>
        <h3 className="main-presentation__subtitle">по низким ценам</h3>
      </SwiperSlide>
    </Swiper>
  )
}

export default Presentation
