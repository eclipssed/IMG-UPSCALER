import Image from "next/image";
import React from "react";
import heroBeforeImg from "@/public/assets/heroBeforeImg.png";
import heroAfterImg from "@/public/assets/heroAfterImg.png";

const BGRemoveImgSection = () => {
  return (
    <section className="wrapper grid grid-cols-1 lg:grid-cols-2  my-32 gap-28">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Colorize Black and White Photos <br /> Online with IMG-AI Colorizer
        </h2>
        <p>
          Colorize photo online in 5 seconds with Img Upscale Photo Colorizer.
          And turn any black and white photos to color using deep learning. With
          our image colorizer, you can colorize old pictures of family, historic
          figures, ancestors, films, and more. Fix yellow tint of vintage photos
          automatically with our new color correction feature. Enhance face and
          more details in old photos automatically with our customizable AI
          features.
        </p>
      </div>
      <div className="flex ">
        <div className="relative -mb-20 left-20 z-10">
          <p className="btn absolute -left-4">Before</p>

          <Image
            src={heroBeforeImg}
            alt="heroBeforeImg"
            height={345}
            width={433}
          />
        </div>
        <div className="relative -mt-20 right-20 ">
          <p className="btn absolute right-0">After</p>
          <Image
            src={heroAfterImg}
            alt="heroBeforeImg"
            height={345}
            width={433}
          />
        </div>
      </div>
    </section>
  );
};

export default BGRemoveImgSection;
