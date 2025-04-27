import { useEffect } from "react";
import BorderButton from "../BorderButton/BorderButton";
import { FadeUpAll } from "../../animations/gsapAnimations";
import { Link } from "react-router-dom";

const DeliveryStatus = () => {
  useEffect(() => {
    FadeUpAll(".fade-up");
  }, []);

  return (
    <div className="min-h-screen container bg-custom-bg1 text-custom-dark-text py-6">
      <h1 className="text-sm font-regular mb-4">Check delivery status</h1>
      <div className="grid md:grid-cols-2 gap-6 bg-white rounded-lg">
        {/* Left Side */}
        <div className="border border-gray-400 rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col">
          <h2 className="fade-up text-2xl lg:text-3xl font-bold mb-4">
            Check delivery status
          </h2>
          <p className="fade-up text-gray-700 mb-6">
            Enter your order number and last name to see the delivery status.
          </p>

          <div className="fade-up flex flex-col space-y-4">
            {/* Order ID */}
            <div>
              <label className="text-gray-700 block text-sm font-normal mb-1">
                Order ID
              </label>
              <input
                type="text"
                placeholder="e.g. 123456"
                className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-custom-pri-light"
              />
            </div>

            {/* Finding Order Number */}
            <div>
              <a
                href="#"
                className="text-custom-pri-light font-bold underline text-sm"
              >
                Finding the order number
              </a>
            </div>

            {/* Last Name */}
            <div>
              <label className="text-gray-700 block text-sm font-normal mb-1">
                Last name
              </label>
              <input
                type="text"
                placeholder="e.g.Doe"
                className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-custom-pri-light"
              />
            </div>

            {/* Button */}
            <button className="fade-up bg-custom-pri-light hover:bg-custom-pri text-white font-semibold py-3 rounded-md mt-4">
              Check delivery status
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="border border-gray-400 rounded-lg p-8 flex flex-col justify-center items-center text-center">
          <h2 className="fade-up text-2xl font-bold mb-2">Order number not at hand?</h2>
          <p className="fade-up text-gray-700 mb-6">
            You can find all the details in your account.
          </p>

          <Link to="/login" className="fade-up">
            <BorderButton>Go to Login</BorderButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeliveryStatus;
