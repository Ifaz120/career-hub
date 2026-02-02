import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import banImg1 from '../../assets/c5.jpg';
import banImg2 from '../../assets/c4.jpg';
import banImg3 from '../../assets/c6.avif';
import banImg4 from '../../assets/c8.jpg';

const Banner = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden">

      {/* Static Overlay Content */}
      <div className="absolute z-30 inset-0 flex flex-col items-center justify-center text-white text-center px-6 pointer-events-none">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tight drop-shadow-2xl">
            Build Your <span className="text-primary">Career</span> With Us
          </h1>
          <p className="mt-4 text-base md:text-xl lg:text-2xl opacity-90 font-medium drop-shadow-md">
            Find jobs, skills, and opportunities in one place. Your journey to success starts here.
          </p>
          <div className="mt-8 pointer-events-auto">
            {/* Added onClick to navigate to login */}
            <button 
              onClick={() => navigate("/login")} 
              className="btn btn-primary btn-md md:btn-lg px-10 rounded-full shadow-xl hover:scale-105 transition-transform border-none text-white font-bold"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect={'fade'}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        pagination={{ clickable: true }}
        className="w-full h-full z-10"
      >
        {[
          banImg1, banImg2, banImg3, banImg4
        ].map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img src={imgSrc} className="w-full h-full object-cover" alt="Slide" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 btn btn-circle btn-ghost text-white border-white/40 hidden md:flex">❮</button>
      <button className="custom-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 btn btn-circle btn-ghost text-white border-white/40 hidden md:flex">❯</button>
    </div>
  );
};

export default Banner;