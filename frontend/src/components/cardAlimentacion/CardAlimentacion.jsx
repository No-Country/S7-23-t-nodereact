import Link from "next/link";
import React from "react";

const CardAlimentacion = ({ feeding }) => {
  return (
    <Link href={`/feeding/${feeding._id}`}>
      <div className="w-full   h-[570px] lg:w-[100%]   cursor-pointer   border-[2px] border-[#dfdada] rounded-[15px] shadow-2xl">
        <div className="w-full h-[266.7px] p-[10px]  ">
          <img
            src={feeding.img}
            className="w-full h-full object-cover rounded-[20px] "
            alt={feeding.img}
          />
        </div>
        <div className="flex flex-col mt-3 ">
          <h1 className=" w-full h-[82px]  font-bold  text-[#000000] text-2xl px-[10px] manroper font-Manrope">
            {feeding.title}
          </h1>
          <span className=" w-full h-[70px] font-normal text-[24px] line-clamp-2 px-[10px] mt-[10px]  font-Manrope">
            {feeding.description}
          </span>
          <div className="w-[93%] px-[10px]  mt-6">
            <p className="font-bold text-2xl text-[#000000]  font-Manrope text-center">
              ${feeding.parcialAmount} recaudados de ${feeding.totalAmount}
            </p>
          </div>

          <div
            className={`w-[95%] mx-auto h-[22px] rounded-[40px] bg-[#D9D9D9] mt-[12px]`}
          >
            <div
              style={{
                width: `${
                  feeding.parcialAmount === 0
                    ? 0
                    : Math.ceil(
                        (feeding.parcialAmount * 100) / feeding.totalAmount
                      )
                }%`,
              }}
              className={`${
                feeding.parcialAmount === 0 ? "h-0" : "h-[22px]"
              } bg-[#53B830] rounded-[40px] px-[10px]`}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardAlimentacion;
