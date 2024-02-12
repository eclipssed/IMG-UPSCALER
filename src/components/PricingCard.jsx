import React from "react";

const PricingCard = () => {
  return (
    <div className="border-l border-r relative flex flex-col justify-center items-center text-center gap-4">
      <p className="btn absolute top-0 left-0 !rounded-br-none">Day Plan</p>
      <p className="mt-16">
        <span>
          9$ <br />
          One time purchase
        </span>
        Expired aftet 24 hours. <br />
        Unlimited access <br />
        No subscription
      </p>
      <button className="btn px-8">Buy Now</button>
    </div>
  );
};

export default PricingCard;
