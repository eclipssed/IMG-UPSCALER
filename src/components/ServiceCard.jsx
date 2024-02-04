import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ img1, img2, title, description, btnTitle }) => {
  return (
    <div className="flex flex-col shadow-xl rounded-lg bg-white">
      <div className="flex rounded-lg">
        <div className="relative h-52 w-full rounded-lg">
          <Image
            className="rounded-tl-lg"
            src={img1}
            alt="Sunset"
            layout="fill"
            quality={100}
          />
        </div>
        <div className="relative h-52 w-full">
          <Image
            className="rounded-tr-lg"
            src={img2}
            alt="Sunset"
            layout="fill"
            quality={100}
          />
        </div>
      </div>
      <div className="p-4 flex gap-4 flex-col">
        <div className="flex gap-2 flex-col">
          <h3 className="font-semibold">{title}</h3>
          <p className="line-clamp-3">{description}</p>
        </div>
        <div>
          <button className="btn flex justify-between w-full items-center">
            {btnTitle}
            <span>
              <FaArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;