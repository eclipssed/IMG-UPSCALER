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
import heroBeforeImg from "@/public/assets/heroBeforeImg.png";
import heroAfterImg from "@/public/assets/heroAfterImg.png";
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
    <section className=" relative py-16">
      <Image
        className="absolute -mt-16"
        src={heroBanner}
        height={200}
        width={2000}
        alt="heroBanner"
      />
      <div className="wrapper flex flex-col justify-center items-center">
        <div className="text-center text-white z-10 space-y-3">
          <p className="text-xl">Img Upscaler</p>
          <h2 className="font-semibold text-2xl">
            Best AI Technology Platform <br /> to restore Old Photos for free{" "}
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative gap-4">
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
      <div className="wrapper grid grid-cols-2  my-32 gap-28">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Colorize Black and White Photos <br /> Online with IMG-AI Colorizer
          </h2>
          <p>
            Colorize photo online in 5 seconds with Img Upscale Photo Colorizer.
            And turn any black and white photos to color using deep learning.
            With our image colorizer, you can colorize old pictures of family,
            historic figures, ancestors, films, and more. Fix yellow tint of
            vintage photos automatically with our new color correction feature.
            Enhance face and more details in old photos automatically with our
            customizable AI features.
          </p>
        </div>
        <div className="flex mt-16 ">
          <div className="relative -mb-20 left-20 z-10">
            <p className="btn absolute -left-4">Before</p>

            <Image
              className="h-full w-full"
              src={heroBeforeImg}
              alt="heroBeforeImg"
              //   fill
              //   layout="fill"
              //   quality={100}
            />
          </div>
          <div className="relative -mt-20 right-20 ">
            <p className="btn absolute right-0">After</p>
            <Image
              className="h-full w-full"
              src={heroAfterImg}
              alt="heroBeforeImg"
              //   fill
              //   layout="fill"
              //   quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
