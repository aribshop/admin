"use client"

import { FunctionComponent, useContext } from "react";
import { ConfigTemplateContext } from "../../../contexts/configTemplateContext";
import { ITemplate } from "../../../repository/types";
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
		<div className="p-4 bg-black border-2 border-gray-700 rounded-md">
			<h2 className="border-b-gray-600 py-2 text-xl text-white border-b">
				{props.title}
			</h2>
			<p className="mt-2 text-sm text-gray-400">{props.description}</p>
			{props.children}
		</div>
	);
};

const ConfigSite: FunctionComponent<ConfigSiteProps> = (props) => {
  const { next } = useContext(ConfigTemplateContext);
  

	return (
		<div className="w-full max-w-2xl pb-2 space-y-4">
			{props.template.type == "store" && <StoreTemplateConfigure />}
			{props.template.type == "landing" && <LandingTemplateConfigure />}

			<div className="flex justify-end mt-4">
				<button
					onClick={next}
					className="px-4 py-2 text-black bg-white rounded-md"
				>
					Deploy!
				</button>
			</div>
		</div>
	);
};

export default ConfigSite;
