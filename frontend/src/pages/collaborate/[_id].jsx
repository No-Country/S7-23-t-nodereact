import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const collaborateDetails = ({ datas }) => {
  return (
    <Layout>
      <div className="w-[95%] mx-auto mt-[112px]  mb-10  ">
        <h1
          className=" text-2xl  font-Manrope  font-extrabold  mt-7 sm:mt-10 text-text
          sm:text-3xl  md:text-4xl  lg:text-5xl"
        >
          {datas.title}
        </h1>

        <div className="sm:flex sm:gap-5 sm:mt-6 md:gap-3  xl:gap-16  ">
          <div
            className="w-full  sm:rounded-[15px] sm:shadow-2xl 
            sm:basis-[60%]  min-[878px]:basis-[60%] min-[878px]:h-[320px] lg:basis-[70%]  lg:h-[400px]  "
          >
            <img
              className="w-full sm:h-full sm:w-full  bg-cover rounded-[15px]"
              src={datas.img}
              alt=""
            />
          </div>

          <div
            className=" sm:border-[2px] sm:border-[#dfdada] sm:rounded-[15px] sm:shadow-2xl   
             sm:p-4 sm:basis-[50%] min-[878px]:basis-[40%]   lg:w-[300px] lg:basis-[40%]  lg:h-[400px]  
             "
          >
            <div className="w-[100%]  flex justify-between px-1  mt-2 lg:mt-6">
              <span className="font-bold text-lg text-[#000000]  font-Manrope lg:text-2xl">
                5 colaboradores
              </span>
              <span className="font-bold text-lg text-[#000000]  font-Manrope lg:text-2xl">
                {datas.parcialAmount === 0
                  ? 0
                  : Math.ceil((datas.parcialAmount * 100) / datas.totalAmount)}
                %
              </span>
            </div>
            <div
              className={`w-full mx-auto h-[22px] rounded-[40px] bg-[#D9D9D9] mt-2 `}
            >
              <div
                style={{
                  width: `${
                    datas.parcialAmount === 0
                      ? 0
                      : Math.ceil(
                          (datas.parcialAmount * 100) / datas.totalAmount
                        )
                  }%`,
                }}
                className={`${
                  datas.parcialAmount === 0 ? "h-0" : "h-[22px]"
                } bg-[#53B830] rounded-[40px] px-[10px]`}
              ></div>
            </div>
            <div className="flex flex-col-reverse">
              <Link href={`/collaborate/form/${datas._id}`}>
                <button
                  className="w-full h-[47px] sm:h-[40px] flex gap-4 justify-center items-center bg-color-accent rounded-[30px] mt-6 font-semibold font-Kanit text-font-text 
                min-[878px]:mt-10  lg:h-[50px]"
                >
                  <img
                    className="w-[30px] h-[30px] bg-color-accent"
                    src="/hands.svg"
                    alt=""
                  />
                  COLABORAR
                </button>
              </Link>
              <h2 className="text-text font-bold text-lg mt-3 font-Manrope  min-[878px]:mt-10  lg:text-2xl  ">
                ¡Con tu ayuda estamos más cerca de alcanzar nuestro objetivo!
              </h2>
            </div>
          </div>
        </div>

        <hr className="text-text mt-4 w-full" />
        <div className="flex gap-4 py-2 lg:py-6">
          <div>
            <span className="font-bold text-text text-sm lg:text-2xl">
              Se creó hace 7 días
            </span>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <img
              className="lg:w-[20px] lg:h-[20px]  bg-cover  text-text"
              src="/pigs.png"
              alt=""
            />
            <span className="font-Manrope text-text font-normal text-sm lg:text-2xl">
              Financiar
            </span>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <img
              className=" text-text lg:w-[20px] lg:h-[20px]"
              src="/manos.png"
              alt=""
              srcset=""
            />
            <span className="font-Manrope text-text font-normal text-sm lg:text-2xl">
              Colaborar
            </span>
          </div>
        </div>
        <hr className="text-text  w-full" />
        <div className="flex flex-col gap-5 my-4 lg:my-7">
          <p className="text-base font-normal font-Manrope text-text text-justify lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut
            possimus ab odio, amet architecto rem beatae iste sint repudiandae
            velit est minima deserunt reiciendis saepe id optio aperiam
            corporis.
          </p>

          <p className="text-base font-normal font-Manrope text-text text-justify lg:text-2xl ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque amet
            eligendi dolores accusantium exercitationem? Facilis quaerat quas
          </p>
        </div>
        <hr className="text-text my-6 w-full " />

        <div className="flex gap-2 my-5">
          <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full ">
            <img className="w-full h-full" src="/img.png" alt="" />
          </div>

          <div className=" flex flex-col gap-3">
            <h2 className="font-bold font-Manrope text-text text-lg mx-1 lg:text-2xl">
              Lisa Martínez
            </h2>
            <div className="flex flex-col">
              <span className="font-normal font-Manrope text-text text-lg mx-1 lg:text-2xl">
                Organizadora
              </span>
              <span className="font-normal font-Manrope text-text text-lg mx-1 lg:text-2xl">
                Colombia
              </span>
            </div>
            <button
              className="w-[120px] h-[40px] flex justify-center items-center text-text font-semibold font-Kanit text-sm p-3 border-2
               border-color-accent lg:text-xl rounded-[20px] lg:w-[160px]"
            >
              CONTACTAR
            </button>
          </div>
        </div>
      </div>

      <div></div>
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const Url = `${process.env.BACK_URL}api/projects/${query._id}`;
  const response = await fetch(Url);
  const datas = await response.json();

  return {
    props: {
      datas: datas,
    },
  };
}

export default collaborateDetails;
