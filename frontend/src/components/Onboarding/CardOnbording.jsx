import Image from "next/image";
import styles from "./onboarding.module.css";

const CardOnbording = () => {
  return (
    <>
      <div className="p-10">
        <h3 className="text-center  tracking-tight font-bold font-Kanit text-text text-sm xl:text-4xl leading-loose">
          RECAUDA FONDOS O COLABORA EN PROYECTOS APLICAR SOLO TOMA UNOS MINUTOS
        </h3>
      </div>
      <section className="w-[70%] sm:w-[80%] md:w-[80%] lg:w-[85%] m-auto">
        <div className=" flex flex-col sm:flex-row justify-around gap-9 my-10 gro">
          <article className={`${styles.article} w-[full] sm:w-96 `}>
            <figure>
              <Image
                src="/onboarding-1.png"
                alt="idea dev Logo"
                className="mx-2"
                width={414}
                height={314}
                priority
              />
            </figure>
          </article>
          <article className={`${styles.article} w-[full] sm:w-96 `}>
            <figure>
              <Image
                src="/onboarding-2.png"
                alt="idea dev Logo"
                className="mx-2"
                width={414}
                height={314}
                priority
              />
            </figure>
          </article>
          <article className={`${styles.article} w-[full] sm:w-96 `}>
            <figure>
              <Image
                src="/onboarding-3.png"
                alt="idea dev Logo"
                className="mx-2"
                width={414}
                height={314}
                priority
              />
            </figure>
          </article>
        </div>
      </section>
    </>
  );
};

export default CardOnbording;
