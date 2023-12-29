import React from "react";
import HeroBantuan from "./HeroBantuan";
import EventSection from "/src/components/EventSection";
import cvPoster from "/assets/images/bantuan-bg/poster-cv.jpg";
import interviewPoster from "/assets/images/bantuan-bg/poster-interview.jpg";
import workshopPoster from "/assets/images/bantuan-bg/workshop-hero.jpg";

const Bantuan = () => {
  return (
    <div>
      <HeroBantuan />
      <EventSection
        heading="INTERVIEW"
        subheading="Event yang akan datang"
        to="/bantuan/interview"
      >
        <img className="w-full" src={interviewPoster} alt="Poster Interview" />
      </EventSection>
      <EventSection
        heading="CV & SURAT LAMARAN"
        subheading="Event yang akan datang"
        to="/bantuan/cv"
      >
        <img className="w-full" src={cvPoster} alt="Poster CV" />
      </EventSection>
      <EventSection
        heading="WORKSHOP"
        subheading="Event yang akan datang"
        to="/bantuan/workshop"
      >
        <img className="w-full" src={workshopPoster} alt="Poster Workshop" />
      </EventSection>
    </div>
  );
};

export default Bantuan;
