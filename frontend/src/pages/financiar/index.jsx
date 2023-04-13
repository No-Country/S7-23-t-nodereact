import Layout from "@/components/Layout/Layout";
import CardFinanciar from "@/components/cardFinanciar/CardFinanciar";
import Filter from "@/components/filter/Filter";
import React from "react";

const index = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div className="w-[98%] mx-auto    mt-[112px]  ">
        <Filter />
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3  ">
          {data.map((financiar) => (
            <CardFinanciar key={financiar._id} financiar={financiar} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const Url = "http://localhost:5000/api/projects";
  const response = await fetch(Url);
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
}

export default index;
