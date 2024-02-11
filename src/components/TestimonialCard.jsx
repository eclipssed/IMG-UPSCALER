import Image from "next/image";
import React from "react";

let style = "";

const TestimonialCard = ({ img, title, description, count }) => {
  if (count === 0) {
    style = "rotate-[4deg] my-8";
  } else if (count === 1) {
    style = "-rotate-[4deg] my-8 ";
  } else if (count === 2) {
    style = "-rotate-[4deg] my-8 ";
  } else if (count === 3) {
    style = "rotate-[4deg] my-8 ";
  }
  return (
    <div
      className={` p-4 max-md:rotate-0 flex justify-start gap-4 max-w-[686px] border-2 border-dashed border-primary rounded-lg ${style}
      `}
    >
      <div className="h-[120px] w-[120px] rounded-full">
        <Image height={600} width={600} src={img} alt="chooseUsImg1" />
      </div>
      <div className="text-start space-y-4 line-clamp-3">
        <h4 className="font-semibold">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
