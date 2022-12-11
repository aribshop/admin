"use client";

import Icons from "../svgs";
import { TagInputs } from "./tagInputs";

export function NewStandarProduct() {
  return (
    <div className="space-y-2">
      <div className="flex flex-col space-y-2">
        <label className="text-gray-300">Title</label>
        <input
          type="text"
          className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-gray-300">Price</label>
        <input
          type="text"
          className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-gray-300">Description</label>
        <textarea className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md" />
      </div>

      <div className="mt-4 -mx-2 p-2 hover:bg-white/5 focus-within:bg-white/5 rounded-md">
        <label className="text-gray-300">Profile</label>
        <div className="w-full  bg-gray-700 text-white mt-2">
          <div className="flex relative items-center justify-center w-full h-32 border-2 border-gray-700 rounded-md">
            <input
              type="file"
              accept="image/*"
              className="absolute  inset-0  opacity-0 cursor-pointer"
            />
            <div className="flex  items-center justify-center w-20 h-20 rounded-full border-2 border-gray-700">
              <Icons.Image className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-gray-300">Tags</label>
        <TagInputs />
      </div>
    </div>
  );
}
