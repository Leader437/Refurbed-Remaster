import { useState } from "react";
import { Link } from "react-router-dom";
import "./QuickLinkBar.css";
import {
  FaBars,
  FaTimes,
  FaAppleAlt,
  FaBolt,
  FaHome,
  FaFutbol,
  FaKeyboard,
  FaMoneyBill,
} from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { MdArrowForwardIos } from "react-icons/md";

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
              <Link to="/" className="hover:text-custom-grey-text">
                Smartphones
              </Link>
              <Link to="/" className="hover:text-custom-grey-text">
                Laptops
              </Link>
              <Link to="/" className="hover:text-custom-grey-text">
                Tablets
              </Link>
              <Link to="/" className="hover:text-custom-grey-text">
                Smartwatches
              </Link>
              <Link to="/" className="hover:text-custom-grey-text">
                Accessories
              </Link>
              <Link to="/" className="hover:text-custom-grey-text">
                Headphones
              </Link>
              <Link to="/" className="hover:text-custom-grey-text">
                iPhones
              </Link>
              <Link to="/" className="hover:text-custom-grey-text">
                Samsung phones
              </Link>
              <Link to="/" className="hover:text-custom-grey-text">
                iPads
              </Link>
              <Link to="/" className="hover:text-custom-grey-text">
                MacBooks
              </Link>
              <Link to="/" className="hover:text-custom-grey-text">
                iPhone 13
              </Link>
              <Link to="/" className="hover:text-custom-grey-text">
                iPhone 14
              </Link>
              <Link to="/" className="hover:text-custom-grey-text">
                iPhone 15
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
            {/* <li className="flex justify-between items-center font-semibold text-[#362A84]">
              <span className="flex gap-3 items-center">
                <FaBolt /> Electronics
              </span>
              <MdArrowForwardIos />
            </li>
            <li className="flex justify-between items-center font-semibold text-[#362A84]">
              <span className="flex gap-3 items-center">
                <FaHome /> Household
              </span>
              <MdArrowForwardIos />
            </li>
            <li className="flex justify-between items-center font-semibold text-[#362A84]">
              <span className="flex gap-3 items-center">
                <FaFutbol /> Sport
              </span>
              <MdArrowForwardIos />
            </li>
            <li className="flex justify-between items-center font-semibold text-[#362A84]">
              <span className="flex gap-3 items-center">
                <FaKeyboard /> Accessories
              </span>
              <MdArrowForwardIos />
            </li>
            <li className="flex justify-between items-center font-semibold text-[#362A84]">
              <span className="flex gap-3 items-center">
                <FaAppleAlt /> Apple
              </span>
              <MdArrowForwardIos />
            </li>
            <li className="flex gap-3 items-center font-semibold text-[#362A84]">
              <FaMoneyBill /> Sell
            </li> */}

            <div className="pt-6">
              <p className="text-lg font-semibold px-2 text-[#362A84]">All categories</p>
              <ul className="space-y-4 pt-4">
                <Link to="/"> <li className="hover:bg-purple-100 px-2 py-2 rounded text-custom-pri">Phones & Smartphones</li></Link>
                <Link to="/"> <li className="hover:bg-purple-100 px-2 py-2 rounded text-custom-pri">Smartphone Accessories</li></Link>
                <Link to="/"> <li className="hover:bg-purple-100 px-2 py-2 rounded text-custom-pri">iPhones</li></Link>
                <Link to="/"> <li className="hover:bg-purple-100 px-2 py-2 rounded text-custom-pri">Samsung</li></Link>
                <Link to="/"> <li className="hover:bg-purple-100 px-2 py-2 rounded text-custom-pri">Laptops</li></Link>
                <Link to="/"> <li className="hover:bg-purple-100 px-2 py-2 rounded text-custom-pri">Computer Accessories</li></Link>
                <Link to="/"> <li className="hover:bg-purple-100 px-2 py-2 rounded text-custom-pri">iPads</li></Link>
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
