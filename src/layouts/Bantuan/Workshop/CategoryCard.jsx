import React from "react";
const CategoryCard = ({ image, text, onClick }) => {
  return (
    <div
      className="lg:flex-1 flex flex-col gap-6 flex-2 items-center cursor-pointer px-8 py-6 border-2 border-secGray rounded-3xl"
      onClick={onClick}
    >
      <img src={image} alt="" className="" />
      <h4 className="max-w-[170px] text-center">{text}</h4>
    </div>
  );
};

export default CategoryCard;
