"use client";
import { FunctionComponent, useContext, useEffect } from "react";
import { getOrders } from "../../../../repository/server";
import { useQuery } from "@tanstack/react-query";
import Order from "./order";
import { LinesContext } from "../../../contexts/linesContext";


interface OrdersProps {
  lineId: string;
  setTotal: (total: number) => void;
}

const Orders: FunctionComponent<OrdersProps> = (props) => {
  const linesContext = useContext(LinesContext);

  const { data, isLoading } = useQuery(
    ["orders", props.lineId, linesContext.search],
    () => getOrders(props.lineId),
    {
      select: (data) => data.filter((o) => o.line === props.lineId),
    }
  );

  useEffect(() => {
    // todo the query must return the total
    data && props.setTotal(data.length);
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data?.map((order) => (
        <Order key={order.id} {...order} />
      ))}
    </>
  );
};

export default Orders;
