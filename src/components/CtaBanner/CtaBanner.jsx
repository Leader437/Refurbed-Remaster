import React from "react";
import mobilesImg from "../../assets/buyback_banner.webp";

const CtaBanner = () => {
  return (
    <div className="bg-custom-bg1">
      <div className="container pb-14">
        <div className="bg-custom-pri-light rounded-lg py-6 lg:py-0 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
          <div className="text-white max-w-xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              Sell your phone
            </h1>
            <p className="text-md md:text-2xl mb-6">
              Up to €500 for your used smartphone
            </p>
            <button className="bg-[#F5EBFF] text-black font-semibold py-3 px-8 rounded-lg text-lg hover:bg-white transition">
              Sell now
            </button>
          </div>

          <div className="w-full max-w-[280px] md:max-w-full md:w-[300px] lg:w-[400px]">
            <img
              src={mobilesImg}
              alt="Phones"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBanner;
