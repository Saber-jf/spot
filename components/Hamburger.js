import React from "react";

export default function Hamburger({ hambur }) {
  return (
    <div className="w-full">
      <div
        className={`h-screen ${
          hambur ? "w-[80%]" : "w-0"
        }   transition-all overflow-hidden bg-red-600 fixed top-0 z-30 `}
      ></div>
    </div>
  );
}
