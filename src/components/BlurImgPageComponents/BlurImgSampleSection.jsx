import Image from "next/image";
import React from "react";
import testimonialsBg from "@/public/assets/testimonialsBg.png";
import blurSectionSampleImg1 from "@/public/assets/blurSectionSampleImg1.png";
import blurSectionSampleImg2 from "@/public/assets/blurSectionSampleImg2.png";
import blurSectionSampleImg3 from "@/public/assets/blurSectionSampleImg3.png";
import blurSectionSampleImg4 from "@/public/assets/blurSectionSampleImg4.png";
import blurSectionSampleImg5 from "@/public/assets/blurSectionSampleImg5.png";
import blurSectionSampleImg6 from "@/public/assets/blurSectionSampleImg6.png";

const BlurImgSampleSection = () => {
  return (
    <section className="text-center relative mt-36 py-8 flex flex-col gap-4">
      <Image
        src={testimonialsBg}
        alt="image"
        fill
        className="object-contain -z-10"
      />
      <div className="wrapper text-center">
        <div>
          <h3 className="text-xl font-semibold">
            Fully Automated Blur Samples
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <Image
            className="mx-auto"
            src={blurSectionSampleImg1}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={blurSectionSampleImg2}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={blurSectionSampleImg3}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={blurSectionSampleImg4}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={blurSectionSampleImg5}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={blurSectionSampleImg6}
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

export default BlurImgSampleSection;
