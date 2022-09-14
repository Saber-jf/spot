import React, { useEffect, useRef, useState } from "react";
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
import { Fade, Zoom } from "react-reveal";
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
      <Fade bottom>
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
              <div className="w-full h-[70vh] md:h-[800px]">
                <img
                  src="/hero.jpg"
                  alt="me"
                  className="w-full object-cover h-full"
                />
              </div>

              <p className="absolute top-32 text-center w-full lg:mt-4 left-0 text-white md:text-2xl p-1  z-20 font-bold ">
                Whatsapp üzerinden de bize ulaşabilirsiniz.
              </p>
              <Link href={"https://wa.me/+9005327842384"}>
                <div className="absolute top-40 w-full bg-[#645CAA] py-2 md:top-52">
                  <div className="flex gap-4 items-center justify-center">
                    <BsWhatsapp className="text-[20px] md:text-[32px] text-white" />
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
                <div className=" w-full bg-[#645CAA] py-4 md:py-8 flex-col space-y-4 px-4 justify-evenly mt-10 md:px-64 absolute top-32 text-center left-0 text-white z-20 font-bold">
                  <div className="flex justify-around">
                    <span className="animate-bounce">
                      <BsFillTelephoneOutboundFill className="text-[20px] md:text-[32px]" />
                    </span>
                    <Link href="tel:+9005367906322">
                      <span className="animate-bounce">Tıkla Ara</span>
                    </Link>
                    <span className="animate-bounce">
                      <BsWhatsapp className="text-[20px] md:text-[32px]" />
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col items-center space-y-2 ">
                      <Link href="tel:+9005367906322">
                        <div className="flex flex-col items-center space-y-2">
                          <span className="md:text-xl">05367906322</span>
                        </div>
                      </Link>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Link href="tel:+9005327842384">
                        <div className="flex flex-col items-center space-y-2">
                          <span className="md:text-xl">05327842384</span>
                        </div>
                      </Link>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Link href={"https://wa.me/+9005353417262"}>
                        <div className="flex flex-col items-center space-y-2">
                          <span className="md:text-xl">05353417262</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className=" w-full h-[70vh] md:h-[800px]">
                  <img
                    src="/antik.jpg"
                    alt="me"
                    className="w-full object-cover h-full"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Fade>
      <Zoom delay={800}>
        <div className=" absolute left-0  w-full right-0 bottom-64 flex justify-center">
          <h1 className="text-center my-1 text-sm p-2 md:text-2xl font-bold bg-[#76aa5c] text-white rounded-md">
            Eski mobilyalarıniz , antikalariniz , tüm ev eşyalarınız alınır.
          </h1>
        </div>
      </Zoom>

      <Fade left delay={800}>
        <div className="my-4">
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
      </Fade>
    </div>
  );
}
