import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoArrowDown, IoLibrary, IoAdd, IoTrendingUp, IoStar } from "react-icons/io5";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import AuthContext from "../../Context/AuthContext";
import { Button } from "../ui";

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

  const heroSlides = [
    {
      id: 1,
      image: image8,
      title: "Discover Your Next Great Read",
      subtitle: "Explore thousands of books from passionate readers worldwide",
      cta: "Browse Books",
      link: "/AllBooks",
      overlay: true
    },
    {
      id: 2,
      image: image7,
      title: "Share Your Literary Journey",
      subtitle: "Add your favorite books and help others discover amazing stories",
      cta: user ? "Add Book" : "Join Now",
      link: user ? "/AddBooks" : "/SignUp",
      overlay: true,
      featured: true
    },
    {
      id: 3,
      image: image2,
      title: "Join Our Reading Community",
      subtitle: "Connect with fellow book lovers and share your thoughts",
      cta: "Get Started",
      link: user ? "/MyBooks" : "/SignUp",
      overlay: true
    },
    {
      id: 4,
      image: image3,
      title: "Curated Book Collections",
      subtitle: "Find books tailored to your interests and reading preferences",
      cta: "Explore Collections",
      link: "/AllBooks",
      overlay: true
    },
    {
      id: 5,
      image: image5,
      title: "Rate & Review Books",
      subtitle: "Help others discover great reads with your honest reviews",
      cta: "Start Reviewing",
      link: user ? "/AllBooks" : "/LogIn",
      overlay: true
    }
  ];

  const scrollToNext = () => {
    const nextSection = document.querySelector('#latest-books');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-3 !h-3',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white !scale-125'
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-full hero-swiper"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${slide.image}')` }}
              />
              
              {/* Overlay */}
              {slide.overlay && (
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
              )}

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container-custom">
                  <div className="max-w-3xl">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      className="text-white"
                    >
                      {slide.featured && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                          className="inline-flex items-center space-x-2 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full px-4 py-2 mb-4"
                        >
                          <IoStar className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm font-medium">Featured</span>
                        </motion.div>
                      )}

                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
                      >
                        {slide.subtitle}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4"
                      >
                        <Link to={slide.link}>
                          <Button
                            variant="primary"
                            size="lg"
                            className="bg-primary-500 hover:bg-primary-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                          >
                            {slide.cta}
                          </Button>
                        </Link>
                        
                        <Link to="/AllBooks">
                          <Button
                            variant="outline"
                            size="lg"
                            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                          >
                            Browse Collection
                          </Button>
                        </Link>
                      </motion.div>

                      {/* Stats */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex items-center space-x-8 mt-12"
                      >
                        <div className="flex items-center space-x-2">
                          <IoLibrary className="w-5 h-5 text-primary-400" />
                          <span className="text-sm text-gray-300">1000+ Books</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <IoTrendingUp className="w-5 h-5 text-primary-400" />
                          <span className="text-sm text-gray-300">Growing Daily</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <IoStar className="w-5 h-5 text-yellow-400" />
                          <span className="text-sm text-gray-300">Top Rated</span>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <div className="swiper-button-prev !text-white !w-12 !h-12 !mt-0 !left-4 !top-1/2 !-translate-y-1/2 after:!text-xl after:!font-bold bg-black/20 !rounded-full backdrop-blur-sm hover:bg-black/40 transition-all duration-300"></div>
        <div className="swiper-button-next !text-white !w-12 !h-12 !mt-0 !right-4 !top-1/2 !-translate-y-1/2 after:!text-xl after:!font-bold bg-black/20 !rounded-full backdrop-blur-sm hover:bg-black/40 transition-all duration-300"></div>
      </Swiper>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white hover:text-primary-400 transition-colors duration-300 group"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100">Explore More</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <IoArrowDown className="w-6 h-6" />
          </motion.div>
        </div>
      </motion.button>
    </section>
  );
};

export default Slider;
