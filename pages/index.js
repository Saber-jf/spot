import Head from "next/head";
import Image from "next/image";
import Announcement from "../components/Announcement";
import BigHeader from "../components/BigHeader";
import Brand from "../components/Brand";
import BrandSlider from "../components/BrandSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hiro from "../components/Hiro";
import ProductsBox from "../components/ProductsBox";
import Randevu from "../components/Randevu";
import Services from "../components/Services";
import SingleProduct from "../components/SingleProduct";
import styles from "../styles/Home.module.css";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import Comments from "../components/Comments";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
export default function Home() {
  return (
    <>
      <BigHeader />
      <div className="w-full mx-auto">
        <Head>
          <title>2. El Eşya Alım Satım - İkinci El Eşya Alım & Satım</title>
          <meta
            name="description"
            content="2. El Eşya Alım Satım - İkinci El Eşya Alım & Satım"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Announcement /> */}
        <div className="max-w-[1500px] mx-auto">
          <Header />
        </div>
        <Hiro />
        <div className="max-w-[1500px] w-full mx-auto" id="contact">
          <Randevu />
          <div id="service">
            <Services />
          </div>

          <BrandSlider
            value={[
              { img: "/samsung.jpg" },
              { img: "/siemens.jpg" },
              { img: "/vestel.jpg" },
              { img: "/lg.jpg" },
              { img: "/profilo.jpg" },
              { img: "/altus.jpg" },
              { img: "/arcelik.jpg" },
              { img: "/beko.jpg" },
              { img: "/bosch.jpg" },
              { img: "/grunding.jpg" },
            ]}
          />
          <ProductsBox />
          <div className="fixed bottom-4 right-4 z-50 flex-col gap-4">
            <Link href="tel:+9005327842384">
              <button className="w-16 h-16 bg-[#d37c25] mb-4 rounded-full flex justify-center items-center md:w-32 md:h-32">
                <BsFillTelephoneOutboundFill className="text-[#fff] drop-shadow-md text-[30px] md:text-[60px]" />
              </button>
            </Link>
            <Link href={"https://wa.me/+9005327842384"}>
              <button className="w-16 h-16 bg-[#25d366] rounded-full flex justify-center items-center md:w-32 md:h-32">
                <BsWhatsapp className="text-[#fff] drop-shadow-md text-[30px] md:text-[60px]" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Comments />
      <Footer />
    </>
  );
}
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
