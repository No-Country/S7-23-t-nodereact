import { useState } from "react";

import Layout from "@/components/Layout/Layout";
import Link from "next/link";

const FormularioColaborar = () => {
  const [formulario, setFormulario] = useState({
    titulo: "",
    subtitulo: "",
    descripcion: "",
    categoria: "",
    financiamiento: false,
    colaboradores: false,
    fecha: "",
    imagen: null,
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // aquí se puede procesar la información del formulario
    console.log(formulario);
  };
  return (
    <Layout>
      <h2 className="font-Manrope font-extrabold text-text mt-4 text-center">
        Completa estos datos para poder publicar tu campaña
      </h2>
      <div className=" w-[80%] md:w-[60%] h-[70%] mx-auto mb-4 mt-4   shadow-2xl">
        <form className=" form-control h-[100%] w-[100%] flex py-8 rounded-md items-center bg-color-accent">
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              Titulo de la campaña
            </span>
          </label>
          <input
            type="text"
            name="titulo"
            value={formulario.titulo}
            onChange={handleChange}
            placeholder="ingresa titulo"
            className="input input-lg w-[90%] bg-light-gray"
          />
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              Subtítulo de la campaña
            </span>
          </label>
          <input
            type="text"
            name="subtitulo"
            value={formulario.subtitulo}
            onChange={handleChange}
            placeholder="ingresa sub titulo"
            className="input input-lg w-[90%] bg-light-gray"
          />
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              Descripcion de la campaña
            </span>
          </label>
          <textarea
            name="descripcion"
            value={formulario.descripcion}
            onChange={handleChange}
            placeholder="Ingresa descripcion de la campaña"
            className="textarea textarea-ghost bg-light-gray w-[90%]"
          ></textarea>
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              ¿Cuál es la categoría de tu campaña?
            </span>
          </label>
          <select
            name="categoria"
            value={formulario.categoria}
            onChange={handleChange}
            className="select w-[90%] bg-light-gray select-text"
          >
            <option>elegir categoria</option>
            <option className="w-50%">Alimentación</option>
            <option className="w-50%">Comunidad</option>
            <option className="w-50%">Criptomonedas</option>
            <option className="w-50%">Crowfunding</option>
            <option className="w-50%">Deporte</option>
            <option className="w-50%">Diseño</option>
            <option className="w-50%">Educación</option>
            <option className="w-50%">Redes sociales</option>
            <option className="w-50%">Viajes</option>
            <option className="w-50%">Videojuegos</option>
          </select>
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              ¿Buscas financiamiento?
            </span>
          </label>
          <div className="flex gap-20 justify-center w-[90%] w-[90%]">
            <input type="checkbox" checked className="" />

            <input type="checkbox" checked="checked" className="" />
          </div>
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              ¿Buscas colaboradores?
            </span>
          </label>
          <div className="flex gap-20 justify-center w-[90%]">
            <input type="checkbox" checked className="" />

            <input type="checkbox" checked="checked" className="" />
          </div>
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              Fecha de expiracion de la campaña
            </span>
          </label>
          <input
            type="date"
            placeholder="ingresa titulo"
            className="input input-ghost w-[90%] bg-light-gray text-text"
          />
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              Por último, sube la imagen de tu campaña en formato JPG o PNG
            </span>
          </label>

          <div class="mb-4">
            <input
              type="file"
              name="archivo"
              className="bg-white text-blue-600 border border-blue-600 rounded px-4 py-2 file-input-accent"
            />
          </div>
          <Link
            href="/exito"
            className="btn btn-wide text-text hover:text-font-text bg-color-accent"
          >
            Publicar campaña
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default FormularioColaborar;
