import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    checked: false,
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (data.email.trim() !== "") {
      setStep(2);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-[95dvh] bg-white text-custom-dark-text px-4">
        <div className="max-w-[400px] py-12 w-full">
          <p className="text-gray-600 text-lg mb-8">
            <span className="font-semibold">Are you new on refurbed?</span>{" "}
            Sign-up now and create your own account.
          </p>

          <h3 className="text-xl font-bold mb-4">Sign-up</h3>

          <form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                * Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {step === 2 && (
              <>
                <div className="mb-6">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    * First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={data.firstName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    * Surname
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={data.lastName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    * Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="">
                  <label htmlFor="newsletter" className="flex items-center gap-4">
                    <input
                      id="newsletter"
                      name="checked"
                      type="checkbox"
                      checked={data.checked}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 border-2 border-[#6c49ff] rounded-md cursor-pointer"
                    />
                    <span className="font-regular text-sm">
                      Sign up for our newsletter for the first time and save
                      €15!
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full my-7 bg-custom-pri text-white font-semibold py-4 rounded-md hover:bg-[#231d5e] cursor-pointer transition"
                >
                  Sign-up
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By signing-up you agree to refurbed’s{" "}
                  <a
                    href="#"
                    className="text-custom-pri-light font-semibold underline"
                  >
                    Terms and Conditions
                  </a>{" "}
                  and our{" "}
                  <a
                    href="#"
                    className="text-custom-pri-light font-semibold underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </>
            )}

            {step === 1 && (
              <button
                onClick={handleContinue}
                className="w-full bg-[#2f2673] text-white font-semibold py-3 rounded-md text-lg hover:bg-[#241d5c] transition"
              >
                Continue
              </button>
            )}
          </form>

          <div className="flex items-center my-8">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-800 font-semibold">
              Already have an account?
            </span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <Link to="/login">
            <button
              type="button"
              className="w-full border border-custom-pri-light text-custom-pri-light font-semibold py-3 rounded-md text-lg transition"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
      <footer className="text-sm text-white mt-auto bg-custom-pri py-6 flex flex-wrap justify-center gap-6">
        <span>© Refurbed Marketplace GmbH</span>
        <a href="#" className="hover:underline">
          T&C
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Imprint
        </a>
        <a href="#" className="hover:underline">
          Legal Notices
        </a>
      </footer>
    </>
  );
}
