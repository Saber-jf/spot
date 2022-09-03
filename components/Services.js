import React from "react";

import ServiceComponent from "./ServiceComponent";

export default function Services() {
  return (
    <div>
      <div className="w-full mt-20 ">
        <div className="px-4 space-y-4 md:flex md:flex-row">
          <div className="   ">
            <ServiceComponent
              value={[
                {
                  title: " HIZLI FIYATLANDIRMA",
                  details:
                    "Ürünlerinizi olduğunuz yerden hızlı bir fiyat politikası vererek alıyoruz",
                  image: "/fast.png",
                },
                {
                  title: " UYGUN FİYAT",
                  details:
                    "En uygun ürünleri bizi arayarak fiyat alabilirsiniz, yerinde Expert hizmeti sunuyoruz",
                  image: "/fiyat.png",
                },
                {
                  title: "HIZLI TESLİMAT",
                  details: "En kaliteli ürünleri bizde bulabilirsiniz.",
                  image: "/deliver.png",
                },
                {
                  title: "Kalite",
                  details: "En kaliteli ürünleri bizde bulabilirsiniz.",
                  image: "/best.png",
                },
              ]}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
