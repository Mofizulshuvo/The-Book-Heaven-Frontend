import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image1 from "../../assets/images/1.jpg"
import image2 from "../../assets/images/2.jpg"
import image3 from "../../assets/images/3.jpg"
import image4 from "../../assets/images/4.jpg"
import image5 from "../../assets/images/5.jpg"
import image6 from "../../assets/images/6.png"


const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image1} alt="" className="w-full h-[550px]"/></SwiperSlide>
        <SwiperSlide><img src={image2} alt="" className="w-full h-[550px]"/> </SwiperSlide>
        <SwiperSlide><img src={image3} alt="" className="w-full h-[550px]"/> </SwiperSlide>
        <SwiperSlide><img src={image4} alt="" className="w-full h-[550px]"/> </SwiperSlide>
        <SwiperSlide><img src={image5} alt="" className="w-full h-[550px]"/> </SwiperSlide>
        <SwiperSlide><img src={image6} alt="" className="w-full h-[550px]"/> </SwiperSlide>
        {/* <SwiperSlide><img src={image7} alt="" className="w-full h-[500px]"/> </SwiperSlide>
        <SwiperSlide><img src={image8} alt="" className="w-full h-[500px]"/> </SwiperSlide>
        <SwiperSlide><img src={image9} alt="" className="w-full h-[500px]"/> </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
