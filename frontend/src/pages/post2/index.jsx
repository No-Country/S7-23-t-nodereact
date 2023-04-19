import Layout from "@/components/Layout/Layout";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const FormularioFinanciar = () => {
  const [opcion1, setOpcion1] = useState(false);
  const [opcion2, setOpcion2] = useState(false);
  const [mostrarCampo, setMostrarCampo] = useState(false);
  const [first, setfirst] = useState();
  const { user, error, isLoading } = useUser();

  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      img: "https://www.infobilder.com/bilde-fot-dm26911.jpg",
    },
  });

  function handleOpcion1Change(e) {
    setOpcion1(e.target.checked);

    setMostrarCampo(!mostrarCampo);
  }

  function handleOpcion2Change(e) {
    setOpcion2(e.target.checked);
    setMostrarCampo(false);
  }

  const createNewProject = (data) => {
    const URL = `${process.env.BACK_URL}api/projects`;

    const datas = {
      ...data,
      autor: user.nickname,
      autorImg: user.picture,
    };

    axios
      .post(URL, datas)
      .then((res) => setfirst(res.data))
      .catch((err) => console.log(err));
  };

  console.log(first);
  return (
    <Layout>
      <h2 className="font-Manrope font-extrabold text-text mt-32 text-center lg:text-2xl">
        Completa estos datos para poder publicar tu campaña
      </h2>
      <div className="block w-[80%] md:w-[60%] h-[70%] mx-auto mb-4 mt-4 bg-font-text shadow-sm shadow-text rounded-lg">
        <Link href={`/`}>
          <img className="m-5 pt-5 cursor-pointer" src="/arrow.svg" alt="" />
        </Link>
        <form
          onSubmit={handleSubmit(createNewProject)}
          className="form-control h-[100%] w-[100%] flex py-8 rounded-md items-center "
        >
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              Titulo de la campaña
            </span>
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "El titulo es requerido" })}
            placeholder="ingresa titulo"
            className="input input-lg w-[90%] bg-light-gray  text-text border-1 border-[#000000]"
          />
          <p className="text-error">{errors.title?.message}</p>
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              Subtítulo de la campaña
            </span>
          </label>

          <input
            type="text"
            id="subtitle"
            {...register("subtitle", {
              required: "El Subtitulo es requerido",
            })}
            placeholder="ingresa sub titulo"
            className="input input-lg w-[90%] bg-light-gray  text-text border-1 border-[#000000]"
          />

          <p className="text-error">{errors.subtitle?.message}</p>
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              Descripcion de la campaña
            </span>
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: "la descripcion es requerida",
            })}
            placeholder="Ingresa descripcion de la campaña"
            className="textarea textarea-lg bg-light-gray w-[90%]   border-1 border-[#000000]"
          ></textarea>
          <p className="text-error">{errors.description?.message}</p>
          <label className="label">
            <span className="label-text  font-Manrope font-extrabold  text-text border-1 border-[#000000]">
              ¿Cuál es la categoría de tu campaña?
            </span>
          </label>
          <select
            id="category"
            {...register("category", {
              required: "el campo selecionar es requerido",
            })}
            className="select select-lg w-[90%] bg-light-gray font-Manrope font-extrabold text-text border-1 border-[#000000]"
          >
            <option>elegir categoria</option>
            <option>Alimentación</option>
            <option>Comunidad</option>
            <option>Criptomonedas</option>
            <option>Crowfunding</option>
            <option>Deporte</option>
            <option>Diseño</option>
            <option>Educación</option>
            <option>Redes sociales</option>
            <option>Viajes</option>
            <option>Videojuegos</option>
          </select>
          <p className="text-error">{errors.category?.message}</p>
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              ¿Buscas financiamiento?
            </span>
          </label>
          <div className="flex gap-20 justify-center w-[100%]">
            <input
              type="checkbox"
              checked={opcion1}
              onChange={handleOpcion1Change}
              className="my-8"
            />
            <label>Si</label>

            <input
              type="checkbox"
              checked={opcion2}
              onChange={handleOpcion2Change}
            />
            <label>No</label>
          </div>

          {mostrarCampo && (
            <div className="w-[100%] flex flex-col justify-center ">
              <input
                id="number"
                type="number"
                {...register("totalAmount", {
                  required: "el monto es requerido",
                })}
                placeholder="ingresar monto"
                className="input input-lg w-[90%] mx-auto  bg-light-gray  text-text border-1 border-[#000000]"
              />
              <div className="flex justify-center">
                <p className="text-error text-center">
                  {errors.totalAmount?.message}
                </p>
              </div>
            </div>
          )}

          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              ¿Buscas colaboradores?
            </span>
          </label>

          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              Fecha de expiracion de la campaña
            </span>
          </label>
          <input
            id="date"
            type="date"
            {...register("finaldate", { required: "la fecha es requerida" })}
            placeholder="ingresa titulo"
            className="input input-lg w-[90%] bg-light-gray  text-text border-1 border-[#000000] "
          />
          <p className="text-error">{errors.finaldate?.message}</p>
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              Por último, sube el link la imagen de tu campaña
            </span>
          </label>

          <div className="mb-4">
            <input
              id="img"
              type="text"
              {...register("img", {
                required: "link de la imagen es requerido",
              })}
              className="bg-white text-blue-600 border border-blue-600 rounded px-4 py-2 file-input-error"
            />
            <p className="text-error text-center"> {errors.img?.message} </p>
          </div>
          <button
            type="submit"
            className="btn btn-wide text-text hover:text-font-text bg-color-accent"
          >
            Publicar campaña
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default FormularioFinanciar;
