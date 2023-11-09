import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="section_layout">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/assets/images/logo-barber-removebg-preview.png"
            alt="logo"
            width={130}
            height={130}
            className="opacity-70 "
          />
          <h1 className="text_header ">Berberi me i mire ne Tiron!</h1>
          <h5 className="text-sm">Me eksperienc 10 vjecare ne treg.</h5>
        </div>
        <div className="container">
          <Image
            src="/assets/images/Img.jpg"
            className="img rounded-md shadow-md "
            width={250}
            height={150}
            alt="photo"
          />

          <Image
            src="/assets/images/Img2.jpg"
            className="img rounded-md shadow-md "
            width={250}
            height={150}
            alt="photo"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
