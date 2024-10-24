/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import { assets } from "../assets/assets";
import { Autoplay, Navigation } from "swiper/modules"; // Correct path for Swiper modules in v7+
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Hero.css'; // Import your CSS file here

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLER</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2 ">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side - Carousel */}
      <div className="relative w-full sm:w-1/2 flex items-center justify-center">
        <Swiper
          modules={[Autoplay, Navigation]} // Add Autoplay module here
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Enable autoplay
          navigation={{ // Navigation buttons
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="w-[80vw] sm:w-[800px] h-[650px]"
        >
          <SwiperSlide>
            <img
              src={assets.hero_img_1}
              alt="Hero Image 1"
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={assets.hero_img_2}
              alt="Hero Image 2"
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={assets.hero_img_3}
              alt="Hero Image 3"
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={assets.hero_img}
              alt="Hero Image 4"
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        </Swiper>

        {/* Left and Right Arrow Buttons */}
        <div className="swiper-button-prev absolute left-4 z-10 cursor-pointer">
          {/* Optional: Add content for buttons (like arrows or icons) */}
        </div>
        <div className="swiper-button-next absolute right-4 z-10 cursor-pointer">
          {/* Optional: Add content for buttons (like arrows or icons) */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
