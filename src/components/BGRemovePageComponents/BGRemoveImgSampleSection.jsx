import Image from "next/image";
import React from "react";
import testimonialsBg from "@/public/assets/testimonialsBg.png";
import bgRemoveSectionSampleImg1 from "@/public/assets/bgRemoveSectionSampleImg1.png";
import bgRemoveSectionSampleImg2 from "@/public/assets/bgRemoveSectionSampleImg2.png";
import bgRemoveSectionSampleImg3 from "@/public/assets/bgRemoveSectionSampleImg3.png";
import bgRemoveSectionSampleImg4 from "@/public/assets/bgRemoveSectionSampleImg4.png";
import bgRemoveSectionSampleImg5 from "@/public/assets/bgRemoveSectionSampleImg5.png";
import bgRemoveSectionSampleImg6 from "@/public/assets/bgRemoveSectionSampleImg6.png";

const BGRemoveImgSampleSection = () => {
  return (
    <section className="   text-center relative my-8 py-8 flex flex-col gap-4">
      <Image
        src={testimonialsBg}
        alt="image"
        fill
        className="object-contain -z-10"
      />
      <div className="wrapper text-center">
        <div>
          <h3 className="text-xl font-semibold">
            Fully Automated Background Removed Samples
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <Image
            className="mx-auto"
            src={bgRemoveSectionSampleImg1}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={bgRemoveSectionSampleImg2}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={bgRemoveSectionSampleImg3}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={bgRemoveSectionSampleImg4}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={bgRemoveSectionSampleImg5}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={bgRemoveSectionSampleImg6}
            alt="image"
            width={359}
            height={350}
          />
          ;
        </div>
      </div>
    </section>
  );
};

export default BGRemoveImgSampleSection;
