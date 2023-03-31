import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Testimonios from "./Testimonios";
import Testimonios2 from "./Testimonios2";
import Testimonios3 from "./Testimonios3";

const TestimonioEslider = () => {
  return (
    <>
      <h2 className="py-7 text-center text-3xl text-text font-Manrope font-bold">
        QUE DICEN NUESTROS USUARIOS
      </h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Testimonios />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonios2 />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonios3 />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Testimonios />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonios />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonios />
        </SwiperSlide> */}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default TestimonioEslider;
