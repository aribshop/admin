import { FunctionComponent } from "react";
import Icons, { IconType } from "../svgs";

interface ActionButtonProps {
  icon: IconType;
  onClick: () => void;
  label: string;
}

const ActionButton: FunctionComponent<ActionButtonProps> = (props) => {
  const Icon = Icons[props.icon];
  return (
    <button
      onClick={props.onClick}
      className="flex flex-col items-center justify-center  rounded-xl py-1 px-2 hover:bg-gray-600 "
    >
      <div className="aspect-square w-10  text-gray-200 rounded-xl border border-gray-500 flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-gray-300 mt-2">{props.label}</span>
    </button>
  );
};

export default ActionButton;
