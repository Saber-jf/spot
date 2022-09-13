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
import Link from "next/link";
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
      <h1 className="text-center my-1 text-sm px-4 md:text-xl font-bold">
        Eski mobilyalarıniz , antikalariniz , tüm ev eşyalarınız alınır.
      </h1>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
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
            <div className="w-full h-[400px] md:h-[800px]">
              <img
                src="/im2.jpg"
                alt="me"
                className="w-full object-cover h-full"
              />
            </div>

            <p className="absolute top-10 text-center w-full left-0 text-white md:text-2xl p-1  z-20 font-bold ">
              Whatsapp üzerinden de bize ulaşabilirsiniz.
            </p>
            <Link href={"https://wa.me/+9005327842384"}>
              <div className="absolute top-20 w-full bg-[#645CAA] py-2 ">
                <div className="flex gap-4 items-center justify-center">
                  <BsWhatsapp style={{ fontSize: "50px", color: "#ff9900" }} />
                  <p className="text-[#fff]  p-1 rounded-md text-2xl font-bold">
                    05327842384
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div>
              <div className=" w-full bg-[#645CAA] py-4 flex-col space-y-4 px-4 justify-evenly mt-10 md:px-24 absolute top-4 text-center left-0 text-white z-20 font-bold">
                <div className="flex justify-around">
                  <span className="animate-bounce">
                    <BsFillTelephoneOutboundFill style={{ fontSize: "20px" }} />
                  </span>
                  <Link href="tel:+9005367906322">
                    <span className="animate-bounce">Tıkla Ara</span>
                  </Link>
                  <span className="animate-bounce">
                    <BsWhatsapp style={{ fontSize: "20px" }} />
                  </span>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col items-center space-y-2 ">
                    <Link href="tel:+9005367906322">
                      <div className="flex flex-col items-center space-y-2">
                        <span>05367906322</span>
                      </div>
                    </Link>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Link href="tel:+9005327842384">
                      <div className="flex flex-col items-center space-y-2">
                        <span>05327842384</span>
                      </div>
                    </Link>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Link href={"https://wa.me/+9005353417262"}>
                      <div className="flex flex-col items-center space-y-2">
                        <span>05353417262</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" w-full h-[400px] md:h-[800px]">
                <img
                  src="/home.jpg"
                  alt="me"
                  className="w-full object-cover h-full"
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
