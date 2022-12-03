"use client";

import { FunctionComponent, useState } from "react";
import Orders from "./orders";

interface LineProps {
  name: string;
  id: string;
}

const Line: FunctionComponent<LineProps> = ({ name, id }) => {
  const [totalOrder, setTotalOder] = useState(0);
  return (
    <div className="flex-grow snap-start shrink-0 px-4  w-full max-w-xs  h-full overflow-y-auto">
      <h2 className="text-lg font-medium text-gray-300">
        {name} ({totalOrder})
      </h2>

      <div className="mt-4 space-y-4">
        <Orders lineId={id} setTotal={setTotalOder} />
      </div>
    </div>
  );
};

export default Line;
