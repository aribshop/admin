"use client";

import { FunctionComponent, useContext, useState } from "react";
import { LineContext } from "../../contexts/lineContext";
import Order from "./order";

interface LineProps {}

const Line: FunctionComponent<LineProps> = () => {
  const { lineName, totalOrders, isLoading, orders } = useContext(LineContext);

  return (
    <div className="flex-grow  snap-start shrink-0 px-4  w-full max-w-xs  h-full overflow-y-auto">
      <h2 className="text-lg  font-medium text-gray-300">
        {lineName} ({totalOrders})
      </h2>

      <div className="mt-4 space-y-4">
        {isLoading && <span>Loading ... </span>}
        
        {orders.map((order) => (
          <Order {...order} key={order.id} />
        ))}
      </div>
    </div>
  );
};

export default Line;
