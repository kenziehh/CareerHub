import React from "react";
import bantuanImage from "/assets/images/help-image.png";
// import bgImage from "/assets/images/bantuan-bg/union.png";
const HeroBantuan = () => {
  //   const bgUnion = {
  //     backgroundImage: `url(${bgImage})`,
  //     backgroundPosition: "bottom",
  //     backgroundRepeat: "no-repeat",
  //   };
  return (
    <section className="container py-24">
      <div className="flex items-center justify-between">
        <div className="inline-flex flex-col flex-start gap-8 max-w-[480px]">
          <h1 className="">Persiapkan untuk kesuksesan karirmu</h1>
          <p className="text-primaryGray">
            Dapatkan akses eksklusif ke panduan terbaik, tips wawancara yang
            terpercaya, dan sumber daya karir yang akan membimbing Anda menuju
            kesuksesan dalam dunia kerja.
          </p>
        </div>
        <div className="flex items-center">
          <div className=""></div>
          <img src={bantuanImage} />
        </div>
      </div>
    </section>
  );
};

export default HeroBantuan;
