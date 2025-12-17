import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import CustomArrowForSlider from "./CustomArrowForSlider";
import "swiper/css";
import Btn from "./Btn";
import { motion } from "motion/react";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const Hero = () => {
  return (
    <div className="hero_swiper flex items-center">
      <Swiper
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={200}
        slidesPerView={1}
        loop={false}
        speed={5000}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className=" max-w-330 m-auto px-10 bg-hero-bg"
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-[8fr_4fr] items-center gap-5 py-10">
            <div className="text-left static lg:relative lg:pl-50">
              <motion.div
                drag
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.4}
                whileDrag={{
                  scale: 1.2,
                }}
                className="absolute -top-30 left-0 hidden lg:block"
              >
                <img
                  src="/absolute-hero-img.svg"
                  alt="absolute-hero"
                  className="w-60"
                />
              </motion.div>
              <p className="font-hero-lato mb-3 font-bold text-[16px] leading-7 text-hero-primary">
                Best Furniture For Your Castle....
              </p>
              <h2 className="text-black font-bold font-hero-josefin text-[35px] mb-3 lg:text-[25px]">
                New Furniture Collection <br />
                Trends in 2020
              </h2>
              <p className="font-bold mb-7 font-hero-lato text-[16px] leading-7 lg:font-normal lg:leading-5 text-hero-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <Btn />
            </div>
            <motion.div
              drag
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.4}
              whileDrag={{
                scale: 1.2,
              }}
            >
              <img
                src="/hero-sofa (2).svg"
                alt="hero-img"
                className="w-full max-h-170"
              />
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-[8fr_4fr] items-center gap-5 py-10">
            <div className="text-left static lg:relative lg:pl-50">
              <div className="absolute -top-30 left-0 hidden lg:block">
                <img
                  src="/absolute-hero-img.svg"
                  alt="absolute-hero"
                  className="w-60"
                />
              </div>
              <p className="font-hero-lato mb-3 font-bold text-[16px] leading-7 text-hero-primary">
                Best Furniture For Your Castle....
              </p>
              <h2 className="text-black font-bold font-hero-josefin text-[35px] mb-3 lg:text-[25px]">
                New Furniture Collection <br />
                Trends in 2020
              </h2>
              <p className="font-bold mb-7 font-hero-lato text-[16px] leading-7 lg:font-normal lg:leading-5 text-hero-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <Btn />
            </div>
            <div>
              <img
                src="/hero-sofa (2).svg"
                alt="hero-img"
                className="w-full max-h-170"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-[8fr_4fr] items-center gap-5 py-10">
            <div className="text-left static lg:relative lg:pl-50">
              <div className="absolute -top-30 left-0 hidden lg:block">
                <img
                  src="/absolute-hero-img.svg"
                  alt="absolute-hero"
                  className="w-60"
                />
              </div>
              <p className="font-hero-lato mb-3 font-bold text-[16px] leading-7 text-hero-primary">
                Best Furniture For Your Castle....
              </p>
              <h2 className="text-black font-bold font-hero-josefin text-[35px] mb-3 lg:text-[25px]">
                New Furniture Collection <br />
                Trends in 2020
              </h2>
              <p className="font-bold mb-7 font-hero-lato lg:font-normal text-[16px] leading-7 lg:leading-5 text-hero-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <Btn />
            </div>
            <div>
              <img
                src="/hero-sofa (2).svg"
                alt="hero-img"
                className="w-full max-h-170"
              />
            </div>
          </div>
        </SwiperSlide>

        <CustomArrowForSlider />
      </Swiper>
    </div>
  );
};

export default Hero;
