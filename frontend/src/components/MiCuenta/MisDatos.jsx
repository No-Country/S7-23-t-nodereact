import Image from "next/image";

const MisDatos = () => {
    return (
        <div className="relative w-full h-screen inset-0 my-1 bg-transparent flex items-start justify-center">
            <div className="flex flex-col h-auto px-10 py-24 bg-white shadow w-72">
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
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span>Datos Personales</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span>Mis Campañas</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span>Mis Financiamientos</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span>Mis Colaboraciones</span>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-12">                
                   
                    <div className="w-full h-auto px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                             ACA SECCIONES
                        </div>
                       
                    </div>
                    
                    
                
            </div>
        </div>
      
    );
  };
  
  export default MisDatos;