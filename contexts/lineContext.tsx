"use client";

import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getOrders } from "../repository/server";
import { ILine, IOrder } from "../repository/types";
import { LinesContext } from "./linesContext";

export const LineContext = createContext({
  lineName: "",
  totalOrders: 0,
  isLoading: true,
  orders: [] as IOrder[],
});

type Props = {
  children: React.ReactNode;
  line: ILine;
};

export function LineProvider({ children, line }: Props) {
  const { search } = useContext(LinesContext);

  const { data:orders, isLoading } = useQuery(
    ["orders", line.id, search],
    () => getOrders(line.id,search),
    {
      select: (data) => data.filter((o) => o.line === line.id),
    }
  );

  const values = {
    lineName: line.name,
    totalOrders: orders?.length || 0,
    isLoading,
    orders: orders || [],
  };
  return <LineContext.Provider value={values}>{children}</LineContext.Provider>;
}
