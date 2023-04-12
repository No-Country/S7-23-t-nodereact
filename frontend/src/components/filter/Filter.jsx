import React, { useState } from "react";

const Filter = () => {
  const [Btn, setBtn] = useState(false);
  const [Btn2, setBtn2] = useState(false);
  const [Btn3, setBtn3] = useState(false);

  const canbio = () => {
    setBtn(!Btn);
  };
  const canbio2 = () => {
    setBtn2(!Btn2);
  };
  const canbio3 = () => {
    setBtn3(!Btn3);
  };

  return (
    <div className="flex justify-between    sm:justify-end my-8 sm:gap-x-6 ">
      <div className="relative ">
        <div className="flex justify-between">
          <button
            onClick={canbio}
            className="bg-[#fffafa] py-1 px-3 rounded-lg text-text font-semibold text-sm sm:text-2xl  font-Manrope "
          >
            Tipo de rol
            <span className="py-1 px-1 mx-2 ">
              {!Btn ? (
                <i class="fa-solid fa-chevron-up fa-rotate-180"></i>
              ) : (
                <i class="fa-solid fa-chevron-up"></i>
              )}
            </span>
          </button>
        </div>
        {Btn ? (
          <div className="w-[80%] p-3 flex flex-col bg-[#FDFDFD] rounded-[20px] gap-2 sm:gap-1 absolute  top-10   font-semibold border-[2px] border-[#dfdada]   shadow-2xl">
            <a
              className="text-text font-Manrope font-semibold text-xs sm:text-base"
              href="#"
            >
              Frontend
            </a>
            <a
              className="text-text font-Manrope font-semibold text-xs sm:text-base"
              href="#"
            >
              Backend
            </a>
            <a
              className="text-text font-Manrope font-semibold text-xs sm:text-base"
              href="#"
            >
              UX/UI
            </a>
            <a
              className="text-text font-Manrope font-semibold text-xs sm:text-base"
              href="#"
            >
              Tester
            </a>
          </div>
        ) : (
          " "
        )}
      </div>

      <div className="relative">
        <button
          onClick={canbio2}
          className="bg-[#ffffff] py-1 px-3 rounded-lg  text-text font-semibold  text-sm  sm:text-2xl  font-Manrope"
        >
          Proyectos para
          <span className="py-1 px-1 mx-2 ">
            {!Btn2 ? (
              <i class="fa-solid fa-chevron-up fa-rotate-180"></i>
            ) : (
              <i class="fa-solid fa-chevron-up"></i>
            )}
          </span>
        </button>
        {Btn2 ? (
          <div className="w-[80%]  sm:w-full flex flex-col bg-[#FDFDFD] rounded-[20px] gap-2 sm:gap-1 p-3 absolute  top-10   font-semibold border-[2px] border-[#dfdada]   shadow-2xl">
            <a
              className="text-text font-Manrope font-semibold text-xs sm:text-base"
              href="#"
            >
              Financiar y Colaborar
            </a>
            <a
              className="text-text font-Manrope font-semibold text-xs sm:text-base"
              href="#"
            >
              Financiar
            </a>
            <a
              className="text-text font-Manrope font-semibold text-xs sm:text-base"
              href="#"
            >
              colaborar
            </a>
          </div>
        ) : (
          " "
        )}
      </div>

      <div className=" relative transition duration-150 ease-in-out">
        <button
          onClick={canbio3}
          className="bg-[#ffffff] py-1 px-3 rounded-lg  text-text font-semibold text-sm sm:text-2xl  font-Manrope"
        >
          Ordenar Por
          <span className="py-1 px-1 mx-2 ">
            {!Btn3 ? (
              <i class="fa-solid fa-chevron-up fa-rotate-180"></i>
            ) : (
              <i class="fa-solid fa-chevron-up"></i>
            )}
          </span>
        </button>
        {Btn3 ? (
          <div
            className="w-[80%]  sm:w-full  flex flex-col bg-[#FDFDFD] rounded-[20px]  gap-2 sm:gap-1 p-3  absolute  top-10  
           font-semibold border-[2px] border-[#dfdada]   shadow-2xl "
          >
            <a
              className="text-text font-Manrope font-semibold  text-xs sm:text-base"
              href="#"
            >
              mas recientes
            </a>
            <a
              className="text-text font-Manrope font-semibold text-xs sm:text-base"
              href="#"
            >
              Mejor Valorados
            </a>
            <a
              className="text-text font-Manrope font-semibold text-xs sm:text-base "
              href="#"
            >
              Cerca de mí
            </a>
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default Filter;
