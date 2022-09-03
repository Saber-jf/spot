import React from "react";
import Image from "next/image";

export default function ServiceComponent({ value }) {
  return (
    <div className="md:flex md:space-x-5">
      {value.map((service) => (
        <div className="bg-[#FDF9F1] grid grid-cols-5 my-6 justify-around md:flex md:flex-col items-center px-2 py-8  md:flex-1 ">
          <div>
            <div className="col-span-2">
              <Image src={`${service.image}`} width={200} height={200} />
            </div>
          </div>
          <div className="pl-2 col-span-3  ">
            <h1 className="capitalize text-[20px] font-bold text-[#333333] mb-4">
              {service.title}
            </h1>
            <p className="pr-8 text-justify">{service.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
