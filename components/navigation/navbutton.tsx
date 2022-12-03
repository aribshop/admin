import { FunctionComponent } from "react";
import SVG, { IconType } from "../svgs";

interface NavButtonProps {
  icon: IconType;
}

const NavButton: FunctionComponent<NavButtonProps> = ({ icon }) => {
  const IconData = SVG[icon];

  return (
    <button className="py-1 px-2 rounded-md bg-gray-700/20 hover:bg-green-100/90 hover:text-green-700 text-lg text-gray-500">
      <IconData className="w-6 h-6" />
    </button>
  );
};

export default NavButton;
