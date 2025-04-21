import { CiShoppingCart, CiUser, CiSearch } from "react-icons/ci"
import logo from "../../assets/logos/refurbed-logo.svg"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-7 py-4">
        
        {/* Logo and Links */}
        <div className="flex justify-between md:justify-start w-full md:max-w-fit gap-10">
          <div className="flex items-center text-[#2E2A85] font-bold text-2xl">
            <Link to="/">
              <img src={logo} alt="Brand logo" className="w-20 md:w-24 lg:w-28" />
            </Link>
          </div>

          <div className="flex items-center gap-6 text-custom-pri font-normal text-sm">
            <Link to="/products" className="hover:text-custom-pri-light">product</Link>
            <Link to="/" className="hover:text-custom-pri-light">Sell</Link>
            <Link to="/" className="hover:text-custom-pri-light">Help</Link>
          </div>
        </div>

        {/* Search + Icons */}
        <div className="flex items-center justify-between gap-6 w-full">
          <div className="flex items-center w-full md:w-[70%] md:ml-auto border border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 text-gray-600 focus:outline-none"
            />
            <button className="px-4">
              <CiSearch className="text-black" />
            </button>
          </div>

          <div className="flex items-center gap-4 text-custom-pri">
            <Link to="/">
              <CiUser className="text-xl cursor-pointer hover:text-custom-pri-light" />
            </Link>
            <Link to="/">
              <CiShoppingCart className="text-xl cursor-pointer hover:text-custom-pri-light" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar