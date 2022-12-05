"use client";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";

import { createContext, useEffect, useState } from "react";
import { getProducts } from "../repository/server";
import { IProduct } from "../repository/types";

export const ProductsContext = createContext({
  search: "",
  setSearch: (search: string) => {},
  selectedProductID: undefined as string | undefined,
  products: [] as IProduct[],
});

type Params = {
  children: React.ReactNode;
  siteId: string;
};

function useSelectedProduct() {
  const [selectedProductID, setSelectedProductID] = useState<
    string | undefined
  >();
  const pathName = usePathname();

  useEffect(() => {
    const match = pathName?.match(/products\/(.*)/);
    const selectedProductIDFromUrl = match ? match[1] : undefined;
    setSelectedProductID(selectedProductIDFromUrl);
  }, [pathName]);

  return { selectedProductID };
}

export function ProductsProvider({ children, siteId }: Params) {
  const [search, setSearch] = useState("");
  const { selectedProductID } = useSelectedProduct();

  const { data: products, isLoading } = useQuery(
    ["products", siteId, search],
    () => getProducts(siteId)
  );

  const values = {
    search,
    selectedProductID,
    setSearch,
    products: products || [],
  };
  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
}
