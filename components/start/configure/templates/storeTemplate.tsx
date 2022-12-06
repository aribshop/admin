"use client";

import Icons from "../../../svgs";
import { ConfigSection } from "../configSite";

export function StoreTemplateConfigure() {
  // todo add image preview!
  return (
    <>
      <ConfigSection
        description="basic informations about your website"
        title="Template configuration"
      >
        <div className="mt-4 -mx-2 p-2 focus-within:bg-white/5 rounded-md">
          <label className="text-gray-300">Title</label>
          <input className="w-full border-b outline-none  border-gray-500 bg-transparent text-white" />
        </div>
      </ConfigSection>

      <ConfigSection
        description="configure your website's background"
        title="Pictures"
      >
        <div className="mt-4 -mx-2 p-2 hover:bg-white/5 focus-within:bg-white/5 rounded-md">
          <label className="text-gray-300">Background</label>
          <div className="w-full  bg-transparent text-white mt-2">
            <div className="flex relative items-center justify-center w-full h-32 border-2 border-gray-700 rounded-md">
              <input
                type="file"
                className="absolute  inset-0  opacity-0 cursor-pointer"
              />
              <div className="flex  items-center justify-center w-20 h-20 rounded-full border-2 border-gray-700">
                <Icons.Image className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </ConfigSection>
    </>
  );
}
