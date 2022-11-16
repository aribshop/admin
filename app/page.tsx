import Line from "./components/line";
import Icons from "./components/svgs";

export default function Home() {
  return (
    <div className="flex">
      <div className="max-w-xs sticky top-0 px-8 pt-4 w-full bg-slate-700">
        {/* search input with search Icon */}

        <div className="flex focus-within:ring-2  ring-green-300/25 rounded-md items-center space-x-2">
          <Icons.Search className="w-6 h-6 text-gray-500" />
          <input
            type="text"
            className="bg-gray-700/20 outline-none text-gray-300 rounded-md px-2 py-1 w-full"
            placeholder="Search"
          />
        </div>

        <div className="mt-4 flex justify-between items-center">
          <h2 className="text-2xl font-medium text-white">Organize</h2>
          <button className="p-2 rounded-md bg-green-500 text-white">
            <Icons.Add className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-4">
          <div className="flex items-start">
            <button className="flex-1 hover:text-green-400 hover:border-green-500/50 text-left pl-2 pb-2 border-b-2 border-gray-500/50 text-gray-300 ">
              All
            </button>
            <button className="flex-1 hover:text-green-400 hover:border-green-500/50 text-left pl-2 pb-2 border-b-2 border-gray-500/50 text-gray-300 ">
              Groups
            </button>
            <button className="flex-1 hover:text-green-400 hover:border-green-500/50 text-left pl-2 pb-2 border-b-2 border-gray-500/50 text-gray-300 ">
              Tags
            </button>
          </div>
          <div className="mt-2">
            <div>
              <h3 className="mt-4 mb-2 text-sm font-medium text-gray-300">
                Softawre
              </h3>
              <div className="space-y-2">
                {Array(3)
                  .fill(null)
                  .map((_) => (
                    <div className="border-l-4 bg-white/10 px-4 py-2 border-green-400 rounded-md flex items-center">
                      <div className="flex-1">
                        <h4 className="text-lg text-white font-medium">
                          Courso
                        </h4>
                        <p className="text-gray-400 text-sm">3 Orders</p>
                      </div>
                      <div className="px-2  rounded-md font-bold text-sm text-green-500 bg-green-300/20 ">
                        42
                      </div>
                      <button className="text-gray-500 ml-2">
                        <Icons.MoreHorizontal className="w-6 h-6" />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 px-4 pt-8">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex space-x-4 items-center">
              <h1 className="font-medium text-2xl text-white">E-Commerce</h1>
            </div>
            <p className="text-gray-500">15 members</p>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-white bg-green-400 rounded-md px-8 py-1">
              New Line
            </button>
            <button className=" font-bold text-gray-600">
              <Icons.MoreVertical className="w-6 h-6" />{" "}
            </button>
          </div>
        </div>

        <div className="overflow-x-auto overflow-y-hidden mt-12 flex justify-around max-w-full ">
          <Line name="list" orders={0} />
          <Line name="verified" orders={10} />
          <Line name="processing" orders={1} />
        </div>
      </div>
    </div>
  );
}
