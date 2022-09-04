import React from "react";

export default function Hamburger({ hambur }) {
  return (
    <div className="w-full">
      <div
        className={`h-screen ${
          hambur ? "w-[80%]" : "w-0"
        }   transition-all overflow-hidden bg-red-600 fixed top-0 z-30 `}
      >
        <div>
          <div className="pl-6 pt-6 space-y-2 w-60">
            <h1 className="text-[18px] whitespace-nowrap font-semibold ">
              Tıkla Ara Bilgi Al
            </h1>
            <h1 className="text-[18px] whitespace-nowrap font-semibold ">
              WhatsApp Resim Yolla
            </h1>
            <h1 className="text-[18px] whitespace-nowrap font-semibold ">
              Hizmetler
            </h1>
            <h1 className="text-[18px] whitespace-nowrap font-semibold ">
              İletişim
            </h1>
            <h1 className="text-[18px] whitespace-nowrap font-semibold ">
              Hakkimizda
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
