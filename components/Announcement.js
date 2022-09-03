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
export default function Announcement() {
  return (
    <div className="w-full px-16 ">
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
          <div className="w-[30px] h-[30px] flex justify-center">
            <Image
              src="/one.jpg"
              alt="me"
              width="30"
              height="30"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[30px] h-[30px]">
            <Image src="/one.jpg" alt="me" layout="fill" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[30px]">
            <Image src="/one.jpg" alt="me" layout="fill" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[30px]">
            <Image src="/one.jpg" alt="me" layout="fill" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
