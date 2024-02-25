import Image from "next/image";
import React from "react";
import testimonialsBg from "@/public/assets/testimonialsBg.png";
import upscaleSectionSampleImg1 from "@/public/assets/upscaleSectionSampleImg1.png";
import upscaleSectionSampleImg2 from "@/public/assets/upscaleSectionSampleImg2.png";
import upscaleSectionSampleImg3 from "@/public/assets/upscaleSectionSampleImg3.png";
import upscaleSectionSampleImg4 from "@/public/assets/upscaleSectionSampleImg4.png";
import upscaleSectionSampleImg5 from "@/public/assets/upscaleSectionSampleImg5.png";
import upscaleSectionSampleImg6 from "@/public/assets/upscaleSectionSampleImg6.png";

const UpscaleImgSampleSection = () => {
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
            src={upscaleSectionSampleImg1}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={upscaleSectionSampleImg2}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={upscaleSectionSampleImg3}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={upscaleSectionSampleImg4}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={upscaleSectionSampleImg5}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={upscaleSectionSampleImg6}
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

export default UpscaleImgSampleSection;
