import React from "react";
import colorizeSectionInfoImg from "@/public/assets/colorizeSectionInfoImg.png";
import Image from "next/image";

const ColorizeImgInfoSection = () => {
  return (
    <section className="bg-primary text-white mt-36 py-16">
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-16">
        <div className="flex gap-8 flex-col  justify-center  ">
          <h2 className="text-2xl font-semibold">
            Wide Range of Image Effects to Use
          </h2>
          <p>
            Colorize photo online in 5 seconds with Img Upscale Colorizer. And
            turn any black and white photos to color using deep learning. With
            our image colorizer, you can colorize old pictures of family,
            historic figures, ancestors, films, and more. Fix yellow tint of
            vintage photos automatically with our new color correction feature.
            Enhance face and more details in old photos automatically with our
            customizable AI features.
          </p>
        </div>
        <div className="mx-auto">
          <Image
            alt="image"
            src={colorizeSectionInfoImg}
            width={522}
            height={388}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ColorizeImgInfoSection;
