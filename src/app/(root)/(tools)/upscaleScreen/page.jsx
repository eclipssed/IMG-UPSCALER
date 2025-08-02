import UpscaleImgCardsSection from "@/src/components/UpscaleImgPageComponents/UpscaleImgCardsSection.jsxImgCardsSection";
import UpscaleImgDetailsSection from "@/src/components/UpscaleImgPageComponents/UpscaleImgDetailsSection";
import UpscaleImgInfoSection from "@/src/components/UpscaleImgPageComponents/UpscaleImgInfoSection";
import UpscaleImgSampleSection from "@/src/components/UpscaleImgPageComponents/UpscaleImgSampleSection";
import UpscaleImgUploadSection from "@/src/components/UpscaleImgPageComponents/UpscaleImgUploadSection";
import UpscaleImgVideoSection from "@/src/components/UpscaleImgPageComponents/UpscaleImgVideoSection";
import React from "react";

const UpscaleScreenPage = () => {
  return (
    <section className="mt-32">
      <UpscaleImgUploadSection />
      <UpscaleImgInfoSection />
      <UpscaleImgDetailsSection />
      <UpscaleImgCardsSection />
      <UpscaleImgVideoSection />
      <UpscaleImgSampleSection />
    </section>
  );
};

export default UpscaleScreenPage;
