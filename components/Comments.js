import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, EffectCards } from "swiper";

export default function Comments() {
  return (
    <div className="comment px-16 md:px-32 lg:px-64  my-16 container mx-auto">
      <h2 className="my-8 text-center text-2xl">MÜŞTERİ YORUMLARI</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        modules={[EffectCards, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="flex items-center gap-4">
              <img src="/man.png" alt="man" className="w-16" />
              <h3 className="text-base">Mehmet Yalcin</h3>
            </div>
            <p className="text-sm md:text-base mt-8">
              Evimde 1 oda dolusu kullanılmayan eşya vardı, birçok spotçudan
              teklif aldım fakat fiyatlar dalga geçer gibiydi. Daha sonra Roy
              Spot'u gördüm bir kez de şansımı bu şekilde denedim, Müşterisine
              ve alacağı/satacağı eşyaya hakettiği değeri veren bir firma.
              yolları açık olsun.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="flex items-center gap-4">
              <img src="/man.png" alt="man" className="w-16" />
              <h3 className="text-base">Ahmet Köse</h3>
            </div>
            <p className="text-sm md:text-base mt-8">
              Satın aldığımız her şeyi kendi nakliye araçlarıyla getirip kendi
              ekipleriyle kurdular. bu kadar profesyonel bir iş beklemiyordum.
              Teşekkürler RoySpot
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="flex items-center gap-4">
              <img src="/man.png" alt="man" className="w-16" />
              <h3 className="text-base">Ali Osmano</h3>
            </div>
            <p className="text-sm md:text-base mt-8">
              Ekonomik durumum çok iyi olmadığı için evimi 2. el eşya alarak
              dizdim. her şeyimi Roy Spot'tan aldım. hiç pişman değilim her şey
              tertemiz ve sapasağlam.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
