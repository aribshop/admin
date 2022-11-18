import Link from "next/link";
import { FunctionComponent } from "react";
import NavButton from "./navbutton";

interface NavProps {}

const Nav: FunctionComponent<NavProps> = () => {
  return (
    <div className="sticky h-screen top-0 border-r bg-slate-700  border-neutral-600 p-4 flex flex-col items-center">
      <div className="text-4xl font-bold text-white ">A</div>
      <div className="mt-12 flex flex-col items-center space-y-4">
        <Link href="/dashboard">
          <NavButton icon="Home" />
        </Link>
        <Link href="/">
          <NavButton icon="Columns" />
        </Link>
        <Link href="/products">
          <NavButton icon="Package" />
        </Link>
        <NavButton icon="PiChart" />
      </div>

      <div className="flex-1" />
      <div>
        <Link href="/start">
        <NavButton icon="Add" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
