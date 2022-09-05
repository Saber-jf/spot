import React, { useState } from "react";
import Hamburger from "./Hamburger";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPlusLg } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [hambur, setHambur] = useState(false);
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center p-[20px] relative ">
          <div>
            <div
              onClick={() => setHambur(!hambur)}
              className="space-y-1 md:hidden"
            >
              <div className={`${hambur && "hidden"} z-50 `}>
                <GiHamburgerMenu
                  style={{ fontSize: "28px", color: "#645CAA" }}
                />
              </div>
            </div>
          </div>
          <Link href="/">
            <div className="flex flex-col justify-center items-center cursor-pointer ">
              <div className="w-16 h-12 relative">
                <Image src={"/logo2.png"} layout="fill" />
              </div>
              <h1 className="font-bold text-[#645CAA] text-2xl">
                Spot Dünyası
              </h1>
            </div>
          </Link>

          <div>
            <h1></h1>
          </div>
        </div>
        <div className="">
          <div className="w-full ">
            <div
              className={`flex justify-between h-screen ${
                hambur ? "w-[80%]" : "w-0"
              }   transition-all duration-500 overflow-hidden bg-[#645CAA] fixed top-0 z-30 pt-[40px] `}
            >
              <div>
                <div
                  className={`${
                    !hambur ? "hidden" : "block"
                  } pl-6 space-y-8 text-[18px]  whitespace-nowrap`}
                >
                  <h1 className="font-semibold text-white">
                    Tıkla Ara Bilgi Al
                  </h1>
                  <h1 className="font-semibold text-white">
                    WhatsApp Resim Yolla
                  </h1>
                  <h1 className="font-semibold text-white">Hizmetler</h1>
                  <h1 className="font-semibold text-white">İletişim</h1>
                  <Link href="/Hakkimizda ">
                    <h1 className="font-semibold text-white">HAKKIMIZDA </h1>
                  </Link>
                </div>
              </div>
              <div
                onClick={() => setHambur(!hambur)}
                className={`${!hambur && "hidden"} z-50 flex mr-6 `}
              >
                <BsPlusLg
                  style={{
                    fontSize: "30px",
                    color: "#fff",
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
