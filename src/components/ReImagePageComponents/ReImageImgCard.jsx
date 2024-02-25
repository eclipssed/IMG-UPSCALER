import Image from "next/image";
import React from "react";

const ReImageImgCard = ({ icon, title, description }) => {
  return (
    <div className="p-4 shadow-lg flex flex-col gap-4">
      <Image src={icon} height={30} width={30} alt="icon" className="mx-auto" />
      <h3 className="text-lg font-semibold mx-auto">{title}</h3>
      <p className="mx-auto">{description}</p>
    </div>
  );
};

export default ReImageImgCard;
