"use client";
import { FunctionComponent, useState } from "react";
import Icons from "../svgs";

interface ChooseTemplateProps {}

const ChooseTemplate: FunctionComponent<ChooseTemplateProps> = () => {
  const [selected, setSelected] = useState<number>();

  return (
    <div className="max-w-md p-4 w-full  border-2 border-gray-600 rounded-md bg-gray-800">
      <h2 className="text-white font-medium">Choose Template</h2>
      {/* grid 2 * 2 of image and list tile (logo and title) */}
      <div className="grid mt-4 grid-cols-2 gap-4">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <button
              onClick={() => setSelected(i)}
              className="rounded-md border hover:border-white border-gray-600 bg-black overflow-hidden"
            >
              <img
                src="https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1647366075%2Ffront%2Fimport%2Fnextjs.png&w=1920&q=75"
                className="w-full  object-cover"
              />
              <div className="py-2 flex items-center space-x-2 px-2">
                {selected == i ? (
                  <Icons.CheckCircle className="w-4 h-4 text-green-300" />
                ) : (
                  <Icons.PiChart className="w-4 h-4 text-white" />
                )}

                <h3 className="text-white font-medium">Template {i}</h3>
              </div>
            </button>
          ))}
      </div>
    </div>
  );
};

export default ChooseTemplate;
