import React from "react";
import Image from "next/image";
import styles from "./onboarding.module.css";

const AnimationOnbordin = () => {
  return (
    <>
      <div className={`${styles.grow} bg-primary-color h-96`}>
        <h2 className="w-full mx-28 pt-20 tracking-tight flex font-bold font-Kanit text-font-text text-5xl">
          En
          <Image
            src="/logo-ideadev.jpeg"
            alt="idea dev Logo"
            className="mx-2"
            width={214}
            height={34}
            priority
          />
          queremos hacer realidad tus sueños
        </h2>

        <h3 className="flex font-Manrope text-font-text ml-28 text-2xl mt-4 font-semibold">
          {/* <i className="fa-solid fa-thin fa-check  w-2"></i>
          <i
            className="fa-sharp fa-regular fa-check"
            style={{ color: "#fdfdfd" }}
          ></i> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 448 512"
            className="mr-3 fill-font-text"
          >
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
          Seguridad
        </h3>
        <h3 className="flex font-Manrope text-font-text ml-28 text-2xl mt-4 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 448 512"
            className="mr-3 fill-font-text"
          >
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
          Eficienza
        </h3>
        <h3 className="flex font-Manrope text-font-text ml-28 text-2xl mt-4 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 448 512"
            className="mr-3 fill-font-text"
          >
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
          Proyectos Terminados
        </h3>
      </div>
    </>
  );
};

export default AnimationOnbordin;
