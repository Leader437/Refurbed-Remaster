import { FaCheck } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CgSearchLoading } from "react-icons/cg";
import logo from "../../assets/logos/refurbed-logo.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";

export default function Cart() {
  const cartData = useSelector((state) => state.cart.cartData);
  const allProducts = useSelector((state) => state.products.allProducts);

  const [cartStatus, setCartStatus] = useState("loading"); // "empty", "filled", "loading"
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!cartData.length) {
      setCartStatus("empty");
      setCartItems([]);
    } else {
      setCartStatus("filled");
      const items = cartData
        .map(({ id, quantity }) => {
          const product = allProducts.find((p) => p.id === id);
          return product ? { ...product, quantity } : null;
        })
        .filter(Boolean);
      setCartItems(items);
    }
  }, [cartData, allProducts]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white">
      {/* Top Section */}
      <header className="w-full flex items-center justify-between px-6 py-4 shadow">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
        <div className="hidden lg:flex gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <FaCheck className="text-green-600" />
            Min. 12-month warranty
          </div>
          <div className="flex items-center gap-1">
            <FaCheck className="text-green-600" />
            Free shipping
          </div>
          <div className="flex items-center gap-1">
            <FaCheck className="text-green-600" />
            Free returns
          </div>
          <div className="flex items-center gap-1">
            <FaCheck className="text-green-600" />
            Free 30-day trial
          </div>
        </div>
        <button className="text-custom-pri-light text-sm md:block hidden">
          Help
        </button>
      </header>

      <section className="w-full min-h-[100dvh] flex items-center py-4 bg-custom-bg2 border-b">
        {/* Cart Section */}
        {cartStatus === "empty" && (
          <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <FiShoppingCart className="text-6xl text-gray-300 mb-4" />
            <h2 className="text-2xl text-custom-dark-text font-semibold mb-6">
              Your cart is currently empty
            </h2>
            <button className="bg-custom-pri text-white px-8 py-3 rounded-md hover:bg-custom-pri-light transition">
              Continue shopping
            </button>
          </main>
        )}

        {cartStatus === "loading" && (
          <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <CgSearchLoading className="text-6xl text-gray-300 mb-4" />
            <h2 className="text-2xl text-custom-grey-text font-semibold mb-6">
              Cart Items Loading...
            </h2>
          </main>
        )}

        {cartStatus === "filled" && (
          <main className="container w-full flex flex-col lg:flex-row justify-between items-top gap-8 text-center">
            <CartItem items={cartItems} />
            <CheckoutSummary data={cartItems} />
          </main>
        )}
      </section>

      {/* Bottom Banner */}
      <footer className="w-full border-t px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700 text-center">
        <div className="flex justify-center items-center gap-2">
          <FaCheck className="text-green-600" />
          Min. 12 month warranty
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaCheck className="text-green-600" />
          Free return shipping
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaCheck className="text-green-600" />
          30 day return policy
        </div>
      </footer>
    </div>
  );
}
