import React from "react";
import BigHeader from "../../components/BigHeader";
import Footer from "../../components/Footer";
import Image from "next/image";
import Header from "../../components/Header";
import Link from "next/link";
import Tag from "../../components/Tag";

export default function index() {
  return (
    <div>
      <div>
        <BigHeader />
        <Header />
        <div>
          <div className=" flex justify-center mt-10 ">
            <Image src="/buzdo-model.webp" alt="me" width={612} height={408} />
          </div>
          <div className="p-4 max-w-[800px] mx-auto">
            <p>
              kadikoy Spot Eşya kurulduğu günden itibaren müşterilerine ikinci
              el eşya sektöründe kaliteli hizmet vermek adına sürekli olarak
              çalışmalar yürütmektedir.
              <br></br>
              <br></br>
              kadikoy Spot Eşya ikinci el spot eşya sektöründe geçmişe dayanan
              tecrübeleri sayesinde piyasada lider kuruluşlar arasında yer
              almaktadır.
              <br></br>
              <br></br>
              2. el eşya sektöründe 10 yıllık deneyimiyle hizmet sunan kadikoy
              Spot, uzman kadrosu ve profesyonel çalışanları ile 2. el beyaz
              eşyalarınızı, mobilyalarınızı ve televizyonlarınızı değerinde ve
              nakit olarak almakta ve sizlere profesyonel bir hizmet
              sunmaktadır.
            </p>
            <div className="grid grid-cols-6 mt-8 gap-4">
              <Tag
                link={"/Buzdolabi"}
                value={[
                  { tag: "2.el no-frost buzdolabi" },
                  { tag: " 2.el buzdolabı alim" },
                  { tag: "kadıköy de 2.el buzdolabı" },
                  { tag: "ikinci el eşya alim satim" },
                  { tag: "2.el buzdolabı satim" },
                  { tag: "kadıköy de 2 el eşya fiyatları" },
                ]}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
      s
    </div>
  );
}
