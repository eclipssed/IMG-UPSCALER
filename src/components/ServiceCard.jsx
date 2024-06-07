import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import serviceCardImgSeparationLine from "@/public/assets/serviceCardImgSeparationLine.png";
import Link from "next/link";

const ServiceCard = ({ img1, img2, title, description, btnTitle, link }) => {
  return (
    <div className="flex flex-col shadow-xl rounded-lg bg-white overflow-hidden max-w-[312px]">
      <div className="flex rounded-lg relative">
        <div className="relative h-52 w-full rounded-lg">
          <Image
            className="rounded-tl-lg"
            src={img1}
            alt="Sunset"
            fill
            sizes=""
            quality={100}
          />
        </div>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10">
          <Image
            className="rounded-tr-lg"
            src={serviceCardImgSeparationLine}
            alt="Sunset"
            quality={100}
          />
        </div>
        <div className="relative h-52 w-full">
          <Image
            className="rounded-tr-lg"
            src={img2}
            alt="Sunset"
            fill
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
          <Link href={link} className="flexibleBtn flex gap-4 transition-all duration-300 ease-in-out  w-full items-center group">
            {btnTitle}
            <span>
              <FaArrowRight className="h-4 w-4  transition-all duration-300 ease-in-out relative translate-x-0 group-hover:translate-x-12" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
