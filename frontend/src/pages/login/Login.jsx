import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import React from "react";
import style from "./login.module.css";
import oveja from "../../../public/oveja.png";

const Login = () => {
  return (
    <Layout>
      <div className="w-full  ">
        <div className="w-[90%] h-[82px] m-auto flex justify-between items-center">
          <img src="/logo.png" alt="" />
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

        <div className="flex justify-center w-full  mt-12    pb-16  ">
          <div className="">
            <div
              className={`w-[450px] px-[68px] pt-[60px] pb-[40px]  h-auto p-14 ${style.bglogin} `}
            >
              <h1 className="text-3xl  text-left font-extrabold font-Kanit text-font-text mb-7">
                Iniciar sesión
              </h1>
              <hr className="w-full border-1 border-[#000000] my-8  " />

              <form className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <input
                    className="w-full h-[50px] bg-light-gray border-2 border-[#a6a3a3]
                font-Manrope font-bold text-xl pl-6 text-[#858383] rounded-[5px]"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="w-full h-[50px] bg-light-gray border-2 border-[#a6a3a3]
                font-Manrope font-bold text-xl pl-6 text-[#858383]  rounded-[5px]"
                    type="password"
                    placeholder="Contraseña"
                  />
                </div>
                <button className="w-full h-[50px] bg-color-accent rounded-[5px]">
                  <span className="font-semibold font-Kanit text-xl text-light-gray">
                    {" "}
                    INICIAR SESIÓN
                  </span>
                </button>

                <button className="w-full  h-[50px] shadow-lg">
                  <div className="relative flex  justify-center items-center  w-full ">
                    <span className="text-text font-Kanit font-semibold text-lg ">
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
              <hr className="w-full border-1 border-[#000000] my-10  " />
              <h2 className="font-Manrope font-normal text-text text-xl text-center my-8">
                ¿Olvidaste tu contraseña?
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
