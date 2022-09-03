import React from "react";

export default function BigHeader() {
  return (
    <div>
      <div className="hidden px-4 md:block w-full bg-[#3333] ">
        <div className="text-center">
          <h1 className="text-[20px] font-bold text-[#333333] ">Spotçu</h1>
        </div>
        <div className="w-full max-w-[800px] flex justify-between mx-auto py-8 text-[18px] font-bold   ">
          <h1>ANA SAYFA</h1>
          <h1>HIZMETLER</h1>
          <h1>RANDEVU AL</h1>
          <h1>İLETİŞİM</h1>
        </div>
      </div>
    </div>
  );
}
