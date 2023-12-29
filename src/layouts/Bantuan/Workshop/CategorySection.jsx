import React from "react";
import ArrowButton from "/src/components/ArrowButton";
import { useState } from "react";
import InputSearch from "../../../components/InputSearch";
import category1 from "/assets/images/bantuan-bg/category-1.png";
import category2 from "/assets/images/bantuan-bg/category-2.png";
import category3 from "/assets/images/bantuan-bg/category-3.png";
import category4 from "/assets/images/bantuan-bg/category-4.png";
import CategoryCard from "./CategoryCard";
import layer from "/assets/icons/layers.png";
import workshop1 from "/assets/images/bantuan-bg/workshop-1.png";
import workshop2 from "/assets/images/bantuan-bg/workshop-2.png";
import workshop3 from "/assets/images/bantuan-bg/workshop-3.png";

const CategorySection = ({ heading, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(
    "Komunikasi & Interpersonal"
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

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
    <section className="container flex flex-col gap-10 pt-10 pb-20">
      <InputSearch placeholder="Cari Workshop" />

      <div className="flex flex-col gap-10">
        <h2>Kategori Pilihan</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          <CategoryCard
            text="Komunikasi & Interpersonal"
            image={category1}
            onClick={() => handleCategoryClick("Komunikasi & Interpersonal")}
          />
          <CategoryCard
            text="Keahlinan Industri"
            image={category2}
            onClick={() => handleCategoryClick("Keahlinan Industri")} // Fix the typo here
          />
          <CategoryCard
            text="Manajemen &
Produktivitas"
            image={category3}
            onClick={() => handleCategoryClick("Manajemen & Produktivitas")}
          />
          <CategoryCard
            text="Kreativitas & Inovasi"
            image={category4}
            onClick={() => handleCategoryClick("Kreativitas & Inovasi")}
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="">{selectedCategory}</h2>
        <div className="flex gap-2.5">
          <ArrowButton direction="left" />
          <ArrowButton direction="right" />
        </div>
      </div>
      <div className="flex flex-col gap-24 lg:gap-8 lg:flex-row justify-between items-center lg:items-start overflow-x-auto">
        <div className="flex flex-col gap-6 justify-center flex-1">
          <img src={workshop1} className="max-w-[375px] max-h-[285px]" />
          <div className="flex flex-col gap-6">
            <h4 className="max-w-[340px]">
              Strategi berbicara dengan percaya diri & paham audiens
            </h4>
            <div className="flex gap-4">
              <img src={layer} />
              <p className="">Sesuai Permintaan</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 justify-center flex-1">
          <img src={workshop2} className="max-w-[375px] max-h-[285px]" />
          <h4 className="max-w-[340px]">
            Membangun hubungan sukses di kampus dan dunia kerja
          </h4>
          <div className="flex gap-4">
            <img src={layer} />
            <p className="">Sesuai Permintaan</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 justify-center flex-1">
          <img src={workshop3} className="max-w-[375px] max-h-[285px]" />
          <h4 className="max-w-[340px]">
            Membangun jaringan yang kuat dikampus dan karir
          </h4>
          <div className="flex gap-4">
            <img src={layer} />
            <p className="">Sesuai Permintaan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
