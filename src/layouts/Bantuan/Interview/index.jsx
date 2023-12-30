import React from "react";
import InterviewHero from "./InterviewHero";
import TipsSection from "../../../components/TipsSection";
import interviewPoster1 from "/assets/images/bantuan-bg/tips-interview-1.jpg";
import cvPoster1 from "/assets/images/bantuan-bg/tips-cv-1.jpg";

export default function Interview() {
  const images = [
    "/assets/images/bantuan-bg/tips-interview-1.jpg",
    "/assets/images/bantuan-bg/tips-interview-2.jpg",
    "/assets/images/bantuan-bg/tips-interview-3.jpg",
  ];
  return (
    <div>
      <InterviewHero />
      <TipsSection heading="Tips Interview" images={images}></TipsSection>
    </div>
  );
}
