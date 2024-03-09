"use client";

import Image from "next/image";
import React, { useState } from "react";
import bgRemoveSectionHeroImg from "@/public/assets/bgRemoveSectionHeroImg.png";
import colorizeSectionUploadImg1 from "@/public/assets/colorizeSectionUploadImg1.png";
import colorizeSectionUploadImg3 from "@/public/assets/colorizeSectionUploadImg3.png";
import colorizeSectionUploadImg2 from "@/public/assets/colorizeSectionUploadImg2.png";
import { FaImage } from "react-icons/fa";
import ImgDownload from "../ImgDownload";

const BGRemoveImgUploadSection = () => {
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const bgRemoveApi = "https://clipdrop-api.co/remove-background/v1";

  const handleChange = async (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result;
      setPreviewImage(result);
    };
  };
  return (
    <section className="wrapper">
      <div className="text-center my-8 ">
        <h2 className="text-2xl font-semibold">
          Fully Automated Background Remover with img upscaler{" "}
        </h2>
        <p>
          Instantly get transparent background image in almost no time. Fully
          automated and free.
        </p>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row justify-center items-center  h-[600px] ">
        {/* image upload card */}
        <div className=" flex flex-col items-center justify-center lg:w-1/2 lg:h-full h-1/2  ">
          <div className="border-2 py-16 px-8 border-black border-dashed h-[200px] rounded-lg  text-center">
            <div className="mb-2 ">
              <label className="btn cursor-pointer flex justify-center items-center gap-2">
                <FaImage />
                <input type="file" onChange={handleChange} className="hidden" />
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
            src={bgRemoveSectionHeroImg}
            fill
            alt="colorize image"
            className="object-contain"
          />
        </div>
      </div>
      <ImgDownload
        api={bgRemoveApi}
        action={"Remove Background"}
        propImage={image}
        previewImage={previewImage}
      />
    </section>
  );
};

export default BGRemoveImgUploadSection;
