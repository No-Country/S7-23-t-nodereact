import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import { parse } from "postcss";
import React, { useState } from "react";

const feedingFinance = ({ datas }) => {
  const [amount, setInputValue] = useState(100);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    if (isLoading) return; // Evitar que el usuario envíe varias solicitudes mientras se está procesando una.

    setIsLoading(true);
    const payUrl = `http://localhost:5000/api/projects/pay/${datas._id}`;
    console.log(datas._id)

    try {
      
   
    const response = await fetch(payUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectId: datas._id,
        amount: parseInt(amount),
        userId:"642ae88a3e2ddb5011988a86",
      }),
    });
    console.log(response)
    const responseData = await response.json();
    window.location.href = responseData;
  } catch (error) {
    console.error(error);
  } finally {
    setTimeout(() => {
      setIsLoading(false);
    }, 10000); // Deshabilitar temporalmente el botón durante 10 segundos después de enviar la solicitud.
  }
};
  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };



  return (
    <Layout>
      <div
        className="w-[95%] mx-auto mt-24  mb-10 sm:w-[90%] md:w-[80%] lg:w-[78%]   sm:border-[2px] sm:border-[#dfdada] sm:rounded-[15px] sm:shadow-2xl   
        sm:p-4 md:mt-[112px]   md:mb-10 "
      >
        <Link href={`/feeding/${datas._id}`}>
          <img className="my-6 cursor-pointer" src="/arrow.svg" alt="" />
        </Link>
        <div className="sm:flex sm:gap-6 ">
          <div className="sm:flex sm:flex-col sm:order-2  sm:gap-2 lg:gap-6 ">
            <h1 className="font-Manrope font-extrabold text-[22px] text-text sm:text-xl sm:font-bold lg:text-2xl xl:text-3xl  ">
              Vas a financiar la campaña
            </h1>
            <h2 className="font-Manrope font-extrabold text-2xl text-text my-3  sm:text-xl sm:font-extrabold  sm:my-0 lg:text-2xl  xl:text-3xl">
              {datas.title}
            </h2>
            <p className="hidden sm:block font-Manrope font-bold text-sm text-text mt-4 sm:text-lg sm:font-bold sm:my-0 lg:text-xl xl:text-xl">
              Tu financiación será recibida por Lisa Martínez
            </p>
          </div>

          <div className="sm:order-1">
            <img className="w-full h-full rounded-2xl" src={datas.img} alt="" />
          </div>

          <p className="sm:hidden font-Manrope font-bold text-sm text-text mt-4">
            Tu financiación será recibida por Lisa Martínez
          </p>
        </div>
        <p className="font-Manrope font-bold text-base text-text my-5 ">
          Indica el monto que quieres entregar para financiar el proyecto
        </p>
        <div className="relative my-6">
          <input
            className=" bg-font-text  text-text w-full text-right h-[54px] text-lg pr-3 rounded-[30px]  font-Kanit font-semibold border-2 border-text outline-none     "
            placeholder="300"
            type="text"
            value={amount}
          onChange={handleInputChange}
          />
          <span className="absolute top-3 left-4 text-lg text-text font-Manrope font-bold">
            $
          </span>
        </div>
        <h3 className="font-Kanit text-xl font-bold text-text">
          Tu financiación
        </h3>
        <div className="flex justify-between my-5 ">
          <span className="text-lg font-bold font-Manrope text-text">
            Tu financiación
          </span>
          <span className="text-lg font-bold font-Manrope text-text  ">
            $3.000
          </span>
        </div>
        <p className="font-Manrope font-bold my-5 text-text text-base">
          ¡Gracias a esta financiación estamos más cerca de llegar a nuestro
          objetivo!
        </p>
        <button className="w-full my-6 sm:h-[65px] bg-[#009EE3] px-10 py-2 rounded-[40px]">
          <img
            className="w-full h-full rounded-[40px] object-contain"
            src="/pago.png"
            alt=""
            onClick={handleButtonClick}
          />
        </button>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const Url = `http://localhost:5000/api/projects/${query._id}`;
  const response = await fetch(Url);
  const datas = await response.json();

  return {
    props: {
      datas: datas,
    },
  };
}

export default feedingFinance;
