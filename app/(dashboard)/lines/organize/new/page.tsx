"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NewGroup from "../../../../../components/lines/organize/newGroup";
import NewTag from "../../../../../components/lines/organize/newTag";
import Icons from "../../../../../components/svgs";

export default function NewOrganize() {
  const [section, setSection] = useState(1);

  const isGroup = section == 1;
  const isTag = section == 2;

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full">
      <div className="absolute w-full h-full backdrop-blur-sm bg-black bg-opacity-50"></div>
      <div className="border-gray-500/80 relative flex flex-col w-full max-w-lg max-h-full my-5 overflow-hidden bg-gray-600 border rounded-md">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-600">
          <h1 className="text-lg text-gray-300">Create New Organization</h1>
          <Link href="/lines" className="hover:bg-gray-700 p-1 rounded-md">
            <Icons.X className="w-6 h-6 text-gray-500" />
          </Link>
        </div>
        <div className="p-4 flex items-center justify-around relative">
          <SectionButton
            isActive={isGroup}
            label="new Group"
            onClick={() => setSection(1)}
          />
          <SectionButton
            isActive={isTag}
            label="new Tag"
            onClick={() => setSection(2)}
          />
        </div>

        <div className="p-4">
          {isGroup && <NewGroup />}
          {isTag && <NewTag />}
        </div>
      </div>
    </div>
  );
}

type SectionButtonPorps = {
  label: string;
  onClick: () => void;
  isActive: boolean;
};

function SectionButton(props: SectionButtonPorps) {
  return (
    <button
      onClick={() => props.onClick()}
      className={`px-12 text-white rounded-md border-2  ${
        props.isActive
          ? "bg-green-600 border-2 border-green-600/50"
          : "border-gray-400"
      }`}
    >
      {props.label}
    </button>
  );
}
