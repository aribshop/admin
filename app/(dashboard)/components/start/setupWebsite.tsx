import Link from "next/link";
import { FunctionComponent } from "react";

interface SetupWebsiteProps {}

const SetupWebsite: FunctionComponent<SetupWebsiteProps> = () => {
  return (
    <div className="max-w-xl w-full p-4  border-2 border-gray-600 rounded-md bg-black">
      <h2 className="text-white font-medium">Site Information</h2>
      <div className="mt-4 -mx-2 p-2 focus-within:bg-white/5 rounded-md">
        <label className="text-gray-300">Site Name</label>
        <input className="w-full border-b outline-none  border-gray-500 bg-transparent text-white" />
      </div>

      <div className="mt-4 -mx-2 p-2 focus-within:bg-white/5 rounded-md">
        <label className="text-gray-300">Domain Name</label>
        <div className="flex font-mono items-center border-b border-gray-500 bg-transparent text-white">
          <span>https://</span>
          <input className="w-auto outline-none bg-transparent" />
          <span>.arib.shop</span>
        </div>
      </div>

      {/* description */}
      <div className="mt-4 -mx-2 p-2 focus-within:bg-white/5 rounded-md">
        <label className="text-gray-300">Description</label>
        <textarea className="w-full border-b outline-none  border-gray-500 bg-transparent text-white" />
      </div>

      {/* action button "next!" */}
      <div className="mt-4 flex justify-end">
        <Link
          href="/start/finish"
          className="bg-white text-black px-4 py-2 rounded-md"
        >
          Next!
        </Link>
      </div>
    </div>
  );
};

export default SetupWebsite;
