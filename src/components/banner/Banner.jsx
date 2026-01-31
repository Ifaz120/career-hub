import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="relative w-full h-[550px]">

      {/* Overlay Content */}
      <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <div className="pointer-events-none">
          <h1 className="text-4xl md:text-5xl font-bold">
            Build Your Career With Us
          </h1>
          <p className="mt-3 text-lg">
            Find jobs, skills, and opportunities in one place
          </p>
        </div>

        <div className="mt-6">
          <button className="btn btn-primary px-8">
            Join Us
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        className="w-full h-full z-10"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="/src/assets/c5.jpg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="/src/assets/c4.jpg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="/src/assets/c6.avif" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="/src/assets/c8.jpg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Arrows (always clickable) */}
      <button className="custom-prev absolute left-5 top-1/2 -translate-y-1/2 z-50 btn btn-circle">
        ❮
      </button>

      <button className="custom-next absolute right-5 top-1/2 -translate-y-1/2 z-50 btn btn-circle">
        ❯
      </button>
    </div>
  );
};

export default Banner;
