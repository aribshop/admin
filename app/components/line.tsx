import { FunctionComponent } from "react";
import Order from "./order";

interface LineProps {
  name: string;
  orders: number;
}

const Line: FunctionComponent<LineProps> = ({ name, orders }) => {
  return (
    <div className="border-r-4 flex-grow shrink-0 px-4 -ml-2 w-full max-w-xs border-gray-600/40 min-h-full overflow-y-auto">
      <h2 className="text-lg font-medium text-gray-300">
        {name} ({orders})
      </h2>

      <div className="mt-4 space-y-2">
        {Array(orders)
          .fill(null)
          .map((_) => (
            <Order />
          ))}
      </div>
    </div>
  );
};

export default Line;
