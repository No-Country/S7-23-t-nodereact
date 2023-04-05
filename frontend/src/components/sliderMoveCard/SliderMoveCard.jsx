import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import NoveCard from "./NoveCard";

const SliderMoveCard = () => {
  return (
    <Swiper
      modules={[Navigation]}
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
        410: {
          slidesPerView: 1.5,
          spaceBetween: 40,
        },
        700: {
          slidesPerView: 1.9,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 2,
          spaceBetween: 30,
        },

        1100: {
          slidesPerView: 2.3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        1400: {
          slidesPerView: 3.2,
          spaceBetween: 30,
        },
        1650: {
          slidesPerView: 4,
          spaceBetween: 30,
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
  w-[50px] h-[50px] custom-bg  justify-center rounded-full z-[8]"
      >
        <SlideNextButton />
      </div>
      <div
        className="hidden sm:flex items-center absolute top-20 bottom-0 left-5 cursor-pointer
   w-[50px] h-[50px] custom-bg justify-center rounded-full z-[8]"
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

export default SliderMoveCard;
