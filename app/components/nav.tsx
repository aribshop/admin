import { FunctionComponent } from "react";
import NavButton from "./navbutton";

interface NavProps {}

const Nav: FunctionComponent<NavProps> = () => {
  return (
    <div className="sticky h-screen top-0 border-r bg-slate-700  border-neutral-600 p-4 flex flex-col items-center">
      <div className="text-4xl font-bold text-white ">A</div>
      <div className="mt-12 flex flex-col items-center space-y-4">
      <NavButton icon="Home" />
      <NavButton icon="Columns" />
      <NavButton icon="Package" />
      <NavButton icon="PiChart" />


      </div>

      <div className="flex-1" />
      <div>
        <NavButton icon="Info" />
      </div>
    </div>
  );
};

export default Nav;
