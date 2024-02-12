import BlurImgCardsSection from "@/src/components/BlurImgPageComponents/BlurImgCardsSection";
import BlurImgDetailsSection from "@/src/components/BlurImgPageComponents/BlurImgDetailsSection";
import BlurImgInfoSection from "@/src/components/BlurImgPageComponents/BlurImgInfoSection";
import BlurImgSampleSection from "@/src/components/BlurImgPageComponents/BlurImgSampleSection";
import BlurImgUploadSection from "@/src/components/BlurImgPageComponents/BlurImgUploadSection";
import BlurImgVideoSection from "@/src/components/BlurImgPageComponents/BlurImgVideoSection";
import React from "react";

const BlurScreenPage = () => {
  return (
    <section className="mt-32">
      <BlurImgUploadSection />
      <BlurImgInfoSection />
      <BlurImgDetailsSection />
      <BlurImgCardsSection />
      <BlurImgVideoSection />
      <BlurImgSampleSection />
    </section>
  );
};

export default BlurScreenPage;
