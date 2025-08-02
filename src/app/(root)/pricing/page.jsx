import PricingCard from "@/src/components/PricingCard";
import React from "react";

const PricingPage = () => {
  return (
    <section className="mt-40  text-center space-y-8">
      <div className="wrapper mb-24">
        <h2 className="font-semibold mb-4 text-xl">Pricing & Plans</h2>
        <div className="flex  p-4 w-fit mx-auto justify-center items-center flex-col lg:flex-row border border-primary rounded-md">
          {/* Card 1 */}
          <div className="lg:border-r lg:min-w-[300px] p-4 relative flex flex-col justify-center items-center text-center gap-4">
            <p className="btn absolute top-0 left-0 !rounded-br-none">
              Day Plan
            </p>
            <p className="mt-16 leading-10">
              <span className="font-semibold text-lg">
                9$ <br />
                One time purchase
              </span>
              <br />
              Expired aftet 24 hours. <br />
              Unlimited access <br />
              No subscription
            </p>
            <button className="btn px-8 w-full">Buy Now</button>
          </div>
          {/* Card 2 */}
          <div className="lg:border-r lg:min-w-[300px] p-4 relative flex flex-col justify-center items-center text-center gap-4">
            <p className="btn absolute top-0 left-4 !rounded-br-none">
              Day Plan
            </p>
            <p className="mt-16 leading-10">
              <span className="font-semibold text-lg">
                19$ <br />
                Auto Renew
              </span>
              <br />
              Unlimited access to Upscaler. <br />
              Renew every month. <br />
              Priority processing
            </p>
            <button className="btn px-8 w-full">Buy Now</button>
          </div>

          {/* Card 3 */}
          <div className=" lg:min-w-[300px] p-4 relative flex flex-col justify-center items-center text-center gap-4">
            <p className="btn absolute top-0 left-4 !rounded-br-none">
              Day Plan
            </p>
            <p className="mt-16 leading-10">
              <span className="font-semibold text-lg">
                69$ <br />
                Auto Renew
              </span>
              <br />
              Unlimited access to Upscaler. <br />
              Renew every month. <br />
              Priority processing
            </p>
            <button className="btn px-8 w-full">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="font-medium my-4 textlg">Register & Pay</p>
        <div className="bg-[#66ced3]  space-y-4 py-6 text-center ">
          <div className="wrapper flex justify-between items-center flex-wrap maxlg:justify-center gap-4">
            <p>
              Cancel plan at any time with one month&apos;s notice. Powered by
              Paddle.
            </p>
            <button className="btn !px-6">Create a free account</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
