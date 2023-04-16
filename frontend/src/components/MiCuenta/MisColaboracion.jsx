 import React, { useState } from "react";

const MisColaboraciones = () => {
  return (
    <div className="w-auto mt-10 ml-12 mr-8">
        <header className="w-auto grid grid-cols-6">
          <h2 className="col-start-1 col-end-4 font-kanit font-bold text-text text-4xl">
            Mis Colaboraciones
          </h2>
          <button class="col-start-5 col-end-7 mt-0 rounded-full Kanit font-kanit font-medium py-2 px-3 border-color-accent border-2 bg-color-accent text-font-text hover:border-accent-hover hover:bg-accent-hover">
                <div class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                    
                    <span class="ml-2">Colaborar</span>
                </div>
         </button>
        </header>

        <div className="w-auto my-12 grid grid-cols-2 gap-10 " >
                <div className="col-start-1 col-end-2 w-auto   h-[33.5rem] bg-font-text ">
                <div className="w-auto h-[266.7px]  justify-center  ">
                            <img
                            className="w-auto h-auto  rounded-[20px] object-none objet-center m-auto "
                            src="/oveja.png"
                            alt=""
                            />
                        </div>
                        <div className="flex flex-col mt-3 ">
                            <h1 className=" w-auto auto h-[82px] font-bold  text-[#000000] text-2xl px-[10px] manroper font-Manrope">
                            Ayudanos a crear nuestra biotienda online
                            </h1>
                            <span className=" w-full h-[70px] font-normal text-[24px] line-clamp-2 px-[10px] mt-[10px]  font-Manrope">
                            Volver a colaborar
                            </span>
                                
                        </div>
                </div>
                <div className="col-start-2 col-end-3 w-auto   h-[33.5rem] bg-font-text ">
                        <div className="w-auto h-[266.7px]  justify-center  ">
                            <img
                            className="w-auto h-auto  rounded-[20px] object-none objet-center m-auto "
                            src="/oveja.png"
                            alt=""
                            />
                        </div>
                        <div className="flex flex-col mt-3 ">
                            <h1 className=" w-auto auto h-[82px] font-bold  text-[#000000] text-2xl px-[10px] manroper font-Manrope">
                            Ayudanos a crear nuestra biotienda online
                            </h1>
                            <span className=" w-full h-[70px] font-normal text-[24px] line-clamp-2 px-[10px] mt-[10px]  font-Manrope">
                            Volver a colaborar
                            </span>
                                
                        </div>
            </div>
      
        </div>
                        
    </div>


);
};

export default MisColaboraciones;