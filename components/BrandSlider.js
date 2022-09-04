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
import Brand from "./Brand";
export default function BrandSlider({ value }) {
  return (
    <div className="w-full px-16 ">
      <Swiper
        breakpoints={{
          300: {
            // width: 576,
            slidesPerView: 1,
          },
          768: {
            // width: 768,
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {value.map((brand, key) => (
          <SwiperSlide key={key}>
            <div className="px-4 flex justify-center ">
              <div className="col-span-2">
                <Image src={`${brand.img}`} width={380} height={164} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
