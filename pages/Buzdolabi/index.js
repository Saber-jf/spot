import React from "react";
import BigHeader from "../../components/BigHeader";
import Footer from "../../components/Footer";
import Image from "next/image";
import Header from "../../components/Header";
import Link from "next/link";
import Tag from "../../components/Tag";
import { BsWhatsapp, BsFillTelephoneOutboundFill } from "react-icons/bs";
export default function index() {
  return (
    <div>
      <div>
        <BigHeader />
        <Header />
        <div>
          <div className=" flex justify-center">
            <Image src="/buzdo-model.webp" alt="me" width={612} height={408} />
          </div>
          <div className="p-4 max-w-[800px] mx-auto">
            <p>
              İstanbul Spot Dünyası Eşya kurulduğu günden itibaren müşterilerine
              ikinci el eşya sektöründe kaliteli hizmet vermek adına sürekli
              olarak çalışmalar yürütmektedir.
              <br></br>
              <br></br>
              İstanbul Spot Dünyası Eşya ikinci el spot eşya sektöründe geçmişe
              dayanan tecrübeleri sayesinde piyasada lider kuruluşlar arasında
              yer almaktadır.
              <br></br>
              <br></br>
              2. el eşya sektöründe 10 yıllık deneyimiyle hizmet sunan kadikoy
              Spot, uzman kadrosu ve profesyonel çalışanları ile 2. el beyaz
              eşyalarınızı, mobilyalarınızı ve televizyonlarınızı değerinde ve
              nakit olarak almakta ve sizlere profesyonel bir hizmet
              sunmaktadır.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 mt-8 gap-4">
              <Tag
                link={"/buzdolabi"}
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
        <div className="fixed bottom-4 right-4 z-50 flex-col gap-4">
          <Link href="tel:+9005327842383">
            <button className="w-16 h-16 bg-[#d37c25] mb-4 rounded-full flex justify-center items-center md:w-32 md:h-32">
              <BsFillTelephoneOutboundFill className="text-[#fff] drop-shadow-md text-[30px] md:text-[60px]" />
            </button>
          </Link>
          <Link href={"https://wa.me/+9005367906322"}>
            <button className="w-16 h-16 bg-[#25d366] rounded-full flex justify-center items-center md:w-32 md:h-32">
              <BsWhatsapp className="text-[#fff] drop-shadow-md text-[30px] md:text-[60px]" />
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}
