import Image from "next/image";
import React from "react";
import testimonialsBg from "@/public/assets/testimonialsBg.png";
import swapSectionSampleImg1 from "@/public/assets/swapSectionSampleImg1.png";
import swapSectionSampleImg2 from "@/public/assets/swapSectionSampleImg2.png";
import swapSectionSampleImg3 from "@/public/assets/swapSectionSampleImg3.png";
import swapSectionSampleImg4 from "@/public/assets/swapSectionSampleImg4.png";
import swapSectionSampleImg5 from "@/public/assets/swapSectionSampleImg5.png";
import swapSectionSampleImg6 from "@/public/assets/swapSectionSampleImg6.png";

const SwapImgSampleSection = () => {
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
            src={swapSectionSampleImg1}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={swapSectionSampleImg2}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={swapSectionSampleImg3}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={swapSectionSampleImg4}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={swapSectionSampleImg5}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={swapSectionSampleImg6}
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

export default SwapImgSampleSection;
