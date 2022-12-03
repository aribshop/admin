"use client";

import { FunctionComponent, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductItem from "./productItem";
import { getProducts } from "../../repository/server";

interface CatalogProps {
  siteId: string;
}

const Catalog: FunctionComponent<CatalogProps> = (props) => {
  const { data, isLoading } = useQuery(["products", props.siteId], () =>
    getProducts(props.siteId)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data?.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </>
  );
};

export default Catalog;
