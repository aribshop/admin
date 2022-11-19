"use client";

import { FunctionComponent, useContext, useState } from "react";
import { LinesContext } from "../../../contexts/linesContext";
import Icons from "../svgs";
import Card from "./leftPanel/card";
import Groups from "./leftPanel/groups";
import Tags from "./leftPanel/tags";

interface LeftPanelProps {}

const LeftPanel: FunctionComponent<LeftPanelProps> = () => {
  const [panel, setPanel] = useState<"all" | "groups" | "tags">("all");

  const linesContext = useContext(LinesContext);

  return (
    <div className="max-w-xs sticky top-0 h-screen px-8 pt-4 w-full bg-slate-700">
      <div className="flex focus-within:ring-2  ring-green-300/25 rounded-md items-center space-x-2">
        <Icons.Search className="w-6 h-6 text-gray-500" />
        <input
          type="text"
          className="bg-gray-700/20 outline-none text-gray-300 rounded-md px-2 py-1 w-full"
          placeholder="Search"
          value={linesContext.search}
          onChange={(e) => linesContext.setSearch(e.target.value)}
        />
      </div>

      <div className="mt-4 flex justify-between items-center">
        <h2 className="text-2xl font-medium text-white">Organize</h2>
        <button className="p-1 rounded-md bg-green-600/60* text-white">
          <Icons.Add className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-4">
        <div className="flex items-start">
          <PanelSectionButton
            setActive={() => setPanel("all")}
            label="All"
            active={panel == "all"}
          />
          <PanelSectionButton
            setActive={() => setPanel("groups")}
            label="Groups"
            active={panel == "groups"}
          />
          <PanelSectionButton
            setActive={() => setPanel("tags")}
            label="Tags"
            active={panel == "tags"}
          />
        </div>
        <div className="mt-2">
          <div>
            {(panel == "all" || panel == "groups") && (
              <>
                <h3 className="mt-4 mb-2 text-sm font-medium text-gray-300">
                  Groups
                </h3>
                <div className="space-y-2">
                  <Groups search={linesContext.search} />
                </div>
              </>
            )}

            {(panel == "all" || panel == "tags") && (
              <>
                <h3 className="mt-4 mb-2 text-sm font-medium text-gray-300">
                  Tags
                </h3>
                <div className="space-y-2">
                  <Tags search={linesContext.search} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;

function PanelSectionButton(props: {
  label: string;
  active: boolean;
  setActive: () => void;
}) {
  return (
    <button
      onClick={props.setActive}
      className={`flex-1 hover:text-green-400 hover:border-green-500/50 text-left pl-2 pb-2 border-b-2 border-gray-500/50 text-gray-300
      
        ${props.active ? "text-green-400 border-green-500/50" : ""}
      `}
    >
      {props.label}
    </button>
  );
}
