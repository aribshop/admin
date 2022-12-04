"use client";

import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import NavButton from "./navbutton";
import { usePathname } from 'next/navigation';

interface NavProps {}

const Nav: FunctionComponent<NavProps> = () => {
  const route = usePathname();

  
  return (
    <div className="sticky h-screen top-0 border-r bg-slate-700  border-neutral-600 p-4 flex flex-col items-center">
      <Link href="https://arib.shop" className="text-4xl font-bold text-white ">
        <Image src="/logo.png" alt="logo" width={30} height={30} />
      </Link>
      <div className="mt-12 flex flex-col items-center space-y-4">
        <Link href="/">
          <NavButton icon="Home" isActive={route=="/"} />
        </Link>
        <Link href="/lines">
          <NavButton icon="Columns" isActive={route=="/lines"}/>
        </Link>
        <Link href="/products">
          <NavButton icon="Package" isActive={route=="/products"}/>
        </Link>
        <NavButton icon="PiChart" />
      </div>

      <div className="flex-1" />
      <div>
        <Link href="/start">
          <NavButton icon="Add" isActive={route?.startsWith("/start")} />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
