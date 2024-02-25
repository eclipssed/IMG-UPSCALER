import Image from "next/image";
import React from "react";
import testimonialsBg from "@/public/assets/testimonialsBg.png";
import colorizeSectionSampleImg1 from "@/public/assets/colorizeSectionSampleImg1.png";
import colorizeSectionSampleImg2 from "@/public/assets/colorizeSectionSampleImg2.png";
import colorizeSectionSampleImg3 from "@/public/assets/colorizeSectionSampleImg3.png";
import colorizeSectionSampleImg4 from "@/public/assets/colorizeSectionSampleImg4.png";
import colorizeSectionSampleImg5 from "@/public/assets/colorizeSectionSampleImg5.png";
import colorizeSectionSampleImg6 from "@/public/assets/colorizeSectionSampleImg6.png";

const ColorizeImgSampleSection = () => {
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
            Fully Automated Colorize Samples
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <Image
            className="mx-auto"
            src={colorizeSectionSampleImg1}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={colorizeSectionSampleImg2}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={colorizeSectionSampleImg3}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={colorizeSectionSampleImg4}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={colorizeSectionSampleImg5}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={colorizeSectionSampleImg6}
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

export default ColorizeImgSampleSection;
