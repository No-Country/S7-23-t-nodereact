import React from "react";

const ProyDestac = () => {
  return (
    <div className="w-[400px] h-[600px] bg-font-text">
      <div className="w-[400px] h-[266.7px] p-[10px]  ">
        <img
          className="w-full h-full object-cover rounded-[20px] "
          src="/oveja.png"
          alt=""
        />
      </div>
      <div className="flex flex-col mt-3 ">
        <h1 className=" w-full h-[82px]  font-bold  text-[#000000] text-3xl px-[10px] manroper font-Manrope">
          Quiero lograr que existan más vegetarianos
        </h1>
        <span className=" w-full h-[70px] font-normal text-[24px] line-clamp-2 px-[10px] mt-[10px]  font-Manrope">
          Protejamos a los animales y cambiemos nuestro estilo de ...
        </span>
        <div className="w-[93%]  flex justify-between px-[10px]  mt-6">
          <span className="font-bold text-2xl text-[#000000]  font-Manrope">
            5 colaboradores
          </span>
          <span className="font-bold text-2xl text-[#000000]  font-Manrope">
            15%
          </span>
        </div>
        <div className=" w-full h-[22px] rounded-[40px] bg-[#D9D9D9] mt-[12px]">
          <div className="w-[30%] h-[22px] bg-[#53B830] rounded-[40px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProyDestac;
