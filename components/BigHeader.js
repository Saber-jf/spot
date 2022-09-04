import React from "react";
import Link from "next/link";

export default function BigHeader() {
  return (
    <div>
      <div className="hidden px-4 md:block w-full bg-[#3333] ">
        <div className="text-center">
          <h1 className="text-[20px] font-bold text-[#333333] ">Spotçu</h1>
        </div>
        <div className="w-full max-w-[800px] flex justify-between mx-auto py-8 text-[18px] font-bold   ">
          <Link href="/">
            <h1 className="cursor-pointer">ANA SAYFA</h1>
          </Link>

          <h1 className="cursor-pointer">HIZMETLER</h1>
          <h1 className="cursor-pointer">RANDEVU AL</h1>

          <Link href="/Hakkimizda ">
            <h1 className="cursor-pointer">HAKKIMIZDA </h1>
          </Link>

          <h1 className="cursor-pointer">İLETİŞİM</h1>
        </div>
      </div>
    </div>
  );
}
