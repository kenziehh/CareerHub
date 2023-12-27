import React from "react";
import HeroBantuan from "./HeroBantuan";
import ReusableCard from "/src/components/TopPerusahaanCard";
import EventSection from "/src/components/EventSection";

const Bantuan = () => {
  return (
    <div>
      <HeroBantuan />
      <EventSection heading="INTERVIEW" subheading="Event yang akan datang">
        <ReusableCard />
        <ReusableCard />
        <ReusableCard />
        <ReusableCard />
        <ReusableCard />
        <ReusableCard />
        <ReusableCard />
      </EventSection>
      <EventSection
        heading="CV & SURAT LAMARAN"
        subheading="Event yang akan datang"
      >
        <ReusableCard />
        <ReusableCard />
        <ReusableCard />
        <ReusableCard />
        <ReusableCard />
        <ReusableCard />
        <ReusableCard />
      </EventSection>
      <EventSection heading="WORKSHOP" subheading="Event yang akan datang">
        <ReusableCard />
        <ReusableCard />
        <ReusableCard />
        <ReusableCard />
        <ReusableCard />
        <ReusableCard />
        <ReusableCard />
      </EventSection>
    </div>
  );
};

export default Bantuan;
