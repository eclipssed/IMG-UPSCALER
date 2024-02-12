import Image from "next/image";
import React from "react";
import blurSectionHeroImg from "@/public/assets/blurSectionHeroImg.png";
import colorizeSectionUploadImg1 from "@/public/assets/colorizeSectionUploadImg1.png";
import colorizeSectionUploadImg3 from "@/public/assets/colorizeSectionUploadImg3.png";
import colorizeSectionUploadImg2 from "@/public/assets/colorizeSectionUploadImg2.png";
import { FaImage } from "react-icons/fa";

const BlurImgUploadSection = () => {
  return (
    <section className="wrapper">
      <div className="text-center my-8 ">
        <h2 className="text-2xl font-semibold">
          One-Click Blur Image or Background Instantly with img Ai{" "}
        </h2>
        <p>Want to grab your audience’s attention quickly? Blur your image</p>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row justify-center items-center  h-[600px] ">
        {/* image upload card */}
        <div className=" flex flex-col items-center justify-center lg:w-1/2 lg:h-full h-1/2  ">
          <div className="border-2 py-16 px-8 border-black border-dashed h-[200px] rounded-lg  text-center">
            <div className="mb-2 ">
              <label className="btn cursor-pointer flex justify-center items-center gap-2">
                <FaImage />
                <input type="file" className="hidden" />
                <span>Open Image</span>
              </label>
            </div>
            <p>Drag and drop you image here to Colorize </p>
          </div>
          <div className="flex gap-4 my-4">
            <p>
              No images? try <br />
              one of these.
            </p>
            <div className="flex flex-wrap gap-2">
              <Image
                src={colorizeSectionUploadImg1}
                height={60}
                width={60}
                alt="colorize image"
                className="object-contain"
              />
              <Image
                src={colorizeSectionUploadImg2}
                height={60}
                width={60}
                alt="colorize image"
                className="object-contain"
              />
              <Image
                src={colorizeSectionUploadImg3}
                height={60}
                width={60}
                alt="colorize image"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        {/* hero image */}
        <div className="relative w-full lg:w-1/2 lg:h-full h-1/2  ">
          <Image
            src={blurSectionHeroImg}
            fill
            alt="colorize image"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BlurImgUploadSection;
