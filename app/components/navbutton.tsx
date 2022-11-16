import { FunctionComponent } from "react";

interface NavButtonProps {}

const NavButton: FunctionComponent<NavButtonProps> = () => {
  return (
    <button className="py-1 px-2 rounded-md bg-gray-700/20 hover:bg-green-100/90 hover:text-green-700 text-lg text-gray-500">
      B
    </button>
  );
};

export default NavButton;
