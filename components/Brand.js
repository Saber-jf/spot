import React from "react";
import Image from "next/image";

export default function Brand({ value }) {
  return (
    <>
      {value.map((brand) => (
        <div className="px-4 flex justify-center ">
          <div>
            <Image src={`${brand.img}`} width={180} height={180} />
          </div>
        </div>
      ))}
    </>
  );
}
