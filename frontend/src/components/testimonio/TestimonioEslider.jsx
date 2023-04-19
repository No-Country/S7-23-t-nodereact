import getCard from "../../utils/card.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper";

import Testimonios from "./Testimonios";
import "swiper/css";
import "swiper/css/pagination";
const TestimonioEslider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          330: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          410: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 10,
          },

          1650: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {getCard.map((card, index) => (
          <SwiperSlide key={index}>
            <Testimonios card={card} />
          </SwiperSlide>
        ))}

        <div
          className="hidden sm:flex items-center absolute top-40 bottom-0 right-1  cursor-pointer 
  w-[50px] h-[50px] justify-center rounded-full z-[8]"
        >
          <SlideNextButton />
        </div>
        <div
          className="hidden sm:flex items-center absolute top-40 bottom-0 left-1 cursor-pointer
   w-[50px] h-[50px] justify-center rounded-full z-[8]"
        >
          <SlidePrevButton />
        </div>
      </Swiper>
    </>
  );
};

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <i className="fa-solid fa-chevron-right text-[#DA3E52] text-2xl  "></i>
    </button>
  );
};

const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>
      <i className="fa-solid fa-chevron-left text-[#DA3E52] text-2xl"></i>
    </button>
  );
};
export default TestimonioEslider;
