import React from "react";
import Button from "./Button";

const EventSection = ({ heading, subheading, children }) => {
  return (
    <section className="container pb-20">
      <div className="flex flex-col gap-16">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h5 className="text-primaryBlue tracking-[5px] font-bold">
              {heading}
            </h5>
            <h2 className="">{subheading}</h2>
          </div>
          <Button variant="disabled">Lihat Selengkapnya</Button>
        </div>
        <div className="flex border-2 border-black overflow-x-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
