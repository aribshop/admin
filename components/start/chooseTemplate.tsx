"use client";
import { FunctionComponent, useState } from "react";
import { ITemplate } from "../../repository/types";
import Icons from "../svgs";

interface ChooseTemplateProps {
  templates: ITemplate[];
}

const ChooseTemplate: FunctionComponent<ChooseTemplateProps> = ({
  templates,
}) => {
  const [selected, setSelected] = useState<string>();

  return (
    <div className="max-w-md p-4 w-full  border-2 border-gray-600 rounded-md bg-gray-800">
      <h2 className="text-white font-medium">Choose Template</h2>
      <div className="grid mt-4 grid-cols-2 gap-4">
        {templates?.map((template, i) => (
          <button
            key={template.id}
            onClick={() => setSelected(template.type)}
            className="rounded-md border hover:border-white border-gray-600 bg-black overflow-hidden"
          >
            <img src={template.previewOG} className="w-full  object-cover" />
            <div className="py-2 flex items-center space-x-2 px-2">
              {selected == template.type ? (
                <Icons.CheckCircle className="w-4 h-4 text-green-300" />
              ) : (
                <Icons.PiChart className="w-4 h-4 text-white" />
              )}

              <h3 className="text-white font-medium">{template.name}</h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChooseTemplate;
