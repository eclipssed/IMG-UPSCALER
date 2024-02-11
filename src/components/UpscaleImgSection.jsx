import Image from "next/image";
import React from "react";
import upscaleSectionSmallImg from "@/public/assets/upscaleSectionSmallImg.png";
import upscaleSectionMediumImg from "@/public/assets/upscaleSectionMediumImg.png";
import upscaleSectionLargeImg from "@/public/assets/upscaleSectionLargeImg.png";

const UpscaleImgSection = () => {
  return (
    <section className="bg-primary py-16 my-16 text-white">
      <div className="wrapper flex lg:justify-between gap-8 flex-col lg:flex-row justify-center items-center  ">
        <div className="space-y-4 lg:max-w-[500px]  w-full">
          <h2 className="text-2xl font-semibold">Upscale images online</h2>
          <p>
            Ever taken a photo you loved, only to notice it’s too blurry to use
            online? Our photo enhancer makes it easy to upscale and enlarge your
            images with just a few clicks. Thanks to the artificial
            intelligence-powered smart upscaler, you can put your photos to work
            without losing quality. Put your website or online store’s best foot
            forward with sharp and super-resolution images that keep visitors
            engaged for longer.
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 ">
          <Image
            height={200}
            width={150}
            src={upscaleSectionSmallImg}
            alt="upscaleSectionSmallImg"
          />
          <Image
            className=""
            src={upscaleSectionMediumImg}
            height={300}
            width={250}
            alt="upscaleSectionMediumImg"
          />
          <Image
            className=""
            src={upscaleSectionLargeImg}
            height={400}
            width={350}
            alt="upscaleSectionLargeImg"
          />
        </div>
      </div>
    </section>
  );
};

export default UpscaleImgSection;
