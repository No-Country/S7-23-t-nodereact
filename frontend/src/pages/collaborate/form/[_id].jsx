import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Form = ({ datas }) => {
  return (
    <Layout>
      <div className="block w-[95%] md:w-[60%] h-[70%] mx-auto mt-28 mb-10 bg-font-text  shadow-sm shadow-text rounded-lg">
        <Link href={`/collaborate/${datas._id}`}>
          <img className="m-5 pt-5 cursor-pointer" src="/arrow.svg" alt="" />
        </Link>
        <div className="w-[90%] mx-auto card lg:card-side bg-transparent pt-5">
          <figure>
            <Image
              className="rounded-xl lg:rounded-r-xl"
              width={300}
              height={300}
              src={datas.img}
              alt="oveja"
            />
          </figure>
          <div className="card-body">
            <p className="font-bold text-text font-Manrope">
              Vas a colaborar en la campaña
            </p>
            <h2 className="font-extrabold text-text font-Manrope">
              {datas.title}
            </h2>
            <p className="font-bold text-text font-Manrope">
              Tu colaboración será recibida por Pedro Martin
            </p>
          </div>
        </div>
        <h2 className="font-Manrope font-extrabold text-text mt-4 text-center">
          Completá tus datos para ponerte en contacto con Pedro
        </h2>
        <form className="bg-font-text form-control gap-4 h-[100%] w-[95%] flex py-8 rounded-md items-center">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4 w-[100%] lg:w-[90%]">
            <input
              type="tex"
              name="name"
              placeholder="Nombre"
              className="input input-lg w-[90%] lg:w-[45%] bg-light-gray text-text border-1 border-[#000000]"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              className="input input-lg w-[90%] lg:w-[45%] bg-light-gray text-text border-1 border-[#000000]"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between  gap-4 w-[100%] lg:w-[90%]">
            <input
              type="text"
              name="city"
              placeholder="Ciudad"
              className="input input-lg w-[90%] lg:w-[45%] bg-light-gray text-text  border-1 border-[#000000] "
            />

            <input
              type="text"
              name="country"
              placeholder="Pais"
              className="input input-lg w-[90%] lg:w-[45%] bg-light-gray text-text border-1 border-[#000000]"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-lg w-[90%] bg-light-gray text-text border-1 border-[#000000]"
          />

          <input
            type="text"
            name="linkedin"
            placeholder="linkedin"
            className="input input-lg w-[90%] bg-light-gray text-text border-1 border-[#000000]"
          />

          <input
            type="text"
            name="github"
            placeholder="Github"
            className="input input-lg w-[90%] bg-light-gray text-text border-1 border-[#000000]"
          />

          <input
            type="text"
            name="portafolio"
            placeholder="Portafolio"
            className="input input-lg w-[90%] bg-light-gray text-text border-1 border-[#000000]"
          />

          <textarea
            name="textarea"
            className="textarea textarea-ghost bg-light-gray w-[90%] border-1 border-[#000000]"
            placeholder="Cuenta por qué quieres participar en este proyecto"
          ></textarea>
          <Link
            href={"/exito"}
            className="w-[90%] mt-8 py-8 btn   text-font-text hover:text-font-text bg-color-accent rounded-md border-0"
          >
            ENVIAR
          </Link>
        </form>
        <small className="ml-2 p-6 font-bold text-text font-Manrope">
          Al hacer click en enviar aceptas los términos y condiciones.
        </small>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const Url = `${process.env.BACK_URL}api/projects/${query._id}`;
  const response = await fetch(Url);
  const datas = await response.json();

  return {
    props: {
      datas,
    },
  };
}

export default Form;
