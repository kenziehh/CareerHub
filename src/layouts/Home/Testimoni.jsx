import React from "react";
import Card from "../../components/Card";
import { BiSolidQuoteAltRight } from "react-icons/bi";

export default function Testimoni() {
  return (
    <section className="relative pt-20 pb-20">
      <div className="container text-center space-y-12">
        <img
          src="/assets/images/testimoni-bg/left.png"
          alt=""
          className="absolute left-0 top-0 -z-10"
        />
        <img
          src="/assets/images/testimoni-bg/right.png"
          alt=""
          className="absolute right-0 bottom-0 -z-10"
        />
        <h2>Testimoni</h2>
        <div className="flex gap-4 justify-center items-center">
          <TestimoniCard />
          <TestimoniCard />
          <TestimoniCard />
        </div>
      </div>
    </section>
  );
}

const TestimoniCard = () => {
  return (
    <Card className="w-[300px]">
      <div className="testimoni-container">
        <div className="relative">
          <img
            className="w-[80px] aspect-square"
            src="/assets/images/testimoni.png"
          />
          <div className="absolute right-0 bottom-[5%] text-white bg-[#00a79d] p-1 border-2 border-white rounded-full">
            <BiSolidQuoteAltRight />
          </div>
        </div>
        <p className="text-center text-[16px]">
          Lorem ipsum dolor sit amet consectetur. Sed non sit sed nunc nam nunc
          tellus. Sed non sit sed nunc nam nunc tellus.
        </p>

        <div className="w-3 aspect-square bg-[#00a79d] rounded-full" />

        <div>
          <div
            style={{
              textAlign: "center",
              color: "#24272d",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.72px",
              wordWrap: "break-word",
            }}
          >
            Allison Adam
          </div>
          <div
            style={{
              textAlign: "center",
              color: "#6e7175",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.48px",
              wordWrap: "break-word",
            }}
          >
            Founder & CEO
          </div>
        </div>
      </div>
    </Card>
  );
};
