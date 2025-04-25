import { useEffect } from "react";
import { FaLeaf, FaUndo, FaCheckCircle, FaLock } from "react-icons/fa";
import { GiPlasticDuck } from "react-icons/gi";
import { BsBoxSeam } from "react-icons/bs";
import { PiCreditCardBold } from "react-icons/pi";
import { toast } from "sonner";

import visaLogo from "../../assets/payment-logos/visa_white.svg";
import mastercardLogo from "../../assets/payment-logos/mastercard.svg";
import applePayLogo from "../../assets/payment-logos/pay_apple_pay.svg";
import googlePayLogo from "../../assets/payment-logos/pay_google_pay.svg";
import paypalLogo from "../../assets/payment-logos/pay_paypal_logo.svg";
import klarnaLogo from "../../assets/payment-logos/klarna.svg";

import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../features/cart/cartSlice";

const ProductView = ({ product }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (addProductId) => {
    const existingItem = cartData.find((item) => item.id === addProductId);

    let updatedCart;
    if (existingItem) {
      updatedCart = cartData.map((item) =>
        item.id === addProductId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cartData, { id: addProductId, quantity: 1 }];
    }

    dispatch(setCart(updatedCart));
    toast.success("Product added to cart!");
  };

  return (
    <>
      <section className="bg-custom-bg1 py-10">
        <div className="container py-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Section */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-[70%] mx-auto py-10 md:w-full lg:py-0 max-w-sm object-contain"
              />
            </div>

            {/* Details Section */}
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-semibold mb-1">
                {product.name}
              </h1>
              <p className="text-gray-500 mb-2">Category: {product.category}</p>
              <p className="text-green-600 font-semibold text-sm mb-4">
                ⭐⭐⭐⭐⭐ (140708)
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-gray-500 text-sm">Colour</label>
                  <div className="font-medium">{product.color}</div>
                </div>
                <div>
                  <label className="text-gray-500 text-sm">Material</label>
                  <div className="flex items-center gap-2 font-medium">
                    <GiPlasticDuck /> {product.material}
                  </div>
                </div>
                <div>
                  <label className="text-gray-500 text-sm">Condition</label>
                  <div className="font-medium text-custom-pri-light underline cursor-pointer">
                    {product.condition}
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="text-xl font-bold text-green-700 mb-1">
                {product.currentPrice}{" "}
                <span className="line-through text-gray-400 text-sm ml-2">
                  €{product.oldPrice}
                </span>
                <span className="text-sm text-green-600 ml-2">
                  (
                  {product.oldPrice && product.currentPrice
                    ? `-${Math.round(
                        ((product.oldPrice - product.currentPrice) /
                          product.oldPrice) *
                          100
                      )}%`
                    : null}
                  )
                </span>
              </div>

              {/* Payment and Delivery */}
              <div className="text-sm mb-4">
                Pay in 3 interest free instalments with{" "}
                <span className="font-semibold">Klarna</span>.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <BsBoxSeam /> Delivery included:{" "}
                  <span className="font-medium">April 24 - April 28</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle /> Works like new
                </div>
                <div className="flex items-center gap-2">
                  <FaUndo /> 30-day free returns
                </div>
                <div className="flex items-center gap-2">
                  <FaLeaf /> We invest in environmental projects
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle /> Min 12-month warranty
                </div>
                <div className="flex items-center gap-2">
                  <PiCreditCardBold /> Flexible payment methods
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="bg-custom-pri-light text-custom-light-text py-2 px-4 rounded-md w-full sm:w-auto"
                >
                  Add to cart
                </button>
                <button className="border-1 border-custom-pri-light text-custom-pri-light py-2 px-4 rounded-md w-full sm:w-auto">
                  Order now - pay later
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container bg-[#e4e4e1] py-3">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-end gap-4">
            <div className="flex items-center gap-2">
              <FaLock className="text-black text-sm" />
              <span className="text-black text-sm font-regular">
                Secure payments
              </span>
            </div>

            <div className="flex items-center gap-3">
              <img src={visaLogo} alt="Visa" className="h-6 object-contain" />
              <img
                src={mastercardLogo}
                alt="MasterCard"
                className="h-6 object-contain"
              />
              <img
                src={klarnaLogo}
                alt="Klarna"
                className="h-6 object-contain"
              />
              <img
                src={applePayLogo}
                alt="Apple Pay"
                className="h-6 object-contain"
              />
              <img
                src={googlePayLogo}
                alt="Google Pay"
                className="h-6 object-contain"
              />
              <img
                src={paypalLogo}
                alt="PayPal"
                className="h-6 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="container py-8 bg-white text-custom-dark-text">
          <h2 className="text-2xl md:text-3xl font-bold border-b border-gray-200 pb-2">
            Description
          </h2>

          <div className="mt-6 space-y-4">
            <h3 className="text-lg md:text-xl font-semibold">
              Your refurbed product
            </h3>

            <p className="text-base md:text-lg leading-relaxed text-[#1a2b49]">
              {product.description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductView;
