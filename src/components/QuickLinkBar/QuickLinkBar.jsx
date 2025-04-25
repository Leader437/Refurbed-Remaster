import { useState } from "react";
import { Link } from "react-router-dom";
import "./QuickLinkBar.css";
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

const QuickLinkBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-custom-pri">
      <div className="relative container">
        {/* Top Category Bar */}
        <div className=" text-white flex items-center whitespace-nowrap font-normal">
          <button
            className="flex items-center gap-2 font-medium"
            onClick={() => setMenuOpen(true)}
          >
            <HiBars3 className="text-lg" />
            <span className="hidden md:block">All categories</span>
          </button>
          <div className="relative overflow-x-auto">
            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-custom-pri to-transparent z-10"></div>
            <div className="relative flex items-center px-10 py-3 gap-6 font-light overflow-x-auto quicklink-scrollbar-hide">
              <Link to="/c/phones" className="hover:text-custom-grey-text">
                Smartphones
              </Link>
              <Link to="/c/consoles" className="hover:text-custom-grey-text">
                Consoles
              </Link>
              <Link to="/c/cameras" className="hover:text-custom-grey-text">
                Cameras
              </Link>
              <Link to="/c/tvs" className="hover:text-custom-grey-text">
                TVs
              </Link>
              <Link to="/c/laptops" className="hover:text-custom-grey-text">
                Laptops
              </Link>
              <Link to="/c/accessories" className="hover:text-custom-grey-text">
                Accessories
              </Link>
              <Link to="/c/tablets" className="hover:text-custom-grey-text">
                Tablets
              </Link>
              <Link to="/c/desktops" className="hover:text-custom-grey-text">
                Desktops
              </Link>
              <Link to="/c/printers" className="hover:text-custom-grey-text">
                Printers
              </Link>
              <Link to="/c/apple" className="hover:text-custom-grey-text">
                Apple
              </Link>
            </div>
          </div>
        </div>

        {/* Side Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <RxCross1
              className="text-2xl cursor-pointer text-custom-pri"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          <ul className="px-6 pb-6 space-y-6 overflow-y-auto max-h-[calc(100vh-60px)]">
            <div className="pt-6">
              <p className="text-lg font-semibold px-2 text-[#362A84]">
                All categories
              </p>
              <ul className="space-y-4 pt-4">
                <Link to="/c/phones">
                  {" "}
                  <li className="hover:bg-purple-100 px-2 py-2 rounded text-custom-pri">
                    Phones & Smartphones
                  </li>
                </Link>
                <Link to="/c/accessories">
                  {" "}
                  <li className="hover:bg-purple-100 px-2 py-2 rounded text-custom-pri">
                    Smartphone Accessories
                  </li>
                </Link>
                <Link to="/c/laptops">
                  {" "}
                  <li className="hover:bg-purple-100 px-2 py-2 rounded text-custom-pri">
                    Laptops
                  </li>
                </Link>
                <Link to="/c/apple">
                  {" "}
                  <li className="hover:bg-purple-100 px-2 py-2 rounded text-custom-pri">
                    iPhones
                  </li>
                </Link>
              </ul>
            </div>
          </ul>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-[rgba(0,0,0,0.4)] z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default QuickLinkBar;
