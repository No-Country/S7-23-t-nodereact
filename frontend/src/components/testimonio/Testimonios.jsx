import { useState } from "react";
import Image from "next/image";
import style from "./testimonio.module.css";

const Testimonios = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleClickNext = () => {
  //   setCurrentIndex((currentIndex + 1) % 3);
  // };

  // const handleClickPrev = () => {
  //   setCurrentIndex((currentIndex + 2) % 3);
  // };

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      {/* <div className={`${style.slider}`}>
        <Image
          src="/oveja.png"
          alt="oveja"
          className={`${style.img}`}
          width={500}
          height={500}
          style={{ transform: `translateX(-${(currentIndex - 1) * 100}%)` }}
          // priority
        />
        <Image
          src="/oveja.png"
          alt="oveja"
          className={`${style.img}`}
          width={500}
          height={500}
          // priority
        />
        <Image
          src="/oveja.png"
          alt="oveja"
          className={`${style.img}`}
          width={500}
          height={500}
          style={{ transform: `translateX(-${(currentIndex - 1) * 100}%)` }}
          priority
        />
        <Image
          src="/oveja.png"
          alt="oveja"
          className={`${style.img}`}
          width={500}
          height={500}
          style={{ transform: `translateX(-${(currentIndex - 1) * 100}%)` }}
          priority
        />
        <Image
          src="/oveja.png"
          alt="oveja"
          className={`${style.img}`}
          width={500}
          height={500}
          style={{ transform: `translateX(-${(currentIndex - 1) * 100}%)` }}
          priority
        />
        <Image
          src="/oveja.png"
          alt="oveja"
          className={`${style.img}`}
          width={500}
          height={500}
          style={{ transform: `translateX(-${(currentIndex - 1) * 100}%)` }}
          priority
        />
      </div>
      <div className="flex justify-center gap-2">
        <button onClick={handleClickPrev}>Anterior</button>
        <button onClick={handleClickNext}>Siguiente</button>
      </div> */}

      {/* <div className="flex flex-col w-full h-96 lg:flex-row gap-2 mx-auto bg-[#D9D9D9]">
        <div className="grid flex-grow h-80 w-20 card bg-light-gray rounded-box place-items-center">
          content
        </div>

        <div className="grid flex-grow h-80 w-20 card bg-light-gray rounded-box place-items-center">
          content
        </div>
      </div> */}
    </>
  );
};

export default Testimonios;
