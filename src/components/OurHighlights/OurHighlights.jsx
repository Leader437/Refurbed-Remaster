import React from "react";
import fitnessImg from "../../assets/highlight-images/fitness.webp";
import kitchenImg from "../../assets/highlight-images/kitchen.webp";
import { Link } from "react-router-dom";

const OurHighlights = () => {
  return (
    <div className="container py-10 bg-custom-bg1">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">Our highlights</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src={fitnessImg}
            alt="Fitness"
            className="w-full h-60 object-cover"
          />
          <div className="p-6 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mt-2">
                Optimise your fitness
              </h3>
              <p className="text-custom-dark-text text-center mt-2">
                More sustainable and affordable gym equipment for your perfect
                home workout.
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <Link to="/">
                <button className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800">
                  Shop now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src={kitchenImg}
            alt="Kitchen"
            className="w-full h-60 object-cover"
          />
          <div className="p-6 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mt-2">Hot kitchen deals</h3>
              <p className="text-custom-dark-text text-center mt-2">
                Cook up a storm with useful kitchen gadgets up to 40% cheaper
                than new
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <Link to="/">
                <button className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800">
                  Shop now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHighlights;
