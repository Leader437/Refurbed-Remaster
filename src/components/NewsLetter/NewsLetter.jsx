import React from "react";
import { FaRegNewspaper } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div className="bg-custom-pri">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between text-white px-6 py-10 gap-8 lg:gap-16">
          {/* Left Side */}
          <div className="flex items-start gap-4 max-w-2xl w-full">
            {/* Placeholder for icon */}
            <FaRegNewspaper className="hidden lg:block text-5xl" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold leading-snug">
                Sign up for our newsletter for the first time and save €10!
              </h2>
              <p className="text-lg mt-2">Never miss an offer again.</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full">
            <input
              type="email"
              placeholder="Enter e-mail"
              className="w-full px-4 py-3 bg-[#322D7E] text-white border border-white rounded-md placeholder-white focus:outline-none"
            />
            <button className="w-full mt-3 py-3 bg-[#F4EBFF] text-black font-semibold text-lg rounded-md">
              Request voucher
            </button>
            <p className="text-sm text-white mt-3">
              Information about the use of personal data can be found in our{" "}
              <a href="#" className="underline">
                Privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
