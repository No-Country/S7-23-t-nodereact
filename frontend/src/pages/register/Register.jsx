import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import React from "react";
import style from "./register.module.css";

const Register = () => {
  return (
    <Layout>
      <div className="w-full ">
        <div className="w-[90%] h-[82px] m-auto flex justify-between items-center">
          <img className="w-40 h-10" src="/logo.png" alt="" />

          {/* <span className="font-Manrope text-base text-text font-semibold">
            ¿Tienes cuenta?{" "}
            <Link
              href="/register"
              className="text-[#0703D9] text-base font-semibold "
            >
              Regístrate
            </Link>
          </span> */}
        </div>

        <div className="flex justify-center w-full  mt-2 mb-14   	 ">
          <div
            className={`w-[450px]    p-9  sm:px-[68px] sm:pt-[60px] sm:pb-[40px]  h-auto ${style.bglogin}`}
          >
            <h1 className="text-xl  font-medium font-Kanit text-font-text  text-justify">
              Regístrate para comenzar a hacer realidad los sueños de miles de
              personas
            </h1>
            <hr className="w-full border-1 border-[#000000] my-6  " />

            <form className="flex flex-col gap-5">
              <div className="flex flex-col  gap-5   sm:flex-row gap-x-4">
                <input
                  className="w-full h-[50px] bg-light-gray border-2 border-[#a6a3a3]
              font-Manrope font-bold text-base pl-3 text-[#858383] rounded-[5px]"
                  type="text"
                  placeholder="Nombres"
                />
                <input
                  className="w-full h-[50px] bg-light-gray border-2 border-[#a6a3a3]
              font-Manrope font-bold text-base pl-3 text-[#858383]  rounded-[5px]"
                  type="text"
                  placeholder="Apellidos"
                />
              </div>

              <input
                className="w-full h-[50px] bg-light-gray border-2 border-[#a6a3a3]
              font-Manrope font-bold text-base pl-6 text-[#858383] rounded-[5px]"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-full h-[50px] bg-light-gray border-2 border-[#a6a3a3]
              font-Manrope font-bold text-base pl-6 text-[#858383]  rounded-[5px]"
                type="password"
                placeholder="Contraseña"
              />

              <div className="flex flex-col ">
                <span className="font-bold font-Manrope text-base text-text mb-1">
                  Tu contraseña debe tener al menos:
                </span>

                <span className="font-normal font-Manrope text-sm text-text">
                  8 caracteres
                </span>
                <span className="font-normal font-Manrope  text-sm text-text">
                  Una letra mayúscula
                </span>
                <span className="font-normal font-Manrope text-sm text-text">
                  na letra minuscula{" "}
                </span>
                <span className="font-normal font-Manrope text-sm text-text">
                  {" "}
                  Un número o simbolo
                </span>
              </div>
              <button className="w-full h-[50px] bg-color-accent rounded-[5px]">
                <span className="font-medium font-Kanit text-xl text-light-gray">
                  {" "}
                  INICIAR SESIÓN
                </span>
              </button>

              <div>
                <p className="text-xs font-bold font-Manrope text-text ">
                  Al continuar, aceptas las{" "}
                  <a
                    className="text-[#0703D9] text-xs  font-semibold font-Manrope"
                    href=""
                  >
                    condiciones{" "}
                  </a>
                  de Ideadev y muestras conformidad con nuestra
                  <a
                    className="text-[#0703D9] text-xs font-semibold font-Manrope"
                    href=""
                  >
                    {" "}
                    declaración de privacidad.
                  </a>
                </p>
              </div>

              <div className="flex  items-center justify-between">
                <div>
                  <hr className="border-1 border-[#000000]  w-[130px]  " />
                </div>
                <div>
                  <p className="text-text font-Manrope font-normal text-xl ">
                    ó
                  </p>
                </div>
                <div>
                  <hr className="border-1 border-[#000000]  w-[130px]  " />
                </div>
              </div>

              <button className="w-full  h-[50px] shadow-lg">
                <div className="relative flex  justify-center items-center  w-full ">
                  <span className="text-text font-Kanit font-medium text-lg ">
                    CONTINUAR CON GOOGLE
                  </span>
                  <img
                    className="absolute h-[28px] w-[28px] left-0"
                    src="/iconGoogle.png"
                    alt=""
                  />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
