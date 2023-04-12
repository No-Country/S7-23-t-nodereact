import React from "react";

const NoveCard = ({ moves }) => {
  return (
    <div className="w-[320px]   h-[37.5rem] lg:w-[370px] bg-font-text">
      <div className="w-full h-[266.7px] p-[10px]  ">
        <img
          className="w-full h-full object-cover rounded-[20px] "
          src={moves.img}
          alt=""
        />
      </div>
      <div className="flex flex-col mt-3 ">
        <h1 className=" w-full h-[82px]  font-bold  text-[#000000] text-2xl px-[10px] manroper font-Manrope">
          {moves.title}
        </h1>
        <span className=" w-full h-[70px] font-normal text-[24px] line-clamp-2 px-[10px] mt-[10px]  font-Manrope">
          {moves.description}
        </span>
        <div className="w-[93%]  flex justify-between px-[10px]  mt-6">
          <span className="font-bold text-2xl text-[#000000]  font-Manrope">
            5 colaboradores
          </span>
          <span className="font-bold text-2xl text-[#000000]  font-Manrope">
            {moves.parcialAmount === 0
              ? 0
              : Math.ceil((moves.parcialAmount * 100) / moves.totalAmount)}
            %
          </span>
        </div>
        <div className=" w-[95%] m-auto h-[22px] rounded-[40px] bg-[#D9D9D9] mt-[12px] ">
          <div
            style={{
              width: `${
                moves.parcialAmount === 0
                  ? 0
                  : Math.ceil((moves.parcialAmount * 100) / moves.totalAmount)
              }%`,
            }}
            className={`${
              moves.parcialAmount === 0 ? "h-0" : "h-[22px]"
            } bg-[#53B830] rounded-[40px] px-[10px]`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NoveCard;
