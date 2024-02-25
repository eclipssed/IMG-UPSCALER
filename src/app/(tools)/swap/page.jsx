import SwapImgCardsSection from "@/src/components/SwapImgPageComponents/SwapImgCardsSection";
import SwapImgDetailsSection from "@/src/components/SwapImgPageComponents/SwapImgDetailsSection";
import SwapImgInfoSection from "@/src/components/SwapImgPageComponents/SwapImgInfoSection";
import SwapImgSampleSection from "@/src/components/SwapImgPageComponents/SwapImgSampleSection";
import SwapImgUploadSection from "@/src/components/SwapImgPageComponents/SwapImgUploadSection";
import SwapImgVideoSection from "@/src/components/SwapImgPageComponents/SwapImgVideoSection";
import React from "react";

const SwapPage = () => {
  return (
    <section className="mt-32">
      <SwapImgUploadSection />
      <SwapImgInfoSection />
      <SwapImgDetailsSection />
      <SwapImgCardsSection />
      <SwapImgVideoSection />
      <SwapImgSampleSection />
    </section>
  );
};

export default SwapPage;
