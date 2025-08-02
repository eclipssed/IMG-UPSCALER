import ColorizeImgCardsSection from "@/src/components/ColorizeImgPageComponents/ColorizeImgCardsSection";
import ColorizeImgDetailsSection from "@/src/components/ColorizeImgPageComponents/ColorizeImgDetailsSection";
import ColorizeImgInfoSection from "@/src/components/ColorizeImgPageComponents/ColorizeImgInfoSection";
import ColorizeImgSampleSection from "@/src/components/ColorizeImgPageComponents/ColorizeImgSampleSection";
import ColorizeImgUploadSection from "@/src/components/ColorizeImgPageComponents/ColorizeImgUploadSection";
import ColorizeImgVideoSection from "@/src/components/ColorizeImgPageComponents/ColorizeImgVideoSection";
import React from "react";

const ColorizeScreenPage = () => {
  return (
    <section className="mt-32">
      <ColorizeImgUploadSection />
   
      <ColorizeImgInfoSection />
      <ColorizeImgDetailsSection />
      <ColorizeImgCardsSection />
      <ColorizeImgVideoSection />
      <ColorizeImgSampleSection />
    </section>
  );
};

export default ColorizeScreenPage;
