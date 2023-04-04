import React from "react";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";

const index = () => {
  return (
    <Layout>
      <div className="w-full h-[82px] ">
        <div className="w-[90%]   h-[82px] m-auto flex justify-between items-center">
          <img src="/logo.png" alt="" />
          <span className="font-Manrope text-base text-text font-semibold">
            ¿Tienes cuenta?{" "}
            <Link
              href="/register"
              className="text-[#0703D9] text-base font-semibold "
            >
              Regístrate
            </Link>
          </span>
        </div>
      </div>

      <div className="max-w-[380px]  h-auto  m-auto border-2 border-[#FDFDFD] my-36 shadow-xl">
        <div className=" m-auto  h-48   flex items-center justify-center p-6  ">
          <h1 className="text-5xl p-4 text-center font-extrabold font-Kanit text-text">
            Iniciar sesión
          </h1>
        </div>{" "}
        <hr className="w-full border-1 border-[#000000] mt-2  " />
        <form className="grid grid-cols-1 w-[60%] m-auto  mt-16 gap-8">
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

          <div>
            <button className="w-full h-[83px] bg-color-accent rounded-[40px]">
              <span className="font-semibold font-Kanit text-2xl text-light-gray">
                {" "}
                INICIAR SESIÓN
              </span>
            </button>
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
        <hr className="w-full border-1 border-[#000000] mt-2  " />
        <h2 className="font-Manrope font-normal text-text text-2xl text-center my-12">
          ¿Olvidaste tu contraseña?
        </h2>
      </div>
    </Layout>
  );
};

export default index;
