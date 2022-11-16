import { FunctionComponent } from "react";
import NavButton from "./navbutton";

interface NavProps {}

const Nav: FunctionComponent<NavProps> = () => {
  return (
    <div className=" sticky top-0 border-r  border-neutral-600 p-4 flex flex-col items-center">
      <div className="text-4xl font-bold text-white ">A</div>
      <div className="mt-12 flex flex-col items-center space-y-4">
        {Array(5)
          .fill(null)
          .map((_) => (
            <NavButton />
          ))}
      </div>

      <div className="flex-1" />
      <div>
        <NavButton />
      </div>
    </div>
  );
};

export default Nav;
