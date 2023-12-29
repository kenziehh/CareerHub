import React from "react";
import CategoryCard from "./CategoryCard";
import category1 from "/assets/images/bantuan-bg/category-1.png";
import category2 from "/assets/images/bantuan-bg/category-2.png";
import category3 from "/assets/images/bantuan-bg/category-3.png";
import category4 from "/assets/images/bantuan-bg/category-4.png";
import { useState } from "react";
import TipsSection from "../../../components/TipsSection";
import CategorySection from "./CategorySection";
import WorkshopHero from "./WorkshopHero";

const Workshop = () => {
  return (
    <div>
      <WorkshopHero />
      <CategorySection></CategorySection>
    </div>
  );
};

export default Workshop;
