import React, { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPlusLg } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [hambur, setHambur] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {" "}
      <div className="max-w-[1500px] mx-auto absolute z-50 left-0 right-0 top-0 lg:top-32">
        <div className="w-full">
          <div className="flex justify-between p-[20px] relative ">
            <div>
              <div
                onClick={() => setHambur(!hambur)}
                className="space-y-1 md:hidden"
              >
                <div className={`${hambur && "hidden"} z-50 `}>
                  <GiHamburgerMenu
                    style={{ fontSize: "28px", color: "#fff" }}
                  />
                </div>
              </div>
            </div>
            <Link href="/">
              <div className="flex flex-col justify-center items-center cursor-pointer ">
                <div className="w-16 h-12 relative">
                  <Image src={"/logo2.png"} layout="fill" />
                </div>
                <div className="font-bold text-[#fff] text-xl mt-4 bg-[#645CAA] p-2 bg-opacity-70 rounded-md">
                  İstanbul Spot Dünyası
                </div>
              </div>
            </Link>

            <div className="invisible">
              <div
                onClick={() => setHambur(!hambur)}
                className="space-y-1 md:hidden"
              >
                <div className={`${hambur && "hidden"} z-50 `}>
                  <GiHamburgerMenu
                    style={{ fontSize: "28px", color: "#fff" }}
                  />
                </div>
              </div>
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
                    <Link href={"tel:+9005367906322"}>
                      <div className="font-semibold text-white">
                        Tıkla Ara Bilgi Al
                      </div>
                    </Link>
                    <Link href={"https://wa.me/+9005327842384"}>
                      <div className="font-semibold text-white">
                        WhatsApp Resim Yolla
                      </div>
                    </Link>

                    <Link href={"/#contact"}>
                      <div className="font-semibold text-white">İletişim</div>
                    </Link>

                    <Link href="/Hakkimizda ">
                      <div className="font-semibold text-white">HAKKIMIZDA</div>
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
      </div>
    </>
  );
}
