import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const { name, quantity, price, taste, supplier, photo, details } =
    useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <img src={photo} alt={photo} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{quantity}</p>
        <p>{price}</p>
        <p>{taste}</p>
        <p>{supplier}</p>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default CoffeeDetails;
