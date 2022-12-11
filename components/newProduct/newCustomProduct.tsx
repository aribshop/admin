"use client";

import { useState } from "react";
import { TagInputs } from "./tagInputs";
import { TypeInput } from "./typeInput";

export function NewCustomProduct() {
  const [inputLength, setInputLength] = useState(1);
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
        <label className="text-gray-300">Description</label>
        <textarea className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md" />
      </div>

      {Array(inputLength)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="border-l-4  pl-2 border-gray-400">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-300">Name</label>
              <TypeInput />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-gray-300">Type</label>
              <TypeInput />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-gray-300">Is Required</label>
              <input
                type="checkbox"
                className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-gray-300">Options</label>
              <input
                type="text"
                className="px-4 py-2 text-gray-300 bg-gray-700 rounded-md"
              />
            </div>
          </div>
        ))}

      <div className="w-full text-center">
        <button
          onClick={() => setInputLength((a) => a + 1)}
          className="text-gray-300 text-lg border-dashed border-gray-400 border mx-auto rounded-md px-2 "
        >
          Add Input
        </button>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-gray-300">Tags</label>
        <TagInputs />
      </div>
    </div>
  );
}
