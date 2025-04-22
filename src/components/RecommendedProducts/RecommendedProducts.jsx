import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const RecommendedProducts = ({ id, category, allProducts }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    if (!category || !allProducts?.length) {
      setRecommended([]);
      return;
    }
    // Filter products by category
    const filtered = allProducts.filter(
      (product) => product.category === category
    );
    // Shuffle and pick 4 random products
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    setRecommended(shuffled.slice(0, 4));
  }, [id, category, allProducts]);

  return (
    <section className="bg-custom-bg1">
      <div className="container py-10 relative w-full">
        {recommended.length > 0 ? (
          <div>
            <div className="flex items-center justify-between gap-3 max-w-fit mb-9 relative">
              <h2 className="text-xl md:text-2xl font-semibold text-custom-dark-text">
                You may also like
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
            <div className="relative md:px-5 lg:px-0">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".custom-next4",
                  prevEl: ".custom-prev4",
                }}
                slidesPerView={2}
                spaceBetween={20}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
                className="relative"
              >
                {recommended.map((product, index) => (
                  <SwiperSlide key={index}>
                    <Link
                      to={`/p/${product.id}`}
                      className="block group"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="bg-white w-full flex items-center justify-center py-5 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-32 px-2 md:px-6 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-sm px-2 md:px-6 mt-4 text-center text-custom-dark-text font-medium line-clamp-2 h-[20px]">
                        {product.name}
                      </p>
                      <p className="text-custom-accent px-2 md:px-6 text-center font-semibold mt-1 text-sm h-[20px]">
                        {product.currentPrice}
                      </p>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="custom-prev4 hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[42px] h-[42px] border-1 border-custom-pri bg-white text-custom-pri rounded-md text-xl items-center justify-center">
                <MdArrowBackIos className="relative left-[3px]" />
              </button>
              <button className="custom-next4 hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[42px] h-[42px] border-1 border-custom-pri bg-white text-custom-pri rounded-md text-xl items-center justify-center">
                <MdArrowForwardIos />
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
};

export default RecommendedProducts;
