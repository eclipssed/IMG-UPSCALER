import ReplaceBGImgCardsSection from "@/src/components/ReplaceBGPageComponents/ReplaceBGImgCardsSection";
import ReplaceBGImgDetailsSection from "@/src/components/ReplaceBGPageComponents/ReplaceBGImgDetailsSection";
import ReplaceBGImgInfoSection from "@/src/components/ReplaceBGPageComponents/ReplaceBGImgInfoSection";
import ReplaceBGImgSampleSection from "@/src/components/ReplaceBGPageComponents/ReplaceBGImgSampleSection";
import ReplaceBGImgUploadSection from "@/src/components/ReplaceBGPageComponents/ReplaceBGImgUploadSection";
import ReplaceBGImgVideoSection from "@/src/components/ReplaceBGPageComponents/ReplaceBGImgVideoSection";
import React from "react";

const ReplaceBackgroundPage = () => {
  return (
    <section className="mt-32">
      <ReplaceBGImgUploadSection />
     
      <ReplaceBGImgInfoSection />
      <ReplaceBGImgDetailsSection />
      <ReplaceBGImgCardsSection />
      <ReplaceBGImgVideoSection />
      <ReplaceBGImgSampleSection />
    </section>
  );
};

export default ReplaceBackgroundPage;
