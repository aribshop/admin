import { FunctionComponent } from "react";
import Icons, { IconType } from "../svgs";

// todo use RTDB + ClientComponent to refecth data

interface StatsCardProps {
  icon: IconType;
  title: string;
  value: string;
}

const StatsCard: FunctionComponent<StatsCardProps> = (props) => {
  const Icon = Icons[props.icon];
  return (
    <div className="flex-1 rounded-xl p-4 bg-gray-700">
      <div className="p-1 w-8 aspect-square rounded-full overflow-hidden bg-slate-800">
        <Icon className="text-gray-300" />
      </div>
      <h2 className=" text-gray-400 mt-4">{props.title}</h2>
      <p className="text-white text-2xl font-bold">{props.value}</p>
    </div>
  );
};

export default StatsCard;
