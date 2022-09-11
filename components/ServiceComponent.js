import React from "react";
import Image from "next/image";

export default function ServiceComponent({ value }) {
  return (
    <div className="md:flex md:space-x-5">
      {value.map((service, key) => (
        <div
          key={key}
          className="bg-[#FDF9F1] grid grid-cols-7 my-6 justify-around md:flex md:flex-col items-center px-2 py-8  md:flex-1 "
        >
          <div className="col-span-2">
            <div>
              <Image src={`${service.image}`} width={150} height={150} />
            </div>
          </div>
          <div className="pl-6 col-span-5">
            <h1 className="capitalize text-[20px] font-bold text-[#645CAA] mb-4">
              {service.title}
            </h1>
            <p className="pr-8  text-[#A084CA]">{service.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
