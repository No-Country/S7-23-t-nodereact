import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <Layout>
      <div className="w-full h-[82px] ">
        <div className="w-[90%] h-[82px] m-auto flex justify-between items-center">
          <img src="/logo.png" alt="" />
          <span className="font-Manrope text-base text-text font-semibold">
            ¿Tienes cuenta?{" "}
            <Link
              href="/login"
              className="text-[#0703D9] text-base font-semibold "
            >
              Iniciar sesión
            </Link>
          </span>
        </div>
      </div>

      <div className="w-[80%] h-auto  m-auto border-2 border-[#dad0d0] my-36 shadow-xl">
        <div className=" m-auto  h-48   flex items-center justify-center p-6  ">
          <h1 className="text-5xl p-4 text-center font-extrabold font-Kanit text-text">
            Regístrate para comenzar a hacer realidad los sueños de miles de
            personas
          </h1>
        </div>
        <hr className="w-full border-1 border-[#000000] mt-2  " />
        <div>
          <form className="grid grid-cols-1 w-[60%] m-auto  gap-8">
            <div className="flex justify-between mt-8">
              <div>
                <input
                  className="w-[312px] h-[99px] bg-light-gray border-2 border-[#a6a3a3] 
                font-Manrope font-bold text-3xl pl-6 text-[#858383]  "
                  type="text"
                  placeholder="Nombres"
                />
              </div>
              <div>
                <input
                  className="w-[312px] h-[99px] bg-light-gray border-2 border-[#a6a3a3]
                font-Manrope font-bold text-3xl pl-6 text-[#858383]  outline-none "
                  type="text"
                  placeholder="Apellidos"
                />
              </div>
            </div>
            <div>
              <input
                className="w-full h-[99px] bg-light-gray border-2 border-[#a6a3a3]
              font-Manrope font-bold text-3xl pl-6 text-[#858383] outline-non"
                type="text"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className="w-full h-[99px] bg-light-gray border-2 border-[#a6a3a3]
              font-Manrope font-bold text-3xl pl-6 text-[#858383]"
                type="password"
                placeholder="Contraseña"
              />
            </div>
            <span className="font-bold font-Manrope text-3xl text-text">
              Tu contraseña debe tener al menos:
            </span>
            <div className="flex flex-col">
              <span className="font-normal font-Manrope text-2xl">
                8 caracteres
              </span>
              <span className="font-normal font-Manrope text-2xl">
                Una letra mayúscula
              </span>
              <span className="font-normal font-Manrope text-2xl">
                na letra minuscula{" "}
              </span>
              <span className="font-normal font-Manrope text-2xl">
                {" "}
                Un número o simbolo
              </span>
            </div>
            <div>
              <button className="w-full h-[83px] bg-color-accent rounded-[40px]">
                <span className="font-semibold font-Kanit text-2xl text-light-gray">
                  {" "}
                  REGISTRARME
                </span>
              </button>
            </div>
            <div>
              <p className="text-base font-semibold font-Manrope text-text ">
                Al continuar, aceptas las{" "}
                <a
                  className="text-[#0703D9] text-base font-semibold font-Manrope"
                  href=""
                >
                  condiciones{" "}
                </a>
                de Ideadev y muestras conformidad con nuestra
                <a
                  className="text-[#0703D9] text-base font-semibold font-Manrope"
                  href=""
                >
                  {" "}
                  declaración de privacidad.
                </a>
              </p>
            </div>
            <div className="flex  items-center justify-between">
              <div>
                <hr className="border-1 border-[#000000] w-[300px] " />
              </div>
              <div>
                <p className="text-text font-Manrope font-normal text-2xl ">
                  ó
                </p>
              </div>
              <div>
                <hr className="border-1 border-[#000000]  w-[300px]" />
              </div>
            </div>
            <div className="w-full  h-[84px] flex justify-center items-center  mb-8">
              <button className="w-96  h-[84px] shadow-lg">
                <div className="relative flex  justify-center items-center  w-full ">
                  <span className="text-text font-Kanit font-semibold text-2xl ">
                    CONTINUAR CON GOOGLE
                  </span>
                  <img
                    className="absolute h-[35px] w-[35px] left-0"
                    src="/iconGoogle.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default index;
