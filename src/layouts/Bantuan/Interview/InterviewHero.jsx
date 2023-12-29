import React from "react";
import Button from "/src/components/Button";

const InterviewHero = () => {
  return (
    <div className="container py-10 h-[650px]">
      <div
        style={{
          backgroundImage: "url(/assets/images/bantuan-bg/interview-hero.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-full flex flex-col justify-center rounded-3xl"
      >
        <div className="text-white max-w-[480px] py-[102px] ml-20 flex flex-col gap-10 items-start">
          <div className="flex flex-col gap-6">
            <h1>Siapkan karirmu dengan percaya diri</h1>
            <p>
              kami merancang ini khusus untuk membantu anda mengasah
              keterampilan interview dan mencapai kesuksesan karir
            </p>
          </div>
          <Button variant="default" className="border-none">
            <a
              href="https://meet.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coba Interview
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewHero;
