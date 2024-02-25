import Image from "next/image";
import React from "react";
import bgRemoveSectionImg1 from "@/public/assets/bgRemoveSectionImg1.png";
import bgRemoveSectionImg2 from "@/public/assets/bgRemoveSectionImg2.png";

const UpscaleImgSection = () => {
  return (
    <section className="mt-36 text-black">
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <Image
          src={bgRemoveSectionImg1}
          height={384}
          width={491.65}
          alt="bgRemoveSectionImg1"
        />
        <div className="space-y-4 lg:max-w-[376px] lg:ml-auto">
          <h2 className="text-2xl font-semibold">
            Fade Away Unnecessary Elements into the Background
          </h2>
          <p>
            A blurred background emphasizes the main subject of your photo.
            Soften the edges of the objects to give them a more mysterious,
            brief look. Create a sense of speed and dynamics with image
            blurring. Utilize all the advantages of photo blur in your image
            with Pixelied’s easy-to-use photo editor. Help your audience cut to
            the chase.
          </p>
        </div>
      </div>
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 mt-36 items-center">
        <div className="space-y-4 lg:max-w-[376px] ">
          <h2 className="text-2xl font-semibold">
            Make Backgrounds Transparent for Any Image
          </h2>
          <p>
            Our powerful image background remover can work with almost any type
            of image- portraits, animals, jewelry, cars, real estate, icons,
            text, signatures, and even graphics. Try Fotor out now to generate
            transparent backgrounds for your images with stunning edge detail
            and download them in high-resolution PNG files instantly and
            effortlessly.
          </p>
        </div>
        <div className="">
          <Image
            src={bgRemoveSectionImg2}
            height={399.89}
            width={691.29}
            alt="upscaleSectionSmallImg"
          />
        </div>
      </div>
    </section>
  );
};

export default UpscaleImgSection;
