import { FunctionComponent } from "react";
import NavButton from "./navbutton";

interface OrderProps {}

const Order: FunctionComponent<OrderProps> = () => {
  return (
    <div className="bg-gray-700 px-4 py-4 rounded shadow-sm ">
      <div className="flex  justify-between items-start">
        <div>
          <div className="text-sm text-gray-500">12 Apr 2019</div>
          <h2 className="text-lg font-medium text-white">
            Data Analysis using R
          </h2>
        </div>

        <div>
          <button className="text-gray-500">...</button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex  space-x-2 items-center">
          {Array(3)
            .fill(null)
            .map((_) => (
              <div className="w-10 h-10 flex items-center justify-center  text-white uppercase bg-gray-500 rounded-full">
                <span>TR</span>
              </div>
            ))}
        </div>
        <NavButton />
      </div>

      <div className="mt-4">
        <h3 className="text-white font-medium text-sm">Details</h3>
        <p className="text-md text-gray-400 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quas
          reiciendis iste ullam, asperiores quidem deserunt hic ex! Odit illo
          esse ipsam ipsum nostrum cumque numquam error necessitatibus?
          Aspernatur, labore?
        </p>
      </div>
    </div>
  );
};

export default Order;
