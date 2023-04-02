import Image from "next/image";
import styles from "./onboarding.module.css";

const CardOnbording = () => {
  return (
    <>
      <section className="w-full">
        <h3 className=" ml-16 tracking-tight flex font-bold font-Kanit text-text text-5xl w-[83%] leading-loose">
          RECAUDA FONDOS O COLABORA EN PROYECTOS APLICAR SOLO TOMA UNOS MINUTOS
        </h3>
        <div className=" flex justify-around gap-9 my-10">
          <article className={`${styles.article} card w-96`}>
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
          <article className={`${styles.article} card w-96`}>
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
          <article className={`${styles.article} card w-96`}>
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
