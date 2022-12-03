import Link from "next/link";
import ChooseTemplate from "../../../../components/start/chooseTemplate";
import ConfigSite from "../../../../components/start/configSite";
import SiteConfigStepper from "../../../../components/start/siteConfigStepper";
import Icons from "../../../../components/svgs";

export default function Finish() {
  return (
    <div className="w-full min-h-screen relative">
      <div className="w-full absolute top-0 left-0 right-0 h-64 bg-black border-b border-gray-500"></div>

      <div className="relative w-full min-h-screen">
        <div className="p-8 px-24">
          <Link href="/start" className="flex items-center space-x-2">
            <Icons.ArrowLeft className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-200">back</span>
          </Link>
          <h1 className="text-4xl leading-relaxed font-medium text-white">
            You're almost done!
          </h1>
          <p className="text-gray-300 ">
            Please follow the steps to configure your store.
          </p>
        </div>

        <div className="mt-8 w-full flex items-start justify-between px-24">
          <SiteConfigStepper />

          <ConfigSite />
        </div>
      </div>
    </div>
  );
}
