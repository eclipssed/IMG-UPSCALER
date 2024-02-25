"use client";

import ServiceCard from "./ServiceCard";
import colorizeImg1 from "@/public/assets/colorizeImg1.png";
import colorizeImg2 from "@/public/assets/colorizeImg2.png";
import upscaleImg1 from "@/public/assets/upscaleImg1.png";
import upscaleImg2 from "@/public/assets/upscaleImg2.png";
import removeBgImg1 from "@/public/assets/removeBgImg1.png";
import removeBgImg2 from "@/public/assets/removeBgImg2.png";
import blurBgImg1 from "@/public/assets/blurBgImg1.png";
import blurBgImg2 from "@/public/assets/blurBgImg2.png";
import textRemoveImg1 from "@/public/assets/textRemoveImg1.png";
import textRemoveImg2 from "@/public/assets/textRemoveImg2.png";
import replaceBackgroundImg1 from "@/public/assets/replaceBackgroundImg1.png";
import replaceBackgroundImg2 from "@/public/assets/replaceBackgroundImg2.png";
import reImg1 from "@/public/assets/reImg1.png";
import reImg2 from "@/public/assets/reImg2.png";
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
    btnTitle: "Remove BG Now",
  },
  {
    img1: blurBgImg1,
    img2: blurBgImg2,
    title: "Image BG Blur",
    description:
      "Fix blurry and low-quality old pictures and bring it to clarity. it easy to upscale and enlarge your images with just a few clicks.",
    btnTitle: "Photo BG Blur Now",
  },
  {
    img1: textRemoveImg1,
    img2: textRemoveImg2,
    title: "Text Remove",
    description:
      "Our cutting-edge Text Removal API lets you effortlessly remove text from images! Say goodbye to the tedious task of manually editing images, ",
    btnTitle: "Text Remove Now",
  },
  {
    img1: replaceBackgroundImg1,
    img2: replaceBackgroundImg2,
    title: "Background Replace",
    description:
      "We've combined our best-in-class Stable Diffusion implementation with some of our other internal models  to provide the best background replacement API.",
    btnTitle: "Replace BG Now",
  },
  {
    img1: reImg1,
    img2: reImg2,
    title: "Re-image",
    description:
      "Based on your input image, we leverage the latest Stable Diffusion tech to create an infinite number of variations to suit all your use cases!",
    btnTitle: "Re-Image Now",
  },
];

const HeroSection = () => {
  return (
    <section className=" mt-16  w-full ">
      <div className="h-[400px] relative w-full  ">
        <Image
          className="  object-cover"
          src={heroBanner}
          alt="heroBanner"
          fill
        />
      </div>

      <div className="wrapper -mt-[410px] flex flex-col justify-center items-center py-16">
        <div className="text-center text-white z-10 space-y-3">
          <p className="text-xl">Img Upscaler</p>
          <h2 className="font-semibold text-2xl">
            Best AI Technology Platform <br /> to restore Old Photos for free{" "}
          </h2>
        </div>

        <div
          className="w-full inline-flex flex-nowrap overflow-hidden space-x-4 z-10 "
          // className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] space-x-4 "
        >
          <ul
            className=" mt-8 gap-4 flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll  "
            aria-hidden="true"
          >
            {servicesCardArray.map((service, index) => (
              <ServiceCard
                key={index}
                btnTitle={service.btnTitle}
                img1={service.img1}
                img2={service.img2}
                title={service.title}
                description={service.description}
              />
            ))}
          </ul>
          <ul className="mt-8 gap-4 flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll  ">
            {servicesCardArray.map((service, index) => (
              <ServiceCard
                key={index}
                btnTitle={service.btnTitle}
                img1={service.img1}
                img2={service.img2}
                title={service.title}
                description={service.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
