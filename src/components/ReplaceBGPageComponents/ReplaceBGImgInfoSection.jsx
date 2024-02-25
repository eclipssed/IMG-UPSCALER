import React from "react";
import replaceBGSectionInfoImg from "@/public/assets/replaceBGSectionInfoImg.png";
import Image from "next/image";

const ReplaceBGImgInfoSection = () => {
  return (
    <section className="bg-primary text-white mt-36 py-16">
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-16">
        <div className="flex gap-8 flex-col  justify-center  ">
          <h2 className="text-2xl font-semibold">
            Wide Range of Image Effects to Use
          </h2>
          <p>
            The Super Resolution uses machine learning to clarify, sharpen, and
            upscale the photo without losing its content and defining
            characteristics.Obtain high resolution with fully automated
            processing. Photo improvement has never been so easy.Upscale
            anything from oil paintings to digital art, from portraits to
            landscapes, from logos to product images.
          </p>
        </div>
        <div className="mx-auto">
          <Image
            alt="image"
            src={replaceBGSectionInfoImg}
            width={522}
            height={388}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ReplaceBGImgInfoSection;
