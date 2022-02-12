import React from "react";
import { useParams } from "react-router-dom";

const GarageSalePage = () => {
  const params = useParams();

  return (
    <div>
      <h1>Venta de garaje {params.storeId}</h1>
    </div>
  );
};

export default GarageSalePage;
