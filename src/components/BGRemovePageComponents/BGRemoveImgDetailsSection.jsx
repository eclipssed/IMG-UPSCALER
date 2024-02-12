import Image from "next/image";
import bgRemoveSectionDetailImg1 from "@/public/assets/bgRemoveSectionDetailImg1.png";
import bgRemoveSectionDetailImg2 from "@/public/assets/bgRemoveSectionDetailImg2.png";
import bgRemoveSectionDetailImg3 from "@/public/assets/bgRemoveSectionDetailImg3.png";
import React from "react";

const BGRemoveImgDetailsSection = () => {
  return (
    <section className="border-2 border-t-primary border-b-primary border-dashed mt-32 mb-8">
      <div className="wrapper py-8">
        {/* 1 */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 my-16">
          <div className="mx-auto">
            <Image
              alt="img"
              src={bgRemoveSectionDetailImg1}
              height={483}
              width={530}
            />
          </div>
          <div className="flex flex-col gap-4  justify-center">
            <h2 className="text-2xl font-semibold">
              Easily Remove Backgrounds
            </h2>
            <p>
              Image-Ai saves the day when you quickly need to cut out a person
              or object to paste into another picture, or to remove the
              background from a photo. You don't need any specific skills or
              professional software for a perfect image clip. Just upload the
              image and our algorithm will automatically remove the background
              using deep neural networks. In the real world, some objects are
              transparent. And removing backgrounds from photos with such
              objects on them is pain. But with PhotoScissors you can
              effortlessly change one background to another thanks to the
              transparent marker tool that denotes areas that should retain both
              foreground and background textures.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 my-16">
          <div className="flex flex-col gap-4  justify-center">
            <h2 className="text-2xl font-semibold">
              Images best for automatic background removal
            </h2>
            <p>
              If you want to remove a background from an image it helps to
              choose a picture that has a distinct foreground. Images with a lot
              of detail or patterns are typically more difficult to process
              accurately. Photos containing people or solid objects generate
              fantastic results, for example a portrait image, or a product
              shot. Whether you want to remove image background for personal or
              professional purposes, the AI-powered background eraser tool
              provides great results with good image quality and saves your time
              to easily create stunning designs without Photoshop
            </p>
          </div>
          <div className="mx-auto">
            <Image
              alt="img"
              src={bgRemoveSectionDetailImg2}
              height={483}
              width={530}
            />
          </div>
        </div>

        {/* 3 */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 my-16">
          <div className="mx-auto">
            <Image
              alt="img"
              src={bgRemoveSectionDetailImg3}
              height={483}
              width={530}
            />
          </div>
          <div className="flex flex-col gap-4  justify-center">
            <h2 className="text-2xl font-semibold">
              Photo Background Remover is super easy
            </h2>
            <p>
              No need to hire a professional photographer or designer, have
              specific skills and learn design tools like Adobe Photoshop, or
              install advanced software for removing backgrounds Zero spendings:
              make backgrounds transparent or remove the background from an
              image with our remove background tool for free It will take just a
              few minutes: get ready pictures and images with a removed
              background in a couple of clicks. Get stylish and high-quality
              images and graphics in one click (PNG, JPG).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BGRemoveImgDetailsSection;
