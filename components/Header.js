import React, { useState } from "react";
import Hamburger from "./Hamburger";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPlusLg } from "react-icons/bs";

export default function Header() {
  const [hambur, setHambur] = useState(false);
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center p-[50px] relative ">
          <div>
            <div
              onClick={() => setHambur(!hambur)}
              className="space-y-1 md:hidden"
            >
              <div className={`${hambur && "hidden"} z-50 `}>
                <GiHamburgerMenu
                  style={{ fontSize: "28px", color: "#333333" }}
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[20px] font-bold text-[#333333] md:hidden ">
              Spotçu
            </h1>
          </div>
          <div>
            <h1></h1>
          </div>
        </div>
        <div className="">
          <div className="w-full ">
            <div
              className={` flex h-screen ${
                hambur ? "w-[80%]" : "w-0"
              }   transition-all overflow-hidden bg-[#ff9900] fixed top-0 z-30 `}
            >
              <div>
                <div className="pl-6 pt-6 space-y-8 mt-[100px] ">
                  <h1 className="text-[18px] font-serif font-semibold ">
                    Tıkla Ara Bilgi Al
                  </h1>
                  <h1 className="text-[18px] font-serif font-semibold ">
                    WhatsApp Resim Yolla
                  </h1>
                  <h1 className="text-[18px] font-serif font-semibold ">
                    Hizmetler
                  </h1>
                  <h1 className="text-[18px] font-serif font-semibold ">
                    İletişim
                  </h1>
                  <h1 className="text-[18px] font-serif font-semibold ">
                    Hakkimizda
                  </h1>
                </div>
              </div>
              <div
                onClick={() => setHambur(!hambur)}
                className={`${!hambur && "hidden"} z-50 ml-20 mt-16`}
              >
                <BsPlusLg
                  style={{
                    fontSize: "30px",
                    color: "#333333",
                    transform: "rotateZ(45deg)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
