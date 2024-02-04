import React from "react";
import ServiceCard from "./ServiceCard";

const HeroSection = () => {
  return (
    <section className="bg-darkGray py-20">
      <div className="wrapper flex flex-col justify-center items-center">
        <div className="text-center space-y-3">
          <p className="font-semibold">Img Upscaler</p>
          <h2 className="font-semibold text-2xl">
            Best AI Technology Platform <br /> to restore Old Photos for free{" "}
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative gap-4">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
