import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import NoveCard from "./NoveCard";

const SliderDestacCard = () => {
  useEffect(() => {}, []);

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      style={{ position: "unset" }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 70,
        },
        330: {
          slidesPerView: 1.2,
          spaceBetween: 40,
        },
        600: {
          slidesPerView: 1.8,
          spaceBetween: 30,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      <SwiperSlide>
        <NoveCard />
      </SwiperSlide>
      <SwiperSlide>
        <NoveCard />
      </SwiperSlide>
      <SwiperSlide>
        <NoveCard />
      </SwiperSlide>
      <SwiperSlide>
        <NoveCard />
      </SwiperSlide>
      <SwiperSlide>
        <NoveCard />
      </SwiperSlide>

      <div
        className="hidden sm:flex items-center absolute top-20 bottom-0 right-20  cursor-pointer 
w-[50px] h-[50px] custom-bg  justify-center rounded-full z-20"
      >
        <SlideNextButton />
      </div>
      <div
        className="hidden sm:flex items-center absolute top-20 bottom-0 left-5 cursor-pointer
w-[50px] h-[50px] custom-bg justify-center rounded-full z-20"
      >
        <SlidePrevButton />
      </div>
    </Swiper>
  );
};

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <i className="fa-solid fa-chevron-right text-[#000000] text-2xl  "></i>
    </button>
  );
};

const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>
      <i className="fa-solid fa-chevron-left text-[#000000] text-2xl"></i>
    </button>
  );
};

export default SliderDestacCard;
