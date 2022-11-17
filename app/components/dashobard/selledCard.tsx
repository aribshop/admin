import { FunctionComponent } from "react";

interface SelledCardProps {}

const SelledCard: FunctionComponent<SelledCardProps> = () => {
  return (
    <div className="flex items-center rounded-md hover:bg-gray-700 space-x-4 px-2 py-1">
      <img src="https://laknabil.me/nabil.png" className="w-12 rounded-xl" />
      <h2 className="text-white font-bold ">A price that we pay</h2>

      <div className="flex-1 text-sm text-center text-gray-300">12/12/2021</div>
      <div className=" text-sm text-gray-300">12:12</div>
    </div>
  );
};

export default SelledCard;
