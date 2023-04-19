import Layout from "@/components/Layout/Layout";
import CardVideoGames from "@/components/cardVideoGames/CardVideoGames";
import Filter from "@/components/filter/Filter";
import React from "react";

const index = ({ filter }) => {
  return (
    <>
      <div className="relative flex justify-center items-center mt-20">
        <img
          className="w-full h-[316px] object-cover"
          src="/feeding.png"
          alt=""
        />
        <h1 className="font-Kanit font-extrabold text-5xl text-text absolute uppercase  ">
          Video Juegos
        </h1>
      </div>

      <Layout>
        <div className="w-[98%] mx-auto  my-10   ">
          <Filter />
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3  ">
            {filter.map((videoGames) => (
              <CardVideoGames key={videoGames._id} videoGames={videoGames} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const Url = `${process.env.BACK_URL}api/projects`;
  const response = await fetch(Url);
  const data = await response.json();
  const filter = data.filter((f) => f.category === "Video Juegos");

  return {
    props: {
      filter,
    },
  };
}
export default index;
