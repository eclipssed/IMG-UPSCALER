import BGRemoveImgCardsSection from "@/src/components/BGRemovePageComponents/BGRemoveImgCardsSection";
import BGRemoveImgDetailsSection from "@/src/components/BGRemovePageComponents/BGRemoveImgDetailsSection";
import BGRemoveImgInfoSection from "@/src/components/BGRemovePageComponents/BGRemoveImgInfoSection";
import BGRemoveImgSampleSection from "@/src/components/BGRemovePageComponents/BGRemoveImgSampleSection";
import BGRemoveImgUploadSection from "@/src/components/BGRemovePageComponents/BGRemoveImgUploadSection";
import BGRemoveImgVideoSection from "@/src/components/BGRemovePageComponents/BGRemoveImgVideoSection";
import ImgDownload from "@/src/components/ImgDownload";
import React from "react";

const BackgroundRemoveScreenPage = () => {
  return (
    <section className="mt-32">
      <BGRemoveImgUploadSection />
     
      <BGRemoveImgInfoSection />
      <BGRemoveImgDetailsSection />
      <BGRemoveImgCardsSection />
      <BGRemoveImgVideoSection />
      <BGRemoveImgSampleSection />
    </section>
  );
};

export default BackgroundRemoveScreenPage;
