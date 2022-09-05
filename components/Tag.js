import Link from "next/link";
import React from "react";

export default function Tag({ value, link }) {
  return (
    <>
      {value.map((tag) => (
        <div className="p-4 flex justify-center border-2 text-[12px] ">
          <Link href={link}>
            <button>{tag.tag}</button>
          </Link>
        </div>
      ))}
    </>
  );
}
