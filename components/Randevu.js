import Image from "next/image";
import React from "react";
import { BsCamera } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Randevu() {
  return (
    <div className="px-4 mt-4">
      <h2 className="text-[#645CAA] text-center my-2 text-2xl">
        Süreç Nasıl İşliyor
      </h2>
      <p className="text-sm text-center mb-2">
        İkinciel eşyalarınızı nasıl fiyatlandırıyoruz. Bu işlem üç aşamadan
        oluşmaktadır.
      </p>
      <div className=" bg-[#EBC7E8] bg-opacity-60 rounded-xl py-10 lg:px-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center content-center gap-12 px-6 ">
          <div className=" flex flex-col items-center space-y-1 text-black">
            <div className="relative w-20 h-20">
              <Image src={"/camera.png"} layout="fill" />
            </div>
            <h5 className="ext-[16px] font-bold text-[#645CAA] text-center drop-shadow-md">
              Eşyalarınzın Resimlerini Gönderin
            </h5>
            <p className="text-xs text-center font-bold text-[#645CAA] drop-shadow-md">
              Öncelikle telefon numaramızı kaydedin, Satmayı düşündüğünüz
              eşyaların resimlerini çekerek bizlere veya Mail adresimize
              gönderin.
            </p>
          </div>
          <div className=" flex flex-col items-center space-y-1 text-black">
            <div className="relative w-20 h-20">
              <Image src={"/money.png"} layout="fill" />
            </div>
            <h5 className="ext-[16px] font-bold text-[#645CAA] text-center drop-shadow-md">
              Eşyalarınzın Fiyatlandıralım
            </h5>
            <p className="text-xs text-center font-bold text-[#645CAA] drop-shadow-md">
              Göndermiş olduğunuz resimler uzman ekibimiz tarafından
              değerlendirilip sizlere en iyi fiyatı verelim.
            </p>
          </div>
          <div className=" flex flex-col items-center space-y-1 text-black">
            <div className="relative w-20 h-20">
              <Image src={"/delivery-truck.png"} layout="fill" />
            </div>
            <h5 className="ext-[16px] font-bold text-[#645CAA] text-center drop-shadow-md">
              Adresinize Gelip Alalım
            </h5>
            <p className="text-xs text-center font-bold text-[#645CAA] drop-shadow-md">
              Fiyatı onaylamanız durumunda ekibimiz kapınıza gelip nakit olarak
              satmak istediğiniz eşyalarınızı alıyor.
            </p>
          </div>
          {/* <h1 className=" text mx-auto  items-center w-[300px] hidden lg:flex lg:items-center lg:justify-center rounded-xl  bg-[#ff9900] border-2 px-8 h-[50px] text-center ">
            hızlı İletişim Bilgileri
          </h1> */}
        </div>
        <div className=" w-full flex flex-col items-center  justify-center mt-12">
          <h1 className=" w-[300px] lg:hidden capitalize bg-[#E3C770] text-[#fff] text-bold border-2 px-8 py-3 rounded-xl text-center text-xl ">
            hızlı İletişim Bilgileri
          </h1>
          <div className=" w-full flex justify-evenly mt-10 md:px-24 ">
            <div className="flex flex-col items-center space-y-4">
              <span className="animate-bounce">
                <BsFillTelephoneOutboundFill
                  style={{ fontSize: "25px" }}
                  className="text-[#A084CA] drop-shadow-md"
                />
              </span>
              <div className="flex flex-col items-center space-y-4">
                <button className="w-[100px] bg-[#FDF9F1] text-[#A084CA] rounded-lg">
                  Ara
                </button>

                <span className="text-[#645CAA] drop-shadow-md">
                  05367906322
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <span className="animate-bounce">
                <BsWhatsapp
                  style={{ fontSize: "25px" }}
                  className="text-[#A084CA] drop-shadow-md"
                />
              </span>
              <button className="w-[100px] bg-[#FDF9F1] text-[#A084CA] rounded-lg ">
                Yaz
              </button>

              <span className="text-[#645CAA] drop-shadow-md">05327842384</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <span className="animate-bounce">
                <BsFillTelephoneOutboundFill
                  style={{ fontSize: "25px" }}
                  className="text-[#A084CA] drop-shadow-md"
                />
              </span>
              <div className="flex flex-col items-center space-y-4">
                <button className="w-[100px] bg-[#FDF9F1] text-[#A084CA] rounded-lg">
                  Bak
                </button>

                <span className="text-[#645CAA] drop-shadow-md">
                  05353417262
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
