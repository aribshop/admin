import { useDrag } from "react-dnd";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  getClient,
  getOrderConfirmations,
  getProduct,
} from "../../repository/server";
import { IConfirmation, IOrder } from "../../repository/types";
import { getRelativeDate } from "../../utils";
import NavButton from "../navigation/navbutton";
import Icons, { IconType } from "../svgs";

interface OrderProps extends IOrder {}

function useOrderFetcher(props: OrderProps) {
  const [relativeDate, setRelativeDate] = useState("");

  const { data: confimations } = useQuery(["confirmations", props.id], () =>
    getOrderConfirmations(props.id)
  );

  const { data: product } = useQuery(["product", props.product], () =>
    getProduct(props.site, props.product)
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
      type: "orders", // todo use Next Line Id as a type here, so we prevent moving orders to other lines
      item: props,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );


  const title = product?.isCustom
    ? !!client && client.name
    : product?.metadata?.name;

  return (
    <div
      ref={drag}
      className="border-white/5 group hover:shadow-lg hover:ring-2 ring-green-300 px-4 py-4 bg-gray-700 border rounded shadow-sm"
    >
      <div className="flex items-start justify-between">
        <Link href={`/lines/order/${props.id}`}>
          <div className="text-sm text-gray-500">{relativeDate}</div>
          <h2 className="group-hover:text-green-200 text-lg font-medium text-white">
            {title}
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
              <ConfirmationIcon type={confirmation.type} />
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
			
          {/* todo refactor this to a component*/}
          {!product?.isCustom && product?.metadata.description}
          {product?.isCustom &&
            props.productValue?.fields?.map((field: any) => (
              <p className="text-sm leading-6 text-gray-400">
                {field.name} - {field.value}
              </p>
            ))}
        </p>
      </div>

      {product?.isCustom && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-white">Product</h3>
          <div className="flex items-center space-x-2">
            <Icons.User className="w-4 h-4 text-green-700" />
            <p className="text-md leading-6 text-gray-400">
              {product.metadata.name} - {props.price}$
            </p>
          </div>
        </div>
      )}

      {!product?.isCustom && !!client && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-white">Client</h3>
          <div className="flex items-center space-x-2">
            <Icons.User className="w-4 h-4 text-green-700" />
            <p className="text-md leading-6 text-gray-400">
              {client.name} - {client.phone}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

function ConfirmationIcon({ type }: { type: string }) {
  const icons: { [key: string]: IconType } = {
    verification: "ToogleRight",
  };

  const icon = icons[type] ?? "CheckCircle";
  const Icon = Icons[icon];

  return <Icon className="w-4 h-4 text-white" />;
}

export default Order;
