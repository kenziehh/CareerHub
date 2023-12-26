import React from "react";

const CircularIcon = ({ src, alt, className}) => {
  return (
    <div className={`w-12 aspect-square bg-white shadow-md justify-center flex items-center rounded-full ${className}`}>
      <img src={src} alt={alt} className="object-cover" />
    </div>
  );
};

export default CircularIcon;
