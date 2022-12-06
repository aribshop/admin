import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import ChooseTemplate from "../../../../components/start/chooseTemplate";
import ConfigSite from "../../../../components/start/configure/configSite";
import SiteConfigStepper from "../../../../components/start/siteConfigStepper";
import Icons from "../../../../components/svgs";
import { getSite, getStuff } from "../../../../repository/server";

export default async function Finish() {
  const token = cookies().get("token")!.value;

  const stuff = await getStuff(token);

  const site = await getSite(stuff.site, token);

  if (!site) {
    return redirect("/start");
  }

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

        <div className="mt-8 w-full relative flex items-start justify-between px-24">
          <SiteConfigStepper
            description={site.description}
            domain={`https://${site.subname}.arib.shop`}
            previewOG={site.template.previewOG}
            siteName={site.name}
            step="Template Information"
            steps={[
              "Site Information",
              "Find Unique Domain",
              "Template Information",
              "Deploy",
            ]}
          />

          <ConfigSite template={site.template} siteId={site.id} />
        </div>
      </div>
    </div>
  );
}
