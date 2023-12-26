import React from "react";

export default function Testimoni() {
  return (
    <div className="container">
      <div className="industry-card">
        <div className="testimoni-container">
          <img
            className="w-[80px] aspect-square"
            src="/assets/image/testimoni.png"
          />
          <p className="text-center text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Sed non sit sed nunc nam
            nunc tellus. Sed non sit sed nunc nam nunc tellus.
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
      </div>
    </div>
  );
}
