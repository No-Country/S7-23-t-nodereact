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
      </Swiper>
    </>
  );
};

export default TestimonioEslider;
