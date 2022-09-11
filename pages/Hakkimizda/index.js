import React from "react";
import BigHeader from "../../components/BigHeader";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function index() {
  return (
    <div>
      <BigHeader />
      <div>
        <div className=" flex justify-center mt-10 ">
          <Image src="/tamphoto.jpg" alt="me" width={612} height={408} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
