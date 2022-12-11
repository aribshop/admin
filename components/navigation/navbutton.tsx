import { FunctionComponent } from "react";
import SVG, { IconType } from "../svgs";

interface NavButtonProps {
  icon: IconType;
  isActive?: boolean;
  onClick?: () => void;
}

const NavButton: FunctionComponent<NavButtonProps> = ({ icon, isActive,onClick }) => {
  const IconData = SVG[icon];

  return (
    <button onClick={onClick} className={`py-1 px-2 rounded-md bg-gray-700/20 hover:bg-green-100/90 hover:text-green-700 text-lg text-gray-500 ${
      isActive ? "text-green-700 bg-green-100/90" : ""
    }`}>
      <IconData className="w-6 h-6" />
    </button>
  );
};

export default NavButton;
