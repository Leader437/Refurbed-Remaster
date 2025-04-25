import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import { FadeUpAll } from "../../animations/gsapAnimations";

const RecommendedForYou = () => {
  const [isHovered, setIsHovered] = useState(false);
  const allProducts = useSelector((state) => state.products.allProducts);

  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
      setRecommendedProducts(shuffled.slice(0, 8));
    }
    FadeUpAll(".fade-up");
  }, [allProducts]);

  return (
    <section className="bg-custom-bg2">
      <div className="container py-10 relative w-full">
        <div className="flex items-center justify-between mb-6 gap-3 max-w-fit relative">
          <h2 className="fade-up text-xl md:text-2xl font-semibold text-custom-dark-text">
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
            {recommendedProducts.map((product, index) => (
              <SwiperSlide key={index}>
                <Link to={`/p/${product.id}`} className="block group">
                  <ProductCard product={product} />
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
