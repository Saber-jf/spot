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
            <span className="cursor-pointer">ANA SAYFA</span>
          </Link>
          <Link href="/#service">
            <span className="cursor-pointer">HIZMETLER</span>
          </Link>
          <Link href={"https://wa.me/+9005367906322"}>
            <span className="cursor-pointer">RANDEVU AL</span>
          </Link>
          <Link href="/Hakkimizda">
            <span className="cursor-pointer">HAKKIMIZDA </span>
          </Link>
          <Link href="/#contact">
            <span className="cursor-pointer">İLETİŞİM</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
