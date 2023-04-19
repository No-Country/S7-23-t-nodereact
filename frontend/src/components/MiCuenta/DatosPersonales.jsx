import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DatosPersonales = () => {
  const users = useSelector((state) => state.user);
  const usersAll = useSelector((state) => state.userAll);
  const [first, setfirst] = useState();

  const filter = () => usersAll.filter((f) => f.email === users.email);

  useEffect(() => {
    setfirst(filter());
  }, [users]);
  
  console.log(first);
  return (
    <div className="mt-10">
      <h2 className="font-kanit font-bold text-text text-4xl">PERFIL</h2>

      <ul className="mt-8 pt-2 pb-4 space-y-6 text-sm ">
        <li className="rounded-sm w-4/5 grid grid-cols-5">
          <div
            href="#"
            className=" col-start-1 col-end-3  items-center pb-6 space-x-3 border-b border-l-text"
          >
            <span className="font-bold  text-[#000000] manroper font-Manrope hover:text-color-accent active:text-accent-hover">
              Nombre de usuario
            </span>
          </div>
          <div
            href="#"
            className=" col-start-3 col-end-5 items-center pb-6 space-x-3 border-b border-l-text"
          >
            <span className="font-bold">
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="border-0 bg-transparent py-0 pl-1 text-gray-900 placeholder:text-dark-gray focus:ring-0 sm:text-sm sm:leading-6"
                placeholder={first[0]?.userName}
              />
            </span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 col-start-5 col-end-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </li>
        <li className="rounded-sm w-4/5 grid grid-cols-5">
          <div
            href="#"
            className="col-start-1 col-end-3 items-center space-x-3 pb-6 border-b border-l-text"
          >
            <span className="font-bold  text-[#000000] manroper font-Manrope hover:text-color-accent active:text-accent-hover">
              Email
            </span>
          </div>
          <div
            href="#"
            className="col-start-3 col-end-5 items-center space-x-3 pb-6 border-b border-l-text"
          >
            <span className="font-bold">
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="border-0 bg-transparent py-0 pl-1 text-gray-900 placeholder:text-dark-gray focus:ring-0 sm:text-sm sm:leading-6"
                placeholder={first[0]?.email}
              />
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 col-start-5 col-end-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </li>
        <li className="rounded-sm w-4/5 grid grid-cols-5">
          <div
            href="#"
            className="col-start-1 col-end-3 items-center  space-x-3 pb-6  border-b border-l-text"
          >
            <span className="font-bold  text-[#000000] manroper font-Manrope hover:text-color-accent active:text-accent-hover">
              Fecha de Nacimiento
            </span>
          </div>
          <div
            href="#"
            className="col-start-3 col-end-5 items-center  space-x-3 pb-6  border-b border-l-text"
          >
            <span className="font-bold">
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="border-0 bg-transparent py-0 pl-1 text-gray-900 placeholder:text-dark-gray focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="26 / 10 / 1993"
              />
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 col-start-5 col-end-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </li>
        <li className="rounded-sm w-4/5 grid grid-cols-5">
          <div
            href="#"
            className="col-start-1 col-end-3 items-center  space-x-3 pb-6  border-b border-l-text"
          >
            <span className="font-bold  text-[#000000] manroper font-Manrope hover:text-color-accent active:text-accent-hover">
              Pais
            </span>
          </div>
          <div
            href="#"
            className="col-start-3 col-end-5 items-center  space-x-3 pb-6  border-b border-l-text"
          >
            <span className="font-bold">
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="border-0 bg-transparent py-0 pl-1 text-gray-900 placeholder:text-dark-gray focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Colombia"
              />
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 col-start-5 col-end-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </li>
      </ul>
      <button className="mt-4 rounded-full Kanit font-kanit font-medium py-2 px-3 border-color-accent border-2 bg-font-text text-black hover:border-accent-hover hover:bg-accent-hover hover:text-font-text">
        Editar perfil
      </button>
    </div>
  );
};

export default DatosPersonales;
