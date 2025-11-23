import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AuthContext from "../../Context/AuthContext";

import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
import image6 from "../../assets/images/6.png";
import image7 from "../../assets/images/7.jpg";
import image8 from "../../assets/images/8.jpg";

const Slider = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null;

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={image8}
            alt=""
            className="w-full h-[300px] sm:h-[400px] md:h-[550px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] bg-cover bg-center"
            style={{
              backgroundImage: `url('${image7}')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 md:px-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Add Your Favorite Book List Here
              </h2>

              <p className="max-w-lg sm:max-w-xl mb-6 text-sm sm:text-base md:text-lg text-gray-200">
                Explore thousands of reviews, ratings, and recommendations from
                passionate readers.
              </p>

              {user ? (
                <Link to="/AddBooks">
                  <button className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-gray-200 transition text-sm sm:text-base md:text-lg">
                    Add Now
                  </button>
                </Link>
              ) : (
                <Link to="/LogIn">
                  <button className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-gray-200 transition text-sm sm:text-base md:text-lg">
                    Add Now
                  </button>
                </Link>
              )}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={image2}
            alt=""
            className="w-full h-[300px] sm:h-[400px] md:h-[550px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={image3}
            alt=""
            className="w-full h-[300px] sm:h-[400px] md:h-[550px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={image5}
            alt=""
            className="w-full h-[300px] sm:h-[400px] md:h-[550px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
