import { FunctionComponent } from "react";
import Icons from "../../svgs";

interface CardProps {
  name: string;
  users: number;
  openOrders: number;
}

const Card: FunctionComponent<CardProps> = (props) => {
  return (
    <div className="border-l-4 bg-white/10 px-4 py-2 border-green-400 rounded-md flex items-center">
      <div className="flex-1">
        <h4 className="text-lg text-white font-medium">{props.name}</h4>
        <p className="text-gray-400 text-sm">{props.users} users</p>
      </div>
      <div className="px-2  rounded-md font-bold text-sm text-green-500 bg-green-300/20 ">
        {props.openOrders}
      </div>
      <button className="text-gray-500 ml-2">
        <Icons.MoreHorizontal className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Card;
