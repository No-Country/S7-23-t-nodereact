import React from "react";
import Layout from "../../components/Layout/Layout";
import style from "./mercadopago.module.css";
const index = () => {
  const mp = new MercadoPago("TEST-52f48af5-4c23-4fe4-8840-91a58fecc08d");
  const bricksBuilder = mp.bricks();

  mp.bricks().create("wallet", "wallet_container", {
    initialization: {
      preferenceId: "<PREFERENCE_ID>",
    },
  });
  console.log(mp);
  return (
    <div>
      <div id="wallet_container"></div>
    </div>
  );
};

export default index;
