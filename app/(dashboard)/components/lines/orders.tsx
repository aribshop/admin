"use client";
import { FunctionComponent } from "react";
import { getOrders } from "../../../../repository/server";
import {useQuery} from "@tanstack/react-query";
import Order from "./order";

interface OrdersProps {
  lineId: string;
}

const Orders: FunctionComponent<OrdersProps> = (props) => {
  const { data, isLoading } = useQuery(["orders", props.lineId], () =>
    getOrders(props.lineId)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data?.filter(a=>a.line==props.lineId).map((order) => (
        <Order key={order.id} />
      ))}
    </>
  );
};

export default Orders;

