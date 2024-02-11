import Image from "next/image";
import React from "react";
import upscaleSectionSmallImg from "@/public/assets/upscaleSectionSmallImg.png";
import upscaleSectionMediumImg from "@/public/assets/upscaleSectionMediumImg.png";
import upscaleSectionLargeImg from "@/public/assets/upscaleSectionLargeImg.png";
import chooseUsImg1 from "@/public/assets/chooseUsImg1.png";
import chooseUsImg2 from "@/public/assets/chooseUsImg2.png";
import chooseUsImg3 from "@/public/assets/chooseUsImg3.png";
import chooseUsImg4 from "@/public/assets/chooseUsImg4.png";
import testimonialsBg from "@/public/assets/testimonialsBg.png";

import ChooseUsCard from "./ChooseUsCard";
import TestimonialCard from "./TestimonialCard";

const chooseUsDataArray = [
  {
    img: chooseUsImg1,
    title: "Image Colorizer",
    description:
      "Image Colorizer is our basic AI feature that could add color to black and white pictures naturally.Our AI Photo Colorizer uses AI colourise technology and deep learning to add consistent and natural color to your old photos. ",
  },
  {
    img: chooseUsImg2,
    title: "Image Upscale",
    description:
      "AI image upscaler can be really helpful to enhance the photo details.By upscaling, the pixels from the lower resolution image would be copied and repeated to fill out all the pixels of the higher resolution display.",
  },
  {
    img: chooseUsImg3,
    title: "Image Background Remove",
    description:
      "If you remove the background, add it on some beautiful scenes, backgrounds and make it more supper cool with Fotor's image background remover. You can get more clients soon with an amazing car banner.",
  },
  {
    img: chooseUsImg4,
    title: "Image Background Blur ",
    description:
      "Create a dream­like effect using our professional quality blur image tool. With a few quick and easy clicks of the mouse, you can use it to blur images, soften your photos and create a mysterious and alluring atmosphere in your photography ",
  },
];

// let count = 1;

const TestimonialsSection = () => {
  return (
    <section className="wrapper py-8 my-16 text-black ">
      <div className="flex flex-col gap-16 text-center">
        <div className="space-y-4 col-span-5">
          <p className="font-semibold">Testimonials</p>
          <h2 className="text-2xl font-bold">
            From startups to established brands, <br /> you'll be in good
            company.
          </h2>
        </div>
        <div className="flex relative flex-col md:flex-row flex-wrap gap-4 mx-auto items-center justify-center">
          {chooseUsDataArray.map((option, index) => (
            <TestimonialCard
              img={option.img}
              title={option.title}
              description={option.description}
              count={index}
            />
          ))}
          <Image
            className="absolute mx-auto"
            src={testimonialsBg}
            height={853}
            width={1386}
            alt="heroBanner"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
