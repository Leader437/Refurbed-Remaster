import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import iphoneImg from "../../assets/recommended-images/iphone.png";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Lenovo ThinkPad T480 | i5-8350U | 14”",
    price: "€289.99",
    img: iphoneImg,
  },
  {
    name: "Apple MacBook Air 2020 | 13.3” | M1",
    price: "€549.99",
    img: iphoneImg,
  },
  {
    name: "Samsung Galaxy S22 5G",
    price: "€252.99",
    img: iphoneImg,
  },
  {
    name: "iPad Pro 6 (2022) | 12.9″",
    price: "€785.99",
    img: iphoneImg,
  },
  {
    name: "iPhone 15",
    price: "€599.00",
    img: iphoneImg,
  },
  {
    name: "Samsung Galaxy S22 5G",
    price: "€252.99",
    img: iphoneImg,
  },
  {
    name: "Samsung Galaxy S22 5G",
    price: "€252.99",
    img: iphoneImg,
  },
];

const RecommendedForYou = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-custom-bg2">
      <div className="container py-10 relative w-full">
        <div className="flex items-center justify-between mb-6 gap-3 max-w-fit relative">
          <h2 className="text-xl md:text-2xl font-semibold text-custom-dark-text">
            Recommended for you
          </h2>
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="hidden lg:block text-custom-pri text-[20px]">
              ⓘ
            </button>
            {isHovered && (
              <div className="absolute top-1/2 left-full ml-2 -translate-y-1/2 bg-white text-gray-500 text-sm rounded-md shadow-lg p-3 w-64">
                Recommendations are based upon recently viewed products
              </div>
            )}
          </div>
        </div>

        <div className="relative md:px-5">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next2",
              prevEl: ".custom-prev2",
            }}
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 3.5 },
              1280: { slidesPerView: 4.5 },
            }}
            className="relative"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <Link to="/" className="block group">
                  <div className="bg-white w-full h-48 sm:h-64 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="h-32 sm:h-46 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm text-custom-dark-text font-medium mt-2 line-clamp-2 h-[40px]">
                    {product.name}
                  </p>
                  <p className="text-custom-accent font-semibold mt-1 text-sm">
                    {product.price}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="custom-prev2 hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[42px] h-[42px] border-1 border-custom-pri bg-white text-custom-pri rounded-md text-xl items-center justify-center">
            <MdArrowBackIos className="relative left-[3px]" />
          </button>
          <button className="custom-next2 hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[42px] h-[42px] border-1 border-custom-pri bg-white text-custom-pri rounded-md text-xl items-center justify-center">
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecommendedForYou;
