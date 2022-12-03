import { cookies } from "next/headers";

import { getChain, getLines } from "../../../repository/server";
import LeftPanel from "../../../components/lines/leftPanel";
import Line from "../../../components/lines/line";
import Icons from "../../../components/svgs";

export default async function Home() {
  const token = cookies().get("token")!.value;

  // const lines = await getLines(token);
  const chain = await getChain(token);

  return (
    <div className="flex items-stretch">
      <LeftPanel />
      <div className="flex-1 px-4 pt-8 h-screen flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex space-x-4 items-center">
              <h1 className="font-medium text-2xl text-white">{chain.name}</h1>
            </div>
            <p className="text-gray-500">{chain.members} members</p>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-white bg-green-400 rounded-md px-8 py-1">
              New Line
            </button>
            <button className=" font-bold text-gray-600">
              <Icons.MoreVertical className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="overflow-auto  snap-x relative  flex-1  divide divide-x-2 divide-slate-700  overflow-y-hidden mt-12 flex">
          {chain?.lines?.map((line) => (
            <Line name={line.name}  id={line.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
