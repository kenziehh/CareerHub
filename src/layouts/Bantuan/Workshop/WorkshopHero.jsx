import React from "react";
import heroImage from "/assets/images/bantuan-bg/workshop-hero.jpg";
    
const WorkshopHero = () => {
  return (
    <div className="container flex flex-col gap-10">
      <div className="pt-20">
        <img src={heroImage} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default WorkshopHero;
