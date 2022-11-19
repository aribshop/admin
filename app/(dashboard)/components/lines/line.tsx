import { FunctionComponent } from "react";
import Order from "./order";
import Orders from "./orders";

interface LineProps {
  name: string;
  orders: number;
  id: string;
}

const Line: FunctionComponent<LineProps> = ({ name, orders, id }) => {
  return (
    <div className="flex-grow snap-start shrink-0 px-4  w-full max-w-xs  h-full overflow-y-auto">
      <h2 className="text-lg font-medium text-gray-300">
        {name} ({orders})
      </h2>

      <div className="mt-4 space-y-4">
        <Orders lineId={id} />
      </div>
    </div>
  );
};

export default Line;
