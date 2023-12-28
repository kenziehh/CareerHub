import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ArrowButton = ({ direction, onClick }) => {
  return (
    <button onClick={onClick} className="flex p-[10px] text-black justify-center items-center bg-white rounded-full">
      {direction === "left" ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
  );
};

export default ArrowButton;
