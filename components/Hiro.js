import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
export default function Hiro() {
  return (
    <div className="w-full  ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[500px] ">
            <Image src="/one.jpg" alt="me" layout="fill" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[500px]">
            <Image src="/one.jpg" alt="me" layout="fill" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[500px]">
            <Image src="/one.jpg" alt="me" layout="fill" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[500px]">
            <Image src="/one.jpg" alt="me" layout="fill" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
