import React from "react";
import Image from "next/image";
import { BsCheck2 } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFillGeoAltFill } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      <div className=" bg-gray-700 mt-10 px-6 text-gray-300 ">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center md:items-start md:divide-y-0 md:mx-auto max-w-[1500px] mx-auto ">
          <div className="flex flex-col justify-center">
            <div className="mt-10 flex items-center font-serif ">
              <Image src="/logo.svg" width={80} height={80} />
              <ul className="pl-8">
                <li className="flex items-center space-x-2">
                  <span>
                    <BsCheck2 />
                  </span>
                  <span>Müşteri Memnuniyeti</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>
                    <BsCheck2 />
                  </span>
                  <span>Kaliteli Hizmet</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>
                    <BsCheck2 />
                  </span>
                  <span>Uygun Fiyat</span>
                </li>
              </ul>
            </div>
            <h1 className="mt-5 text-[20px] font-serif text-center md:text-start ">
              Kadikoy spotcu
            </h1>
          </div>

          {/* <div className="mt-10 pb-5  md:px-10 flex flex-col">
            <h1 className="text-[18px] font-serif mt-5 ">HAKKIMIZDA</h1>
            <p className="flex  md:justify-center ml-4 mt-3 ">
              2. el eşya sektöründe 10 yıllık deneyimiyle hizmet sunan Halim
              Spot, uzman kadrosu ve profesyonel çalışanları ile 2. el beyaz
              eşyalarınızı, mobilyalarınızı ve televizyonlarınızı değerinde ve
              nakit olarak almakta ve sizlere profesyonel bir hizmet
              sunmaktadır.
            </p>
          </div> */}
          <div className="py-5 md:px-10 flex flex-col md:justify-center md:items-start  ">
            <h1 className="text-[18px] font-serif font-semibold ">
              Hizmetlerimiz
            </h1>
            <ul className="flex flex-col list-disc  md:justify-center ml-4 space-y-2 mt-3 pl-5 ">
              <li>Buzdolabı 2. El alımı ve Satış...</li>
              <li>Kombi 2. El alımı ve Satışı...</li>
              <li>Çamaşır Makinesi 2. El alımı v...</li>
              <li>Bulaşık Makinesi 2. El alımı v...</li>
              <li>Beyaz 2. El eşya alımı ve Satışı...</li>
            </ul>
          </div>
          <div className=" py-5 md:px-10 flex flex-col md:justify-center md:items-start ">
            <h1 className="text-[18px] font-serif font-semibold ">
              Hizmetlerimiz
            </h1>
            <ul className="flex flex-col list-disc md:justify-center  space-y-2 mt-3 pl-5 ">
              <li className="flex items-center space-x-2">
                <BsWhatsapp />
                <span>05367154561</span>
              </li>
              <li className="flex items-center space-x-2">
                <BsFillTelephoneOutboundFill />
                <span>05367154561</span>
              </li>
              <li className="flex items-center space-x-2">
                <BsInstagram />
                <span>eco_Spot</span>
              </li>
              <li className="flex items-center space-x-2">
                <BsFillGeoAltFill />
                <span>Kadikoy goztepe sahika sokak</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
