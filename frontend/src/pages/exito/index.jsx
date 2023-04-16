import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import style from "./exito.module.css";

const exito = () => {
  return (
    <>
      <Layout>
        <div
          className={`${style.box} flex justify-center items-center bg-light-gray w-[90%] h-[600PX] mt-28 mb-10 mx-auto shadow-sm shadow-text rounded-lg`}
        >
          <div className="h-[100%] my-auto py-4">
            <h1 className="text-text text-2xl font-bold mt-5">
              ¡Felicitaciones! Tu campaña fue publicada.
            </h1>
            <div className="flex justify-center mt-10">
              <Link
                href="/"
                className="btn text-text hover:text-font-text bg-font-text hover:bg-color-accent rounded-md border-0"
              >
                Volver a inicio
              </Link>
              <Link
                href="/post"
                className=" ml-9 btn bg-color-accent text-font-text hover:bg-font-text hover:text-text rounded-md border-0"
              >
                Ver campaña
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default exito;
