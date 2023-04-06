import Image from "next/image";
import style from "./testimonio.module.css";

const Testimonios = ({ card }) => {
  return (
    <>
      <section className="w-[100%] m-auto">
        <div className={`${style.section} my-7`}>
          <div className="card w-80 h-52 bg-light-gray shadow-2xl">
            <figure className="px-10 pt-10">
              <Image
                src={card.image}
                alt="Shoes"
                width={100}
                height={100}
                className="rounded-full absolute -top-16"
              />
            </figure>
            <div className="card-body items-center text-center">
              <p className="text-text font-Manrope font-medium text-base">
                {card.description}
              </p>
              <h2 className="text-text font-Manrope text-base">{card.name}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonios;
