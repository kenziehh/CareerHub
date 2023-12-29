import React from "react";
import ArrowButton from "./ArrowButton";
import { useState } from "react";

const TipsSection = ({ heading, children, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <section className="container pb-20">
      <div className="flex flex-col gap-16">
        <div className="flex justify-between items-center">
          <h2 className="">{heading}</h2>
          <div className="flex gap-2.5">
            <ArrowButton direction="left" onClick={handlePrev} />
            <ArrowButton direction="right" onClick={handleNext} />
          </div>
        </div>
        <div className="flex border-2 border-black overflow-x-auto rounded-3xl">
          <img
            className="w-full h-auto"
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
          />
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
