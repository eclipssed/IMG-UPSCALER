import ColorizeImgCardsSection from "@/src/components/ColorizeImgSection/ColorizeImgCardsSection";
import ColorizeImgDetailsSection from "@/src/components/ColorizeImgSection/ColorizeImgDetailsSection";
import ColorizeImgInfoSection from "@/src/components/ColorizeImgSection/ColorizeImgInfoSection";
import ColorizeImgSampleSection from "@/src/components/ColorizeImgSection/ColorizeImgSampleSection";
import ColorizeImgUploadSection from "@/src/components/ColorizeImgSection/ColorizeImgUploadSection";
import ColorizeImgVideoSection from "@/src/components/ColorizeImgVideoSection";
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
