import React from "react";
import ServiceCard from "./ServiceCard";
import colorizeImg1 from "@/public/assets/colorizeImg1.png";
import colorizeImg2 from "@/public/assets/colorizeImg2.png";
import upscaleImg1 from "@/public/assets/upscaleImg1.png";
import upscaleImg2 from "@/public/assets/upscaleImg2.png";
import removeBgImg1 from "@/public/assets/removeBgImg1.png";
import removeBgImg2 from "@/public/assets/removeBgImg2.png";
import blurBgImg1 from "@/public/assets/blurBgImg1.png";
import blurBgImg2 from "@/public/assets/blurBgImg2.png";
import heroBanner from "@/public/assets/heroBanner.png";

import Image from "next/image";

const servicesCardArray = [
  {
    img1: colorizeImg1,
    img2: colorizeImg2,
    title: "Image Colorize",
    description:
      "Colorize black and white pictures automatically and for free.Bring old family photos back to life with a touch of color",
    btnTitle: "Colorize Photo Now",
  },
  {
    img1: upscaleImg1,
    img2: upscaleImg2,
    title: "Image Upscale",
    description:
      "Fix blurry and low-quality old pictures and bring it to clarity. it easy to upscale and enlarge your images with just a few clicks.",
    btnTitle: "Upscale Photo Now",
  },
  {
    img1: removeBgImg1,
    img2: removeBgImg2,
    title: "Image Background Remove",
    description:
      "Say goodbye to expensive and complicated software you can remove backgrounds in your images in seconds",
    btnTitle: "Remove Background Now",
  },
  {
    img1: blurBgImg1,
    img2: blurBgImg2,
    title: "Image Background Blur",
    description:
      "Fix blurry and low-quality old pictures and bring it to clarity. it easy to upscale and enlarge your images with just a few clicks.",
    btnTitle: "Photo BG Blur Now",
  },
];

const HeroSection = () => {
  return (
    <section className="relative mt-16  w-full">
      <Image
        className="absolute"
        src={heroBanner}
        alt="heroBanner"
        height={5000}
        width={3000}
      />

      <div className="wrapper flex flex-col justify-center items-center py-16">
        <div className="text-center text-white max-md:text-black z-10 space-y-3">
          <p className="text-xl">Img Upscaler</p>
          <h2 className="font-semibold text-2xl">
            Best AI Technology Platform <br /> to restore Old Photos for free{" "}
          </h2>
        </div>
        <div className="mt-8 flex flex-wrap justify-center items-center relative gap-4">
          {servicesCardArray.map((service) => (
            <ServiceCard
              btnTitle={service.btnTitle}
              img1={service.img1}
              img2={service.img2}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
