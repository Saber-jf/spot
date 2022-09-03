import React from "react";

export default function Footer() {
  return (
    <div>
      <div className=" bg-yellow-600 mt-10 px-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center divide-y-2 md:divide-y-0 md:mx-auto max-w-[1500px] mx-auto ">
          <div className="mt-10 pb-5  md:px-10 flex flex-col justify-center ">
            <h1>HAKKIMIZDA</h1>
            <p className="text-justify">
              2. el eşya sektöründe 10 yıllık deneyimiyle hizmet sunan Halim
              Spot, uzman kadrosu ve profesyonel çalışanları ile 2. el beyaz
              eşyalarınızı, mobilyalarınızı ve televizyonlarınızı değerinde ve
              nakit olarak almakta ve sizlere profesyonel bir hizmet
              sunmaktadır.
            </p>
          </div>
          <div className="py-5 md:px-10 flex flex-col justify-center items-center ">
            <h1>Hizmetlerimiz</h1>
            <ul>
              <li>Buzdolabı 2. El alımı ve Satış</li>
              <li>Kombi 2. El alımı ve Satışı...</li>
              <li>Çamaşır Makinesi 2. El alımı v...</li>
              <li>Bulaşık Makinesi 2. El alımı v...</li>
              <li>Beyaz 2. El eşya alımı ve Satışı...</li>
            </ul>
          </div>
          <div className="pt-5 md:px-10 flex flex-col justify-center items-center">
            <ul>
              <li>Telefon Ara</li>
              <li>Instagram</li>
              <li>whatsapp</li>
              <li>adres</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
