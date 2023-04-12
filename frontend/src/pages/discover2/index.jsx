import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import Link from "next/link";

const Discover2 = () => {
  return (
    <Layout>
      <div className="block w-[80%] md:w-[60%] h-[70%] mx-auto mt-28 mb-10 bg-font-text  shadow-sm shadow-text rounded-lg">
        <div className="w-[90%] mx-auto card lg:card-side bg-transparent pt-5">
          <figure>
            <Image width={300} height={300} src="/oveja.png" alt="oveja" />
          </figure>
          <div className="card-body">
            <p className="font-bold text-text font-Manrope">
              Vas a colaborar en la campaña
            </p>
            <h2 className="font-extrabold text-text font-Manrope">
              Enviemos donaciones para los animales abandonados
            </h2>
            <p className="font-bold text-text font-Manrope">
              Tu colaboración será recibida por Pedro Martin
            </p>
          </div>
        </div>
        <h2 className="font-Manrope font-extrabold text-text mt-4 ml-12">
          Completá tus datos para ponerte en contacto con Pedro
        </h2>
        <form className="bg-font-text form-control gap-4 h-[100%] w-[100%] flex py-8 rounded-md items-center">
          <div className="flex justify-between gap-1 w-[90%]">
            <input
              type="tex"
              placeholder="Nombre"
              className="input input-lg w-[45%] bg-light-gray text-text"
            />

            <input
              type="text"
              placeholder="Apellido"
              className="input input-lg w-[45%] bg-light-gray text-text"
            />
          </div>
          <div className="flex justify-between gap-1 w-[90%]">
            <input
              type="text"
              placeholder="Ciudad"
              className="input input-lg w-[45%] bg-light-gray text-text"
            />

            <input
              type="text"
              placeholder="Pais"
              className="input input-lg w-[45%] bg-light-gray text-text"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="input input-lg w-[90%] bg-light-gray text-text"
          />

          <input
            type="text"
            placeholder="linkedin"
            className="input input-lg w-[90%] bg-light-gray text-text"
          />

          <input
            type="text"
            placeholder="Github"
            className="input input-lg w-[90%] bg-light-gray text-text"
          />

          <input
            type="text"
            placeholder="Portafolio"
            className="input input-lg w-[90%] bg-light-gray text-text"
          />

          <textarea
            className="textarea textarea-ghost bg-light-gray w-[90%]"
            placeholder="Cuenta por qué quieres participar en este proyecto"
          ></textarea>
          <button className="w-[90%] mt-8 btn btn-wide text-font-text hover:text-font-text bg-color-accent rounded-md border-0">
            ENVIAR
          </button>
        </form>
        <small className="ml-4 pb-4 font-bold text-text font-Manrope">
          Al hacer click en enviar aceptas los términos y condiciones.
        </small>
      </div>
    </Layout>
  );
};

export default Discover2;
