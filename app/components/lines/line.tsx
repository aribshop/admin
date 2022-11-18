import { FunctionComponent } from "react";
import Order from "./order";
import Orders from "./orders";

interface LineProps {
  name: string;
  orders: number;
  id:string;
}

const Line: FunctionComponent<LineProps> = ({ name, orders,id }) => {
  return (
    <div className="border-r-4 flex-grow shrink-0 px-4 -ml-2 w-full max-w-xs border-gray-600/40 min-h-full overflow-y-auto">
      <h2 className="text-lg font-medium text-gray-300">
        {name} ({orders})
      </h2>

      <div className="mt-4 space-y-2">
        <Orders lineId={id} />
      </div>
    </div>
  );
};

export default Line;
