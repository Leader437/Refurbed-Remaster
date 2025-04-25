import {useEffect} from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbTimeDuration30 } from "react-icons/tb";
import { GiReturnArrow, GiPineTree } from "react-icons/gi";
import tabletImg from "../../assets/product-images/tablets.webp";
import { Link } from "react-router-dom";
import { FadeUpAll } from "../../animations/gsapAnimations";


const categories = [
  {
    name: "Desktops",
    img: tabletImg,
  },
  {
    name: "Accessories",
    img: tabletImg,
  },
  {
    name: "Printers",
    img: tabletImg,
  },
  {
    name: "Cameras",
    img: tabletImg,
  },
  {
    name: "Phones",
    img: tabletImg,
  },
  {
    name: "Laptops",
    img: tabletImg,
  },
  {
    name: "Consoles",
    img: tabletImg,
  },
  {
    name: "TVs",
    img: tabletImg,
  },
];

const Hero = () => {
  useEffect(() => {
    FadeUpAll(".fade-up")
  }, [])

  return (
    <div className="bg-green-900 pt-10 w-full text-white hero-main">
      <h2 className="container text-center text-2xl md:text-3xl font-semibold mb-10">
        Refurbished products with at least 12 months’ warranty
      </h2>

      <div className="relative container mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1150: { slidesPerView: 6 },
          }}
          modules={[Navigation]}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <Link to={`/c/${cat.name}`}>
                <div className="fade-up bg-white text-black rounded-xl p-5 flex flex-col items-center justify-center shadow-md">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-28 h-28 object-contain mb-4"
                  />
                  <p className="font-medium text-base text-center">
                    {cat.name}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="custom-prev flex absolute left-[0] top-1/2 -translate-y-1/2 z-10 w-[42px] h-[42px] border-1 border-custom-pri bg-white text-custom-pri rounded-md text-xl items-center justify-center">
          <MdArrowBackIos className="relative left-[3px]" />
        </button>
        <button className="custom-next flex absolute right-[0] top-1/2 -translate-y-1/2 z-10 w-[42px] h-[42px] border-1 border-custom-pri bg-white text-custom-pri rounded-md text-xl items-center justify-center">
          <MdArrowForwardIos />
        </button>
      </div>

      {/* Bottom features row */}
      <div className="bg-custom-bg2 w-full mt-12 py-5">
        <div className="container text-custom-dark-text flex flex-wrap justify-around lg:justify-between gap-x-6 gap-y-3 text-xs md:text-sm">
          <div className="flex items-center gap-2 w-[40%] lg:w-auto">
            <CiDeliveryTruck className="text-custom-accent text-4xl" />
            <span>Delivery included</span>
          </div>
          <div className="flex items-center gap-2 w-[40%] lg:w-auto">
            <TbTimeDuration30 className="text-custom-accent text-4xl" />
            <span>30-day free trial</span>
          </div>
          <div className="flex items-center gap-2 w-[40%] lg:w-auto">
            <GiReturnArrow className="text-custom-accent text-4xl" />
            <span>Min 12-month warranty</span>
          </div>
          <div className="flex items-center gap-2 w-[40%] lg:w-auto">
            <GiPineTree className="text-custom-accent text-4xl" />
            <span>Saves CO₂ vs new</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
