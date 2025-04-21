import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import trustPilotStars from "../../assets/bcorp.webp";
import trustPilotLogo from "../../assets/logos/trustpilot_logo.webp";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const reviews = [
  {
    title: "Very good communication",
    text: "Very good communication, product as described. There was no fault with the product.",
    name: "Mrs Natalia Ui Fhaolain",
  },
  {
    title: "Expectation met every time",
    text: "You get exactly what you expect",
    name: "customer",
  },
  {
    title: "Quick",
    text: "Quick, easy and simple.",
    name: "Mr Eamonn Waldron",
  },
  {
    title: "Great Value",
    text: "Amazing price and performance.",
    name: "John Doe",
  },
  {
    title: "Fast delivery",
    text: "Item arrived faster than expected!",
    name: "Jane Smith",
  },
  {
    title: "Awesome Experience",
    text: "Everything was smooth and on time.",
    name: "Tom Benson",
  },
  {
    title: "Top Quality",
    text: "Product looked brand new, works perfectly.",
    name: "Laura Green",
  },
  {
    title: "Highly recommend",
    text: "Service and product both exceeded my expectations.",
    name: "Brian O'Connor",
  },
  {
    title: "Five Stars",
    text: "Will definitely be buying again!",
    name: "Emily White",
  },
];

const Review = () => {
  return (
    <section className="bg-custom-bg1 py-10">
      <div className="container">
        <div className="bg-custom-bg2 px-4 md:px-10 lg:px-16 py-12 rounded-lg shadow-[0px_5px_8px_rgba(0,0,0,0.3)]">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
            <div className="hidden lg:block">
              <h2 className="text-xl md:text-2xl font-semibold text-custom-dark-text">
                Reviews for refurbed in Ireland
              </h2>
              <p className="text-lg text-gray-700 mt-1">
                Check out our products to see specific product reviews.
              </p>
            </div>
            <div className="text-center lg:text-right mt-4 lg:mt-0">
              <p className="text-2xl font-normal mb-3 text-custom-dark-text">
                Excellent
              </p>
              <div className="flex justify-center lg:justify-end items-center space-x-1 mt-1">
                <img src={trustPilotStars} alt="Stars" className="h-6" />
              </div>
              <p className="text-sm mt-1 text-[#4f4f4f]">
                Based on{" "}
                <a href="/" className="underline">
                  140147 reviews
                </a>
              </p>
            </div>
          </div>

          <div className="relative md:px-5">
            <Swiper
              slidesPerView={1}
              slidesPerGroup={1}
              spaceBetween={20}
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-next3",
                prevEl: ".custom-prev3",
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
              }}
              className="h-60 sm:h-56"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index} className="py-2">
                  <div className="bg-white p-6 rounded-sm shadow-md h-56 sm:h-52">
                    <div className="flex items-center space-x-2 mb-2">
                      <img src={trustPilotStars} alt="Rating" className="h-5" />
                      <span className="text-gray-600 text-sm font-medium">
                        ✔ verified
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-custom-dark-text">
                      {review.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{review.text}</p>
                    <p className="mt-1 text-sm text-black font-semibold">
                      Name <span className="font-normal">{review.name}</span>
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="custom-prev3 hidden md:flex absolute left-[-5px] top-1/2 -translate-y-1/2 z-10 w-[42px] h-[42px] border-1 border-custom-pri bg-white text-custom-pri rounded-md text-xl items-center justify-center">
              <MdArrowBackIos className="relative left-[3px]" />
            </button>
            <button className="custom-next3 hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[42px] h-[42px] border-1 border-custom-pri bg-white text-custom-pri rounded-md text-xl items-center justify-center">
              <MdArrowForwardIos />
            </button>
          </div>

          <p className="mt-6 text-sm md:ml-5 text-black">
            Showing our <span className="font-bold">4 and 5 star reviews</span>
          </p>

          <div className="flex justify-center mt-6">
            <img src={trustPilotLogo} alt="Trustpilot" className="h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
