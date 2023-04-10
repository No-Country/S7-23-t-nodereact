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
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
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