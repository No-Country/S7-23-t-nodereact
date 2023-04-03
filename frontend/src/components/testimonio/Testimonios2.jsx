import Image from "next/image";
import style from "./testimonio.module.css";

const Testimonios2 = () => {
  return (
    <>
      <section>
        <div className={`${style.section} gap-10 my-7`}>
          <div className="card w-2/5 h-56 bg-light-gray shadow-xl">
            <figure className="px-10 pt-10">
              <Image
                src="/avatar-man-2.png"
                alt="Shoes"
                width={100}
                height={100}
                className="rounded-full absolute -top-16"
              />
            </figure>
            <div className="card-body items-center text-center">
              <p className="text-text font-Manrope font-medium text-lg">
                Gracias a ideadev puede cumplir mi sueño de abrir mi propio
                emprendimiento.
              </p>
              <h2 className="text-text font-Manrope text-lg">Ana,Chile!</h2>
            </div>
          </div>
          <div className="card w-2/5 h-56 bg-light-gray shadow-xl">
            <figure className="px-10 pt-10">
              <Image
                src="/avatar-girl-2.png"
                alt="Shoes"
                width={100}
                height={100}
                className="rounded-full absolute -top-16"
              />
            </figure>
            <div className="card-body items-center text-center">
              <p className="text-text font-Manrope text-lg">
                Ideadev me dio la posibilidad de dar mis primeros pasos como
                desarrollador. ¡Gracias!
              </p>
              <h2 className="text-text font-Manrope text-lg">
                Juan,Puerto Rico!
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonios2;
