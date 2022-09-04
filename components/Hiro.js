import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsCamera } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
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
          <div className="relative">
            <div className="w-full h-[300px] md:h-[500px] ">
              <Image src="/one.jpg" alt="me" layout="fill" />
            </div>
            <p className="absolute top-10 text-center w-full left-0 text-[#645CAA] z-20 font-bold">
              Whatsapp üzerinden de bize ulaşabilirsiniz.
            </p>
            <div className="absolute top-20 left-20 flex gap-4 items-center">
              <BsWhatsapp style={{ fontSize: "50px", color: "#ff9900" }} />
              <p className="text-[#fff] bg-[#645CAA] p-1 rounded-md text-2xl font-bold">
                05421992123
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div>
              <div className=" w-full flex justify-evenly mt-10 md:px-24 absolute top-4 text-center left-0 text-white z-20 font-bold">
                <div className="flex flex-col items-center space-y-2">
                  <span className="animate-bounce">
                    <BsFillTelephoneOutboundFill style={{ fontSize: "20px" }} />
                  </span>
                  <div className="flex flex-col items-center space-y-2">
                    <button className="w-[100px] bg-[#645CAA] rounded-lg  text-white">
                      Ara
                    </button>

                    <span>09149600737</span>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <span className="animate-bounce">
                    <BsWhatsapp style={{ fontSize: "20px" }} />
                  </span>
                  <div className="flex flex-col items-center space-y-2">
                    <button className="w-[100px] bg-[#645CAA] rounded-lg text-white ">
                      Yaz
                    </button>

                    <span>09149600737</span>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <span className="animate-bounce">
                    <BsInstagram style={{ fontSize: "20px" }} />
                  </span>
                  <div className="flex flex-col items-center space-y-2">
                    <button className="w-[100px] bg-[#645CAA] rounded-lg text-white">
                      Bak
                    </button>

                    <span>09149600737</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-[300px] md:h-[500px]">
                <Image
                  src="/im2.jpg"
                  alt="me"
                  layout="fill"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
