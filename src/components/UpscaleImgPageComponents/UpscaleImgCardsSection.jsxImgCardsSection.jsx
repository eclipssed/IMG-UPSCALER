import React from "react";
import UpscaleImgCard from "./UpscaleImgCard";
import colorizeImgCardIcon1 from "@/public/assets/colorizeImgCardIcon1.png";
import colorizeImgCardIcon2 from "@/public/assets/colorizeImgCardIcon2.png";
import colorizeImgCardIcon3 from "@/public/assets/colorizeImgCardIcon3.png";
import colorizeImgCardIcon4 from "@/public/assets/colorizeImgCardIcon4.png";
import colorizeImgCardIcon5 from "@/public/assets/colorizeImgCardIcon5.png";
import colorizeImgCardIcon6 from "@/public/assets/colorizeImgCardIcon6.png";

const CardsData = [
  {
    icon: colorizeImgCardIcon1,
    title: "Unlimited Use",
    description:
      "Img Upscaler is the only AI based upscaler that lets you upscale, Colorize, Blur and background remove an unlimited number of photos",
  },
  {
    icon: colorizeImgCardIcon2,
    title: "On Device Coloring",
    description:
      "We have designed Img Upscaler  to protect your privacy and give you control over your photos.",
  },
  {
    icon: colorizeImgCardIcon3,
    title: "Smart Compression",
    description:
      "Img Upscaler makes it possible to compress & download upscaled full HD images of any file size at any time",
  },
  {
    icon: colorizeImgCardIcon4,
    title: "Print grade",
    description:
      "Img Upscaler produces a high resolution print file that allowing you to create crisp print every time",
  },
  {
    icon: colorizeImgCardIcon5,
    title: "Custom Size",
    description:
      "Img Upscaler allows you to specify a particular width or height or define fixed image  dimensions",
  },
  {
    icon: colorizeImgCardIcon6,
    title: "Bulk Processing",
    description:
      "Edit photos from a single folder or multiple folders to a batch of images for processing at the same time",
  },
];

const UpscaleImgCardsSection = () => {
  return (
    <section className="wrapper mt-36">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <h2 className="text-xl font-semibold">
            The best Colorizing yet, Waiting for you
          </h2>
          <p>
            We pioneered the concept of unlimited image Coloring and price
            transparency worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {CardsData.map((card, index) => (
            <UpscaleImgCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpscaleImgCardsSection;
