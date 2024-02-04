import Image from "next/image";
import React from "react";
import sunset from "../../public/sunset.jpg";
import { FaArrowRight } from "react-icons/fa";

const styling = {
  backgroundImage: `url('${sunset}')`,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
};

const ServiceCard = () => {
  return (
    <div className="flex flex-col border-2 shadow-xl ">
      <div className="flex">
        <div className="relative h-52 w-full">
          <Image src={sunset} alt="Sunset" layout="fill" quality={100} />
        </div>
        <div className="relative h-52 w-full">
          <Image src={sunset} alt="Sunset" layout="fill" quality={100} />
        </div>
      </div>
      <div className="p-4 flex gap-4 flex-col relative">
        <div className="flex gap-2 flex-col">
          <h3 className="font-semibold">Image Colorize</h3>
          <p>
            Colorize black and white pictures automatically and for free.Bring
            old family photos back to life with a touch of color
          </p>
        </div>
        <div>
          <button className="py-2 px-4 bg-primary flex justify-between w-full rounded-lg">
            Colorize Photo Now <span>Arrow Right</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
