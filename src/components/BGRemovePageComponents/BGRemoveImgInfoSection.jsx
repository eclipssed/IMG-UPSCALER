import React from "react";
import bgRemoveSectionInfoImg from "@/public/assets/bgRemoveSectionInfoImg.png";
import Image from "next/image";

const BGRemoveImgInfoSection = () => {
  return (
    <section className="bg-primary text-white my-8 py-16">
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-16">
        <div className="flex gap-8 flex-col  justify-center  ">
          <h2 className="text-2xl font-semibold">
            Wide Range of Image Effects to Use
          </h2>
          <p>
            Easily replace the distracting background with solid background
            colors or use any other images as the background.Get a transparent
            image then easily yet effectively create stunning banners just in a
            matter of minutes.Instantly get transparent background image in
            almost no time. Fully automated and free.
          </p>
        </div>
        <div className="mx-auto">
          <Image
            alt="image"
            src={bgRemoveSectionInfoImg}
            width={522}
            height={388}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BGRemoveImgInfoSection;
