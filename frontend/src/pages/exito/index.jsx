import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./exito.module.css";

const exito = () => {
  return (
    <>
      <Layout>
        <div
          className={`${style.box} flex justify-center items-center bg-light-gray w-[90%] h-[500px] my-40 mx-auto lg:pb-10`}
        >
          <div className=" h-[90%] text-center ">
            <div className="h-[100%] my-auto py-4">
              <h1 className="text-text text-5xl font-bold mt-5 mb-5">
                ¡Felicitaciones! Tu campaña fue publicada.
              </h1>
              {/* <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p> */}
              <Link
                href="/"
                className="btn text-text hover:text-font-text bg-font-text hover:bg-color-accent"
              >
                Volver a inicio
              </Link>
              <Link href="/post" className=" ml-9 btn bg-color-accent">
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
