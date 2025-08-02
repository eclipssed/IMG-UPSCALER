

import ReImageImgCardsSection from "@/src/components/ReImagePageComponents/ReImageImgCardsSection";
import ReImageImgDetailsSection from "@/src/components/ReImagePageComponents/ReImageImgDetailsSection";
import ReImageImgInfoSection from "@/src/components/ReImagePageComponents/ReImageImgInfoSection";
import ReImageImgSampleSection from "@/src/components/ReImagePageComponents/ReImageImgSampleSection";
import ReImageImgUploadSection from "@/src/components/ReImagePageComponents/ReImageImgUploadSection";
import ReImageImgVideoSection from "@/src/components/ReImagePageComponents/ReImageImgVideoSection";
import React from "react";

const ReImagePage = () => {
  
  return (
    <section className="mt-32">
      <ReImageImgUploadSection />
      <ReImageImgInfoSection />
      <ReImageImgDetailsSection />
      <ReImageImgCardsSection />
      <ReImageImgVideoSection />
      <ReImageImgSampleSection />
    </section>
  );
};

export default ReImagePage;
