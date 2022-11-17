import { FunctionComponent } from "react";
import Icons from "../svgs";

interface ActionButtonProps {}

const ActionButton: FunctionComponent<ActionButtonProps> = () => {
  return (
    <button className="flex flex-col items-center justify-center  rounded-xl py-1 px-2 hover:bg-gray-600 ">
      <div className="aspect-square w-10  text-gray-200 rounded-xl border border-gray-500 flex items-center justify-center">
    <Icons.CheckCircle className="w-6 h-6" />
      </div>
      <span className="text-gray-300 mt-2">Hello</span>
    </button>
  );
};

export default ActionButton;
