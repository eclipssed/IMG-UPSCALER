import Image from "next/image";
import React from "react";
import colorizeSectionVideoImg from "@/public/assets/colorizeSectionVideoImg.png";
import colorizeImgVideoIcon from "@/public/assets/colorizeImgVideoIcon.png";

const BlurImgVideoSection = () => {
  return (
    <section className="text-white bg-primary my-8 py-16">
      <div className="wrapper flex flex-col gap-4 text-center">
        <h3 className="text-xl font-semibold">
          Interested how our upscalerworks for you? <br /> Watch our 1 minute
          video
        </h3>
        <div className="relative ">
          <Image
            src={colorizeImgVideoIcon}
            height={22}
            width={19}
            alt="image"
            className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
          <Image
            src={colorizeSectionVideoImg}
            height={517}
            width={1320}
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};

export default BlurImgVideoSection;
