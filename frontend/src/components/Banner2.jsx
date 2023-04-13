import React from "react";

const Banner2 = () => {
  return (
    <>
      <div className='bg-[url("/dedos.png")] bg-center bg-cover  mt-[80px]  2xl:h-[700px] '>
        <div className="relative w-[80%] 2xl:h-[700px]">
          <img className="w-[100%] 2xl:h-[700px]" src="/Vector2.png" />
          <p
            className="text-white  font-extrabold text-font-text text-xl  min-[500px]:text-3xl 
           min-[500px]:top-6   min-[500px]:left-5  min-[768px]:text-[2.5rem]  min-[768px]:top-10   min-[768px]:left-8   absolute top-2 left-4 2xl:text-[3.5rem]    2xl:top-12  2xl:left-10 "
          >
            HAZ QUE TUS IDEAS SE MATERIALICEN
          </p>
          <button
            className="absolute flex justify-center items-center gap-2 flex-row-reverse  top-20 left-2 rounded-[40px] font-kanit p-1 font-semibold border-color-accent border-2 bg-color-accent text-font-text hover:border-accent-hover hover:bg-accent-hover
          min-[500px]:top-28   min-[500px]:left-3  min-[768px]:top-36  min-[768px]:left-5   min-[768px]:p-3  xl:top-56  xl:left-10 xl:p-4  2xl:p-6 2xl:top-56"
          >
            <span className="text-[10px] min-[500px]:text-base   min-[768px]:text-[1.8rem]  2xl:text-[2rem]      ">
              PUBLICAR CAMPAÑA
            </span>
            <img className=" " src="foco.png" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner2;
