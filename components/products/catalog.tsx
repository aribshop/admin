"use client";

import { FunctionComponent, useContext } from "react";
import ProductItem from "./productItem";
import { ProductsContext } from "../../contexts/productsContext";

const Catalog: FunctionComponent = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className=" py-4 grid grid-cols-3 px-1 -mx-1   flex-1 overflow-y-auto gap-4">
      
      {products?.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Catalog;
