import { useState, useEffect } from "react";
import { FadeUpAll } from "../../animations/gsapAnimations";
import { Link } from "react-router-dom";

export default function Login() {
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    FadeUpAll(".fade-up");
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center bg-white text-custom-dark-text">
      <div className="flex flex-col min-h-[90dvh] justify-center items-center px-4 py-12">
        <div className="w-full max-w-sm space-y-8">
          <Link to="/signup">
            <button className=" w-full border border-custom-pri-light text-custom-pri-light font-semibold py-3 rounded-md transition">
              Sign-up
            </button>
          </Link>

          <div className="fade-up space-y-8">
            <div className=" flex items-center my-8">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="mx-4 text-gray-700 font-semibold">
                Do you have an account?
              </span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
          </div>

          <div className="fade-up space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Login</h2>

            <form action="">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    * Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-custom-pri-light"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    * Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-custom-pri-light"
                  />
                </div>

                <div className="flex justify-between items-center text-sm">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={stayLoggedIn}
                      onChange={() => setStayLoggedIn(!stayLoggedIn)}
                      className="w-4 h-4 border-2 border-custom-pri-light rounded-md focus:ring-custom-pri-light"
                    />
                    <span>Stay logged in</span>
                  </label>

                  <a
                    href="#"
                    className="text-custom-pri-light font-semibold hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
            </form>

            <input
              type="submit"
              value="Login"
              className="w-full bg-custom-pri text-white font-semibold py-3 rounded-md hover:bg-[#231d5e] cursor-pointer transition"
            />
          </div>

          <div className="flex items-center my-8">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-700 font-semibold">
              Expecting a delivery?
            </span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <Link to="/order-tracking">
            <button className="w-full border border-custom-pri-light text-custom-pri-light font-semibold py-3 rounded-md transition">
              Check delivery status
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
    </div>
  );
}
