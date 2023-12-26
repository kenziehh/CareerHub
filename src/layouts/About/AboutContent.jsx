import React from "react";
import aboutImage from "./../../../public/assets/images/about-image.jpg";

const AboutContent = () => {
  return (
    <div className="container relative">
      <img
        src="/assets/images/about-bg/left.png"
        alt=""
        className="hidden lg:block absolute left-0 top-32 -z-10"
      />
      <img
        src="/assets/images/about-bg/middle.png"
        alt=""
        className="hidden lg:block absolute right-40 bottom-0"
      />
      <img
        src="/assets/images/about-bg/right.png"
        alt=""
        className="hidden lg:block absolute right-0 bottom-0"
      />
      <div className="flex justify-center items-center pb-24 mb-14">
        <img src={aboutImage} alt="" />
      </div>
    </div>
  );
};

export default AboutContent;
