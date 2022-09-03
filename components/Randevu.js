import React from "react";
import { BsCamera } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Randevu() {
  return (
    <div className="px-4 mt-10">
      <div className=" bg-indigo-600 bg-opacity-[15%] rounded-xl py-10 lg:px-16 ">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center content-center  px-6 ">
          <div className=" flex flex-col items-center space-y-8 ">
            <span>
              <BsCamera style={{ fontSize: "80px", color: "#ff9900" }} />
            </span>
            <h1 className="pl-4 text-[16px] font-bold ">
              Eşyanizin Fotoğrafını Çekin
            </h1>
          </div>
          <h1 className=" text mx-auto  items-center w-[300px] hidden lg:flex lg:items-center lg:justify-center rounded-xl  bg-[#ff9900] border-2 px-8 h-[50px] text-center ">
            hızlı İletişim Bilgileri
          </h1>
          <div>
            <div className="flex flex-col items-center space-y-8 ">
              <span>
                <BsWhatsapp style={{ fontSize: "80px", color: "#ff9900" }} />
              </span>
              <h1 className="pl-4 text-[16px] font-bold   ">
                Fotoğrafı WhatsApp dan gönderin{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-col items-center  justify-center mt-12">
          <h1 className=" w-[300px] lg:hidden bg-[#ff9900] border-2 px-8 py-3 rounded-xl text-center ">
            hızlı İletişim Bilgileri
          </h1>
          <div className=" w-full flex justify-evenly mt-10 md:px-24 ">
            <div className="flex flex-col items-center space-y-4">
              <span className="animate-bounce">
                <BsFillTelephoneOutboundFill style={{ fontSize: "25px" }} />
              </span>
              <div className="flex flex-col items-center space-y-4">
                <button className="w-[100px] bg-red-500 rounded-lg  text-white">
                  Ara
                </button>

                <span>09149600737</span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <span className="animate-bounce">
                <BsWhatsapp style={{ fontSize: "25px" }} />
              </span>
              <div className="flex flex-col items-center space-y-4">
                <button className="w-[100px] bg-red-500 rounded-lg text-white ">
                  Ara
                </button>

                <span>09149600737</span>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <span className="animate-bounce">
                <BsInstagram style={{ fontSize: "25px" }} />
              </span>
              <div className="flex flex-col items-center space-y-4">
                <button className="w-[100px] bg-red-500 rounded-lg text-white">
                  Bak
                </button>

                <span>09149600737</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
