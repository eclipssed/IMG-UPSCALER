import React from "react";
import blurSectionInfoImg from "@/public/assets/blurSectionInfoImg.png";
import Image from "next/image";

const BlurImgInfoSection = () => {
  return (
    <section className="bg-primary text-white mt-36 py-16">
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-16">
        <div className="flex gap-8 flex-col  justify-center  ">
          <h2 className="text-2xl font-semibold">
            Wide Range of Image Effects to Use
          </h2>
          <p>
            Use image effects on your blurred image to make it more effective
            against a blurred background.Create graphics and include emojis on
            your blurred photo to make them stand out. Carve your designs and
            graphics into the viewers minds by highlighting their impact
            through photo blur. Use our plethora of image effects to complement
            your blur photo!
          </p>
        </div>
        <div className="mx-auto">
          <Image
            alt="image"
            src={blurSectionInfoImg}
            width={522}
            height={388}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BlurImgInfoSection;
