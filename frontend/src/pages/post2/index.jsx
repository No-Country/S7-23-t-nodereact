import Layout from "@/components/Layout/Layout";

const FormularioFinanciar = () => {
  return (
    <Layout>
      <h2 className="font-Manrope font-extrabold text-text mt-4 text-center">
        Completa estos datos para poder publicar tu campaña
      </h2>
      <div className="block w-[80%] md:w-[60%] h-[70%] mx-auto mb-4 mt-4 bg-font-text  shadow-2xl">
        <form className="bg-font-text form-control h-[100%] w-[100%] flex py-8 rounded-md items-center">
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              Titulo de la campaña
            </span>
          </label>
          <input
            type="text"
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
            placeholder="ingresa sub titulo"
            className="input input-lg w-[90%] bg-light-gray"
          />
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              Descripcion de la campaña
            </span>
          </label>
          <textarea
            className="textarea textarea-ghost bg-light-gray w-[90%]"
            placeholder="Ingresa descripcion de la campaña"
          ></textarea>
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              ¿Cuál es la categoría de tu campaña?
            </span>
          </label>
          <select className="select w-[90%] bg-light-gray">
            <option disabled selected>
              elegir categoria
            </option>
            <option>Alimentación</option>
            <option>Comunidad</option>
            <option>Criptomonedas</option>
            <option>Crowfunding"</option>
            <option>Deporte</option>
            <option>Diseño</option>
            <option>Educación</option>
            <option>Redes sociales</option>
            <option>Viajes</option>
            <option>Videojuegos</option>
          </select>
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              ¿Buscas financiamiento?
            </span>
          </label>
          <div className="flex gap-20 justify-center w-[90%] w-[90%]">
            <input type="checkbox" checked className="" />

            <input type="checkbox" checked="checked" className="" />
            <div></div>
            <input
              type="tex"
              placeholder="ingresar monto"
              className="input input-ghost w-[90%] bg-light-gray text-text"
            />
          </div>
          <label className="label">
            <span className="label-text text-text font-Manrope font-extrabold">
              ¿Buscas colaboradores?
            </span>
          </label>
          <div className="flex gap-20 justify-center w-[90%]">
            <input type="checkbox" checked className="" />

            <input type="checkbox" checked="checked" className="" />
            <div></div>
            <input
              type="tex"
              placeholder="ingresa cantidad de colaboradores"
              className="input input-ghost w-[90%] bg-light-gray text-text"
            />
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
            {/* <label
              for="archivos"
              className="cursor-pointer bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg border border-gray-300"
            >
              Seleccionar archivo
            </label> */}
            <input
              type="file"
              name="archivo"
              className="bg-white text-blue-600 border border-blue-600 rounded px-4 py-2 file-input-error"
            />
          </div>
          <button className="btn btn-wide text-text hover:text-font-text bg-color-accent">
            Publicar campaña
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default FormularioFinanciar;
