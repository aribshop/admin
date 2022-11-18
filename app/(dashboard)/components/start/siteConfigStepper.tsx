import Link from "next/link";
import { FunctionComponent } from "react";
import Icons from "../svgs";

interface SiteConfigStepperProps {}

const SiteConfigStepper: FunctionComponent<SiteConfigStepperProps> = () => {
  return (
    <div className="max-w-xs  w-full p-4 pt-0">
      <div className="rounded-md bg-gray-700 p-6">
        <img
          src="https://laknabil.me/background.png"
          className="w-full rounded-md"
        />

        <Link
          href="https://amazon.arib.shop"
          className="mt-4 space-x-2 flex items-center"
        >
          <span className="text-white">Amazon</span>
          <Icons.ExternalLink className="w-4 h-4 text-gray-300" />
        </Link>

        <p className="text-gray-400 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
        </p>
      </div>

      <div className="mt-12">
        <ul className="space-y-4 pb-6 border-b border-gray-600">
          <li className="flex items-center space-x-2 text-sm font-medium text-gray-200">
            <div className="rounded-full aspect-square w-2 bg-gray-300"></div>
            <span>Create Git Repository</span>
          </li>
          <li className="flex items-center space-x-2 text-sm font-medium text-gray-500">
            <div className="rounded-full aspect-square w-2 bg-gray-600"></div>
            <span>Deploy</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SiteConfigStepper;
