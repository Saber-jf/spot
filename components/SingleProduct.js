import React from "react";
import Image from "next/image";

export default function SingleProduct() {
  return (
    <div className="space-y-8">
      <div className=" w-full flex justify-end rounded-xl overflow-hidden relative">
        <Image src="/buzdolabi.png" width={300} height={300} />
        <div className=" w-full flex flex-col justify-end md:justify-center absolute top-0 bottom-0 z-20 bg-indigo-600 bg-opacity-[10%]  ">
          <div className="p-6 text-[#333] ">
            <h1 className="text-[25px] font-bold ">Buzdolabi Modeleri</h1>
            <p className="font-semibold">
              En Uygun ve En Kaliteli Buzdolapları Burda
            </p>
            <div className="bg-[#ff9900] w-[170px] h-[48px] px-4 flex items-center justify-center mt-4 rounded-xl font-semibold  ">
              <button>Incele</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-end rounded-xl overflow-hidden relative">
        <Image src="/camasir.webp" width={300} height={300} />
        <div className=" w-full flex flex-col justify-end md:justify-center absolute top-0 bottom-0 z-20 bg-indigo-600 bg-opacity-[10%] ">
          <div className="p-6 text-[#333] ">
            <h1 className="text-[25px] font-bold ">
              Çamaşır Makinesi Modeleri
            </h1>
            <p className="font-semibold">
              En Uygun ve En Kaliteli Buzdolapları Burda
            </p>
            <div className="bg-[#ff9900] w-[170px] h-[48px] px-4 flex items-center justify-center mt-4 rounded-xl font-semibold  ">
              <button>Incele</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-end rounded-xl overflow-hidden relative">
        <Image src="/bulasik.webp" width={300} height={300} />
        <div className=" w-full flex flex-col justify-end md:justify-center absolute top-0 bottom-0 z-20 bg-indigo-600 bg-opacity-[10%] ">
          <div className="p-6 text-[#333] ">
            <h1 className="text-[25px] font-bold text-gray-900 ">
              Çamaşır Makinesi Modeleri
            </h1>
            <p className="font-semibold">
              En Uygun ve En Kaliteli Buzdolapları Burda
            </p>
            <div className="bg-[#ff9900] w-[170px] h-[48px] px-4 flex items-center justify-center mt-4 rounded-xl font-semibold  ">
              <button>Incele</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
