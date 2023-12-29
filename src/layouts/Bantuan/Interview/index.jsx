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
    "https://placekitten.com/800/400",
    "https://placekitten.com/801/400",
    "https://placekitten.com/802/400",
  ];
  return (
    <div>
      <InterviewHero />
      <TipsSection heading="Tips Interview" images={images}></TipsSection>
    </div>
  );
}
