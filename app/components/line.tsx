import { FunctionComponent } from "react";
import Order from "./order";

interface LineProps {}

const Line: FunctionComponent<LineProps> = () => {
  return (
    <div className="border-r-4 px-4 -ml-2 w-full max-w-xs border-gray-600 min-h-full overflow-y-auto">
      <h2 className="text-lg font-medium text-gray-300">Todo (1)</h2>

      <div className="mt-4 space-y-2">
        <Order />
        <Order />
        <Order />
      </div>
    </div>
  );
};

export default Line;
