import { useDrag } from 'react-dnd'

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import {
  getClient,
  getOrderConfirmations,
  getProduct,
} from "../../repository/server";
import { IOrder } from "../../repository/types";
import { getRelativeDate } from "../../utils";
import NavButton from "../navigation/navbutton";
import Icons from "../svgs";

interface OrderProps extends IOrder {}

function useOrderFetcher(props: OrderProps) {
  const [relativeDate, setRelativeDate] = useState("");

  const { data: confimations } = useQuery(["confirmations", props.id], () =>
    getOrderConfirmations(props.id)
  );

  const { data: product } = useQuery(["product", props.product], () =>
    getProduct(props.id)
  );

  const { data: client } = useQuery(["client", props.product], () =>
    getClient(props.client)
  );

  useEffect(() => {
    const timer = setInterval(
      () => setRelativeDate(getRelativeDate(props.date)),
      1000
    );

    return () => clearInterval(timer);
  }, [props.date]);

  return { relativeDate, confimations, product, client };
}

const Order: FunctionComponent<OrderProps> = (props) => {
  const { relativeDate, confimations, product, client } =
    useOrderFetcher(props);

  const [_, drag, __] = useDrag(
    () => ({
      type: "orders",
      item: props,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  );


  return (
    <div ref={drag} className="border-white/5 group hover:shadow-lg hover:ring-2 ring-green-300 px-4 py-4 bg-gray-700 border rounded shadow-sm">
      <div className="flex items-start justify-between">
        <Link href={`/lines/order/${props.id}`}>
          <div className="text-sm text-gray-500">{relativeDate}</div>
          <h2 className="group-hover:text-green-200 text-lg font-medium text-white">
            {product?.metadata.name}
          </h2>
        </Link>

        <div>
          <button className="text-gray-500">
            <Icons.MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          {confimations?.map((confirmation) => (
            <div className="flex items-center justify-center w-8 h-8 text-sm font-medium text-white uppercase bg-gray-500 rounded-full">
              <span>{confirmation.user?.slice(0, 1)}</span>
            </div>
          ))}
        </div>
        <Link href={`/lines/order/${props.id}/confirm`}>
          <NavButton icon="CheckCircle" />
        </Link>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium text-white">Details</h3>
        <p className="text-md leading-6 text-gray-400">
          {product?.metadata.description}
        </p>
      </div>
      <div className="mt-6">
        {!!client && (
          <>
            <h3 className="text-sm font-medium text-white">Client</h3>
            <div className="flex items-center space-x-2">
              <Icons.User className="w-4 h-4 text-green-700" />
              <p className="text-md leading-6 text-gray-400">
                {client.name} - {client.phone}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Order;
