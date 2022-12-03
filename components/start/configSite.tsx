import { FunctionComponent } from "react";

interface ConfigSiteProps {}

const ConfigSite: FunctionComponent<ConfigSiteProps> = () => {
  return (
    <div className="max-w-2xl w-full  space-y-4">
      <div className="p-4  border-2 border-gray-700 rounded-md bg-black">
        <h2 className="text-xl text-white border-b py-2 border-b-gray-600">
          Create Git Repository
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          voluptas, quod, quia, voluptate quae voluptates quibusdam
        </p>
        <div className="mt-4 -mx-2 p-2 focus-within:bg-white/5 rounded-md">
          <label className="text-gray-300">Repository Name</label>
          <input className="w-full border-b outline-none  border-gray-500 bg-transparent text-white" />
        </div>
      </div>

      {/* image dropping zone for logo and background */}
      <div className="p-4  border-2 border-gray-700 rounded-md bg-black">
        <h2 className="text-xl text-white border-b py-2 border-b-gray-600">
          Logo and Background
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          voluptas, quod, quia, voluptate quae voluptates quibusdam
        </p>
        <div className="mt-4 -mx-2 p-2 hover:bg-white/5 rounded-md">
          <label className="text-gray-300">Logo</label>
          <div className="w-full  bg-transparent text-white mt-2">
            <div className="flex items-center justify-center w-full h-32 border-2 border-gray-700 rounded-md">
              <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-gray-700">
                <svg
                  className="w-6 h-6 text-gray-400"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 -mx-2 p-2 hover:bg-white/5 rounded-md">
          <label className="text-gray-300">Background</label>
          <div className="w-full  bg-transparent text-white mt-2">
            <div className="flex items-center justify-center w-full h-32 border-2 border-gray-700 rounded-md">
              <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-gray-700">
                <svg
                  className="w-6 h-6 text-gray-400"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigSite;
