import { FunctionComponent } from "react";
import { ITemplate } from "../../../repository/types";
import Icons from "../../svgs";
import { LandingTemplateConfigure } from "./templates/landingTemplate";
import { StoreTemplateConfigure } from "./templates/storeTemplate";

interface ConfigSiteProps {
  template: ITemplate;

  siteId: string;
}

type ConfigSectionProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

export const ConfigSection = (props: ConfigSectionProps) => {
  return (
    <div className="p-4  border-2 border-gray-700 rounded-md bg-black">
      <h2 className="text-xl text-white border-b py-2 border-b-gray-600">
        {props.title}
      </h2>
      <p className="text-gray-400 mt-2 text-sm">{props.description}</p>
      {props.children}
    </div>
  );
};

const ConfigSite: FunctionComponent<ConfigSiteProps> = (props) => {
  return (
    <div className="max-w-2xl w-full pb-2 space-y-4">
      {props.template.type == "store" && <StoreTemplateConfigure />}
      {props.template.type == "landing" && <LandingTemplateConfigure />}

      <div className="mt-4 flex justify-end">
        <button
          className="bg-white text-black px-4 py-2 rounded-md"
        >
          Deploy!
        </button>
      </div>
    </div>
  );
};

export default ConfigSite;
