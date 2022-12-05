import { cookies } from "next/headers";
import Link from "next/link";
import ChooseTemplate from "../../../components/start/chooseTemplate";
import SetupWebsite from "../../../components/start/setupWebsite";
import Icons from "../../../components/svgs";
import { getTemplates } from "../../../repository/server";

export default async function Start() {
  const token = cookies().get("token")!.value;

  // const lines = await getLines(token);
  const templates = await getTemplates(token);

  return (
    <div className="w-full min-h-screen relative">
      <div className="w-full absolute top-0 left-0 right-0 h-64 bg-black border-b border-gray-500"></div>

      <div className="relative w-full min-h-screen">
        <div className="p-8 px-24">
          <h1 className="text-4xl leading-relaxed font-medium text-white">
            Let's build something new.
          </h1>
          <p className="text-gray-300 ">
            to publish your new store, enter common information, and choose a
            template!
          </p>
        </div>

        <div className="mt-8 w-full flex items-start justify-between px-24">
          <SetupWebsite />
          <ChooseTemplate templates={templates}/>
        </div>
      </div>
    </div>
  );
}
