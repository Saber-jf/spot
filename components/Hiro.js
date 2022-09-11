import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import kargo from "../public/kargo.json";
import Lottie from "react-lottie";
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
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: kargo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full">
      <p className="text-center my-4 text-xl px-8">
        Eski mobilyalarıniz , antikalariniz , tüm ev eşyalarınız alınır.
      </p>

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

            <p className="absolute top-10 text-center w-full left-0 text-white bg-[#645CAA] z-20 font-bold ">
              Whatsapp üzerinden de bize ulaşabilirsiniz.
            </p>
            <div className="absolute top-20 w-full bg-[#645CAA] ">
              <div className="flex gap-4 items-center justify-center">
                <BsWhatsapp style={{ fontSize: "50px", color: "#ff9900" }} />
                <p className="text-[#fff]  p-1 rounded-md text-2xl font-bold">
                  05327842384
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div>
              <div className=" w-full flex-col space-y-4 px-4 justify-evenly mt-10 md:px-24 absolute top-4 text-center left-0 text-white z-20 font-bold">
                <div className="flex justify-around">
                  <span className="animate-bounce">
                    <BsFillTelephoneOutboundFill style={{ fontSize: "20px" }} />
                  </span>
                  <span className="animate-bounce">
                    <BsWhatsapp style={{ fontSize: "20px" }} />
                  </span>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex flex-col items-center space-y-2">
                      <span>05367906322</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex flex-col items-center space-y-2">
                      <span>05327842384</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex flex-col items-center space-y-2">
                      <span>05353417262</span>
                    </div>
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
      <div className="my-16">
        <Lottie
          options={defaultOptions}
          height={100}
          width={200}
          isStopped={false}
          isPaused={false}
        />
        <p className="text-center px-14 text-xl">
          Evden eve nakliyat işleriniz yapılır.
        </p>
      </div>
    </div>
  );
}
