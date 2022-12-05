import Link from "next/link";
import { FunctionComponent } from "react";
import Icons from "../svgs";

interface SiteConfigStepperProps {
  siteName: string;
  domain: string;
  previewOG: string;
  steps: string[];
  step: string;
  description: string;
}

const SiteConfigStepper: FunctionComponent<SiteConfigStepperProps> = (
  props
) => {
  return (
    <div className="max-w-xs sticky top-6 w-full p-4 pt-0">
      <div className="rounded-md bg-gray-700 p-6">
        <img src={props.previewOG} className="w-full rounded-md" />

        <Link href={props.domain} className="mt-4 space-x-2 flex items-center">
          <span className="text-white">{props.siteName}</span>
          <Icons.ExternalLink className="w-4 h-4 text-gray-300" />
        </Link>

        <p className="text-gray-400 mt-2">{props.description}</p>
      </div>

      <div className="mt-12">
        <ul className="space-y-4 pb-6 border-b border-gray-600">
          {props.steps.map((s) => (
            <li
              className={`flex items-center space-x-2 text-sm font-medium ${
                s == props.step ? "text-gray-200" : "text-gray-500"
              }`}
            >
              <div
                className={`rounded-full aspect-square w-2 ${
                  s == props.step ? "bg-gray-300" : "bg-gray-600"
                } `}
              ></div>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SiteConfigStepper;
