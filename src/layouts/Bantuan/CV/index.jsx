import React from "react";
import TipsSection from "../../../components/TipsSection";
import CVHero from "./CVHero";
const CV = () => {
  const images = [
    "/assets/images/bantuan-bg/tips-cv-1.jpg",
    "/assets/images/bantuan-bg/tips-cv-2.jpg",
    "/assets/images/bantuan-bg/tips-cv-3.jpg",
  ];
  return (
    <div>
      <CVHero />
      <TipsSection heading="Tips CV" images={images} />
    </div>
  );
};

export default CV;
