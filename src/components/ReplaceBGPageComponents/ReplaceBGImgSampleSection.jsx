import Image from "next/image";
import React from "react";
import testimonialsBg from "@/public/assets/testimonialsBg.png";
import replaceBGSectionSampleImg1 from "@/public/assets/replaceBGSectionSampleImg1.png";
import replaceBGSectionSampleImg2 from "@/public/assets/replaceBGSectionSampleImg2.png";
import replaceBGSectionSampleImg3 from "@/public/assets/replaceBGSectionSampleImg3.png";
import replaceBGSectionSampleImg4 from "@/public/assets/replaceBGSectionSampleImg4.png";
import replaceBGSectionSampleImg5 from "@/public/assets/replaceBGSectionSampleImg5.png";
import replaceBGSectionSampleImg6 from "@/public/assets/replaceBGSectionSampleImg6.png";

const ReplaceBGImgSampleSection = () => {
  return (
    <section className="   text-center relative mt-36 flex flex-col gap-4">
      <Image
        src={testimonialsBg}
        alt="image"
        fill
        className="object-contain -z-10"
      />
      <div className="wrapper text-center">
        <div>
          <h3 className="text-xl font-semibold">
            Fully Automated Upscale Samples
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <Image
            className="mx-auto"
            src={replaceBGSectionSampleImg1}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={replaceBGSectionSampleImg2}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={replaceBGSectionSampleImg3}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={replaceBGSectionSampleImg4}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={replaceBGSectionSampleImg5}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={replaceBGSectionSampleImg6}
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

export default ReplaceBGImgSampleSection;
