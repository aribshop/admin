"use client";
import { useDrop } from 'react-dnd'


import { FunctionComponent, useContext, useState } from "react";
import { LineContext } from "../../contexts/lineContext";
import Order from "./order";
import { LinesContext } from '../../contexts/linesContext';

interface LineProps {}

const Line: FunctionComponent<LineProps> = () => {
  const { lineName, totalOrders, isLoading, orders } = useContext(LineContext);

  const [_, drop] = useDrop(() => ({
    accept: "orders",
    drop(item, monitor) {
      console.log(item);
    },
  }))

  return (
    <div ref={drop} className="snap-start shrink-0 flex-grow w-full h-full max-w-xs px-4 overflow-y-auto">
      <h2 className="text-lg font-medium text-gray-300">
        {lineName} ({totalOrders})
      </h2>

      <div className="mt-4 space-y-4" >
        {isLoading && <span>Loading ... </span>}
        
        {orders.map((order) => (
          <Order {...order} key={order.id} />
        ))}
      </div>
    </div>
  );
};

export default Line;
