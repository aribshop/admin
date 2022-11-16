import Line from "./components/line";
import Nav from "./components/nav";
import NavButton from "./components/navbutton";
import Order from "./components/order";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-800 flex">
      <Nav />

      <div className="px-4 pt-8 w-full">
        <div className="flex justify-between">
          <div>
            <div className="flex space-x-4 items-center">
              <h1 className="font-medium text-2xl text-white">E-Commerce</h1>
              <button className="text-gray-500 text-md">S</button>
            </div>
            <p className="text-gray-500">15 members</p>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-white bg-green-400 rounded-md px-8 py-1">
              New Order
            </button>
            <button className=" font-bold text-gray-600"> ... </button>
          </div>
        </div>

        <div className="mt-12 min-w-fit overflow-x-auto flex h-full">
          <Line />
          <Line />
          <Line />
        </div>
      </div>
    </div>
  );
}
