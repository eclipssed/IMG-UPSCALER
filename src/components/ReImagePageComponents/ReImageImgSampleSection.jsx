import Image from "next/image";
import React from "react";
import testimonialsBg from "@/public/assets/testimonialsBg.png";
import reImageSectionSampleImg1 from "@/public/assets/reImageSectionSampleImg1.png";
import reImageSectionSampleImg2 from "@/public/assets/reImageSectionSampleImg2.png";
import reImageSectionSampleImg3 from "@/public/assets/reImageSectionSampleImg3.png";
import reImageSectionSampleImg4 from "@/public/assets/reImageSectionSampleImg4.png";
import reImageSectionSampleImg5 from "@/public/assets/reImageSectionSampleImg5.png";
import reImageSectionSampleImg6 from "@/public/assets/reImageSectionSampleImg6.png";

const ReImageImgSampleSection = () => {
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
            src={reImageSectionSampleImg1}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={reImageSectionSampleImg2}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={reImageSectionSampleImg3}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={reImageSectionSampleImg4}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={reImageSectionSampleImg5}
            alt="image"
            width={359}
            height={350}
          />
          <Image
            className="mx-auto"
            src={reImageSectionSampleImg6}
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

export default ReImageImgSampleSection;
