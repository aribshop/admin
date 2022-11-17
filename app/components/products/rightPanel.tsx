import { FunctionComponent } from "react";
import Icons from "../svgs";
import ActionButton from "./actionButton";

interface RightPanelProps {}

const RightPanel: FunctionComponent<RightPanelProps> = () => {
  return (
    <div className="bg-gray-700 sticky top-0 w-full flex flex-col max-w-xs h-full p-4">
      <div className="flex space-x-4 pb-4 border-b border-gray-500">
        <Icons.PiChart className="w-5 h-5 text-gray-500" />
        <span className="text-sm text-gray-200">Product Overview</span>
      </div>

      <div className="mt-4 pb-4 border-b border-gray-500">
        <img
          src="https://laknabil.me/nabil.png"
          className="mx-auto w-24 filter grayscale"
        />
      </div>

      <div className="mt-4 pb-4 border-b border-gray-500">
        <h2 className="text-white font-medium">
          Licence Agrement on Waterfall of something
        </h2>
        <p className="text-gray-300 text-sm">Lorem ipsum dolor sit</p>

        <h3 className=" mt-2 text-gray-100 text-sm font-medium">
          File Description
        </h3>
        <p className="text-gray-300 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="mt-4 pb-4 border-b border-gray-500 flex-1">
        <label className="text-gray-300 text-sm">Share File with</label>
        <div className="mt-2 flex space-x-2 items-center">
          <div className="w-6 aspect-square bg-gray-300 rounded-md flex items-center justify-center">
            <span className="text-xs font-bold text-gray-700">A</span>
          </div>
          <p className="text-sm text-gray-400">Nabil Lakrib (you!)</p>
        </div>
      </div>

      <div className="mt-4 pb-4 border-b border-gray-500 flex items-center justify-between">
        <ActionButton />
        <ActionButton />
        <ActionButton />
      </div>
      <div className="mt-4 pb-4 "></div>
    </div>
  );
};

export default RightPanel;
