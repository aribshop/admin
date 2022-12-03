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

const Order: FunctionComponent<OrderProps> = (props) => {
  const [relativeDate, setRelativeDate] = useState("");

  const { data: confimations } = useQuery(["confirmations", props.id], () =>
    getOrderConfirmations(props.id)
  );

  const { data: product } = useQuery(["product", props.product], () =>
    getProduct(props.id)
  );

  const { data: client } = useQuery(["client", props.product], () =>
    getClient(props.user)
  );

  useEffect(() => {
    const timer = setInterval(
      () => setRelativeDate(getRelativeDate(props.date)),
      1000
    );

    return () => clearInterval(timer);
  }, [props.date]);

  return (
    <div className="bg-gray-700 border border-white/5  group hover:shadow-lg hover:ring-2 ring-green-300 px-4 py-4 rounded shadow-sm ">
      <div className="flex  justify-between items-start">
        <Link href={`/line/order/${props.id}`}>
          <div className="text-sm text-gray-500">{relativeDate}</div>
          <h2 className="text-lg group-hover:text-green-200 font-medium text-white">
            {product?.metadata.name}
          </h2>
        </Link>

        <div>
          <button className="text-gray-500">
            <Icons.MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex  space-x-2 items-center">
          {confimations?.map((confirmation) => (
            <div className="w-8 h-8 text-sm font-medium flex items-center justify-center  text-white uppercase bg-gray-500 rounded-full">
              <span>{confirmation.user.slice(0, 1)}</span>
            </div>
          ))}
        </div>
        <NavButton icon="CheckCircle" />
      </div>

      <div className="mt-4">
        <h3 className="text-white font-medium text-sm">Details</h3>
        <p className="text-md text-gray-400 leading-6">
          {product?.metadata.description}
        </p>
      </div>
      <div className="mt-6">
        {!!client && (
          <>
            <h3 className="text-white font-medium text-sm">Client</h3>
            <div className="flex items-center space-x-2">
              <Icons.User className="w-4 h-4 text-green-700" />
              <p className="text-md text-gray-400 leading-6">
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
