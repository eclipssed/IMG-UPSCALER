import Image from "next/image";
import React from "react";

const ChooseUsCard = ({ img, title, description }) => {
  return (
    <div className="p-4 flex justify-start gap-4 max-w-[636px] border border-white rounded-lg">
      <div className="h-[120px] w-[120px] rounded-full">
        <Image
          height={600}
          width={600}
          src={img}
          alt="chooseUsImg1"
        />
      </div>
      <div className="text-start space-y-4">
        <h4 className="font-semibold">{title}</h4>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ChooseUsCard;
