import Image from "next/image";
import DatosPersonales from "./DatosPersonales";
import MisCampanas from "./MisCampanas";
import MisFinanciamientos from "./MisFinanciamientos";
import MisColaboraciones from "./MisColaboracion";


const MisDatos = () => {
    return (
        <div className="relative w-full h-screen inset-0 my-4 bg-transparent flex items-start justify-center">
            <div className="flex flex-col h-4/5 px-10 py-24 bg-white  w-72">
                <div className=" space-y-1">
                    <div className="flex items-center">
                    <figure className="relative fit-c px-0 pt-5 w-40 h-40">
                        <Image
                            src="/avatar-man.png"
                            alt="Shoes"
                            width={150}
                            height={150}
                            className="rounded-full absolute -top-16"
                            ostyle={{ objectFit: 'cover' }}
                        />
                    </figure>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-6 text-sm">
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center pb-6 space-x-3 border-b border-l-text"
                                >
                                    <span className="font-bold  text-[#000000] manroper font-Manrope hover:text-color-accent active:text-accent-hover">Datos Personales</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center space-x-3 pb-6 border-b border-l-text"
                                >
                                    <span className="font-bold  text-[#000000] manroper font-Manrope hover:text-color-accent active:text-accent-hover">Mis Campañas</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center  space-x-3 pb-6  border-b border-l-text"
                                >
                                    <span className="font-bold  text-[#000000] manroper font-Manrope hover:text-color-accent active:text-accent-hover">Mis Financiamientos</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center  space-x-3 pb-6  border-b border-l-text"
                                >
                                    <span className="font-bold  text-[#000000] manroper font-Manrope hover:text-color-accent active:text-accent-hover">Mis Colaboraciones</span>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container h-full mx-auto mt-0">                
                   
                    <div className="w-full h-4/5 px-4 py-5 bg-white rounded-lg ">
                        <div className="text-sm font-medium text-gray-500 truncate  ">
                            <MisColaboraciones/>
                        </div>
                       
                    </div>
                    
                    
                
            </div>
        </div>
      
    );
  };
  
  export default MisDatos;