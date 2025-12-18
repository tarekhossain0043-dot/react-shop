import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import CustomArrowForSlider from "./CustomArrowForSlider";
import "swiper/css";
import Btn from "./Btn";
import { useAnimation, motion } from "motion/react";
import { motion } from "motion/react";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const Hero = () => {
  const controls = useAnimation();
  const [currentSlideIndex,setCurrentSlideIndex] = useState(0)
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const heroVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };
  return (
    <div className="hero_swiper flex items-center bg-hero-bg">
      <Swiper
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={200}
        slidesPerView={1}
        loop={false}
        speed={5000}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className=" max-w-330 m-auto px-10"
      >
        <SwiperSlide>
          <motion.div
            key={currentSlideIndex}
            variants={heroVariant}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 lg:grid-cols-[8fr_4fr] items-center gap-5 py-10"
          >
            <div className="text-left static lg:relative lg:pl-50">
              <motion.div
                variants={item}
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
              <motion.p
                variants={item}
                className="font-hero-lato mb-3 font-bold text-[16px] leading-7 text-hero-primary"
              >
              <p className="font-hero-lato mb-3 font-bold text-[16px] leading-7 text-hero-primary">
                Best Furniture For Your Castle....
              </motion.p>
              <motion.h2
                variants={item}
                className="text-black font-bold font-hero-josefin text-[35px] mb-3 lg:text-[25px]"
              >
                New Furniture Collection <br />
                Trends in 2020
              </motion.h2>
              <motion.p
                variants={item}
                className="font-bold mb-7 font-hero-lato text-[16px] leading-7 lg:font-normal lg:leading-5 text-hero-text"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </motion.p>
              <Btn />
            </div>
            <motion.div variants={item}>
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
          </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
          key={currentSlideIndex}
            variants={heroVariant}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 lg:grid-cols-[8fr_4fr] items-center gap-5 py-10"
          >
            <div className="text-left static lg:relative lg:pl-50">
              <motion.div
                variants={item}
                className="absolute -top-30 left-0 hidden lg:block"
              >
                <img
                  src="/absolute-hero-img.svg"
                  alt="absolute-hero"
                  className="w-60"
                />
              </motion.div>
              <motion.p
                variants={item}
                className="font-hero-lato mb-3 font-bold text-[16px] leading-7 text-hero-primary"
              >
                Best Furniture For Your Castle....
              </motion.p>
              <motion.h2
                variants={item}
                className="text-black font-bold font-hero-josefin text-[35px] mb-3 lg:text-[25px]"
              >
                New Furniture Collection <br />
                Trends in 2020
              </motion.h2>
              <motion.p
                variants={item}
                className="font-bold mb-7 font-hero-lato text-[16px] leading-7 lg:font-normal lg:leading-5 text-hero-text"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </motion.p>
              <Btn />
            </div>
            <motion.div variants={item}>
              <img
                src="/hero-sofa (2).svg"
                alt="hero-img"
                className="w-full max-h-170"
              />
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
          key={currentSlideIndex}
            variants={heroVariant}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 lg:grid-cols-[8fr_4fr] items-center gap-5 py-10"
          >
            <div className="text-left static lg:relative lg:pl-50">
              <motion.div
                variants={item}
                className="absolute -top-30 left-0 hidden lg:block"
              >
                <img
                  src="/absolute-hero-img.svg"
                  alt="absolute-hero"
                  className="w-60"
                />
              </motion.div>
              <motion.p
                variants={item}
                className="font-hero-lato mb-3 font-bold text-[16px] leading-7 text-hero-primary"
              >
                Best Furniture For Your Castle....
              </motion.p>
              <motion.h2
                variants={item}
                className="text-black font-bold font-hero-josefin text-[35px] mb-3 lg:text-[25px]"
              >
                New Furniture Collection <br />
                Trends in 2020
              </motion.h2>
              <motion.p
                variants={item}
                className="font-bold mb-7 font-hero-lato text-[16px] leading-7 lg:font-normal lg:leading-5 text-hero-text"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </motion.p>
              <Btn />
            </div>
            <motion.div variants={item}>
              <img
                src="/hero-sofa (2).svg"
                alt="hero-img"
                className="w-full max-h-170"
              />
            </motion.div>
          </motion.div>
        </SwiperSlide>

        <CustomArrowForSlider />
      </Swiper>
    </div>
  );
};

export default Hero;
