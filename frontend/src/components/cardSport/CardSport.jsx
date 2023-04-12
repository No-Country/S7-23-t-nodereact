import Link from "next/link";
import React from "react";

const CardSport = ({ sport }) => {
  return (
    <Link href={`/descubrirAlimentacion/${sport._id}`}>
      <div className="w-full   h-[570px] lg:w-[100%]   cursor-pointer   border-[2px] border-[#dfdada] rounded-[15px] shadow-2xl">
        <div className="w-full h-[266.7px] p-[10px]  ">
          <img
            src={sport.img}
            className="w-full h-full object-cover rounded-[20px] "
            alt={sport.img}
          />
        </div>
        <div className="flex flex-col mt-3 ">
          <h1 className=" w-full h-[82px]  font-bold  text-[#000000] text-2xl px-[10px] manroper font-Manrope">
            {sport.title}
          </h1>
          <span className=" w-full h-[70px] font-normal text-[24px] line-clamp-2 px-[10px] mt-[10px]  font-Manrope">
            {sport.description}
          </span>
          <div className="w-[93%]  flex justify-between px-[10px]  mt-6">
            <span className="font-bold text-2xl text-[#000000]  font-Manrope">
              5 colaboradores
            </span>
            <span className="font-bold text-2xl text-[#000000]  font-Manrope">
              {sport.parcialAmount === 0
                ? 0
                : Math.ceil((sport.parcialAmount * 100) / sport.totalAmount)}
              %
            </span>
          </div>

          <div
            className={`w-[95%] mx-auto h-[22px] rounded-[40px] bg-[#D9D9D9] mt-[12px]`}
          >
            <div
              style={{
                width: `${
                  sport.parcialAmount === 0
                    ? 0
                    : Math.ceil((sport.parcialAmount * 100) / sport.totalAmount)
                }%`,
              }}
              className={`${
                sport.parcialAmount === 0 ? "h-0" : "h-[22px]"
              } bg-[#53B830] rounded-[40px] px-[10px]`}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardSport;
