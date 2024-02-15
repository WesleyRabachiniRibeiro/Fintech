import React from "react";
import { useData } from "../Context/DataContext";
import SaleGraphic from "../Components/SaleGraphic";

const Summary = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <section>
      <div className="summary flex mb">
        <div className="box">
          <h2>Vendas:</h2>
          <span>
            {data
              .filter((item) => item.status !== "falha")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Recebido:</h2>
          <span>
            {data
              .filter((item) => item.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Processando:</h2>
          <span>
            {data
              .filter((item) => item.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <SaleGraphic data={data}/>
      </div>
    </section>
  );
};

export default Summary;
