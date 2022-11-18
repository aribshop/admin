import { FunctionComponent } from "react";
import Icons from "../svgs";

interface StatsCardProps {}

const StatsCard: FunctionComponent<StatsCardProps> = () => {
  return (
    <div className="flex-1 rounded-xl p-4 bg-gray-700">
      <div className="p-1 w-8 aspect-square rounded-full overflow-hidden bg-slate-800">
        <Icons.CheckCircle className="text-gray-300" />
      </div>
      <h2 className=" text-gray-400 mt-4">Emergency for data</h2>
      <p className="text-white text-2xl font-bold">$1536</p>
    </div>
  );
};

export default StatsCard;
