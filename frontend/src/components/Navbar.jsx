import Link from "next/link";
import { useEffect, useState } from "react";
import Search from "./Search";
import Despegable from "@/components/Desplegable";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useDispatch } from "react-redux";
import { userGlobal } from "../../store/slices/users.slice";
import Image from "next/image";

export default function Home({ users }) {
  const [navbar, setNavbar] = useState(false);
  const { user, error, isLoading } = useUser();
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  const dispatch = useDispatch();

  dispatch(userGlobal(users));
  console.log(users);

  function postUser() {
    const URL = `${process.env.BACK_URL}api/users/new`;
    if (user) {
    }
    var dbUser = {
      userName: user?.name,
      name: user?.name,
      email: user?.email,
      picture: user?.picture,
    };
    dispatch(userGlobal(dbUser));
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(dbUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error));
    // .then((response) => console.log("Success:", response));
  }
  postUser();

  return (
    <div className="my-20 absolute z-40">
      <nav className="w-full  bg-font-text shadow fixed top-0 ">
        <div className="justify-between h-20 px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    width={100}
                    height={50}
                    className="block h-8 w-auto lg:hidden"
                    src={"/logo.png"}
                    alt="Your Company"
                  />
                  <Image
                    width={100}
                    height={50}
                    className="hidden h-8 w-auto lg:block"
                    src={"/logo.png"}
                    alt="Your Company"
                  />
                </div>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div
            className={` mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <Search />
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white l font-bold  text-[#000000] manroper font-Manrope">
                  <Despegable />
                </li>
                <li className="text-white font-bold  text-[#000000] manroper font-Manrope hover:text-color-accent active:text-accent-hover">
                  <Link href="/finance">FINANCIAR</Link>
                </li>
                <li className="text-white font-bold  text-[#000000] manroper font-Manrope hover:text-color-accent active:text-accent-hover">
                  <Link href="/collaborate">COLABORAR</Link>
                </li>
                <li className="text-white font-bold  text-[#000000] manroper font-Manrope hover:text-color-accent active:text-accent-hover">
                  <Link href="/post2/">PUBLICAR CAMPAÑA</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`pb-3 flex-initial space-x-1 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            {user ? (
              <>
                <div className="flex gap-4 bg-neutral-400 w-[300px]">
                  <div className="flex flex-col">
                    <span className="text-text ">Bienvenido</span>
                    <span>{user.name}</span>
                  </div>

                  <Image
                    width={50}
                    height={50}
                    src={user.picture}
                    className="rounded-full"
                    alt="user"
                  />
                  <button className=" rounded-full bg-color-accent text-font-text text-en">
                    <Link href="/api/auth/logout">Cerrar sesión</Link>
                  </button>
                </div>
              </>
            ) : (
              <Link href={"/api/auth/login"}>
                <button className="rounded-full Kanit font-kanit font-medium py-2 px-3 border-color-accent border-2 bg-font-text text-black hover:border-accent-hover hover:bg-accent-hover hover:text-font-text">
                  Iniciar sesión
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
