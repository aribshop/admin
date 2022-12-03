"use client";

import { useQuery } from "@tanstack/react-query";
import { FunctionComponent } from "react";
import { getProductDetails } from "../../repository/server";
import Icons from "../svgs";
import ActionButton from "./actionButton";

interface RightPanelProps {
  id: string;
}

const RightPanel: FunctionComponent<RightPanelProps> = (props) => {
  const { data, isLoading } = useQuery(["getProductDetails", props.id], () =>
    getProductDetails(props.id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-700 sticky h-screen top-0 w-full flex flex-col max-w-xs  p-4">
      <div className="flex space-x-4 pb-4 border-b border-gray-500">
        <Icons.Package className="w-5 h-5 text-gray-500" />
        <span className="text-sm text-gray-200">Product Overview</span>
      </div>

      <div className="mt-4 pb-4 border-b border-gray-500">
        <img
          src={
            (data!.product as any)?.picture ?? "https://via.placeholder.com/150"
          }
          className="mx-auto w-24 filter grayscale"
        />
      </div>

      <div className="mt-4 pb-4 border-b border-gray-500">
        <h2 className="text-white font-medium">
          {data!.product.metadata.name}
        </h2>
        <p className="text-gray-300 text-sm">{data!.customers} customers</p>

        <h3 className=" mt-2 text-gray-100 text-sm font-medium">
          Descriptions
        </h3>
        <p className="text-gray-300 text-sm">
          {data!.product.metadata.description}
        </p>
      </div>

      <div className="mt-4 pb-4 border-b border-gray-500 flex-1">
        <label className="text-gray-300 text-sm">Links</label>
        <div className="mt-2 flex space-x-2 items-center">
          <div className="w-6 aspect-square bg-gray-300 rounded-md flex items-center justify-center">
            <span className="text-xs font-bold text-gray-700">
              <Icons.ExternalLink className="w-4 h-4" />
            </span>
          </div>
          <p className="text-sm text-gray-400">{data!.link}</p>
        </div>

        <div className="mt-4">
          <label className="text-gray-300  text-sm">
            <span className=" bg-gray-500">A/B</span>
          </label>
        </div>
      </div>

      <div className="mt-4 pb-4 border-b border-gray-500 flex items-center justify-between">
        <ActionButton label="Add" icon="Add" onClick={() => {}} />
        {data!.product.isPaused ? (
          <ActionButton label="Activate" icon="Eye" onClick={() => {}} />
        ) : (
          <ActionButton label="Pause" icon="PauseCircle" onClick={() => {}} />
        )}
        <ActionButton label="Delete" icon="Delete" onClick={() => {}} />
      </div>
      <div className="mt-4 pb-4 "></div>
    </div>
  );
};

export default RightPanel;
