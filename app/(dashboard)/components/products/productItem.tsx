import Link from "next/link";
import { FunctionComponent } from "react";
import Icons from "../svgs";

interface productItemProps {
  name: string;
  picutre?: string;
  id: string;
}

const productItem: FunctionComponent<productItemProps> = (props) => {
  return (
    <div className="bg-white/10 hover:ring-2 ring-green-600 hover:shadow rounded-md p-4">
      <div className="flex items-center justify-between">
        <button className="p-1 rounded-md hover:bg-black/10">
          <Icons.Star className="w-5 h-5 text-gray-400" />
        </button>
        <button className="p-1 rounded-md hover:bg-black/10">
          <Icons.MoreVertical className="w-5 h-5 text-gray-400" />
        </button>
      </div>
      <Link href={`products/${props.id}`}>
        <img
          src={props.picutre ?? "https://laknabil.me/nabil.png"}
          className="mx-auto w-20 filter grayscale mt-2"
        />
        <h2 className="text-gray-200 text-center mt-6 max-w-xs">
          {props.name}
        </h2>
      </Link>
      <div className="mt-6 pt-3 border-t border-gray-600 flex items-center justify-between">
        <div>
          <label className="text-sm text-gray-200">FileSize:</label>
          <p className="text-sm text-gray-400 font-medium">5.7MB</p>
        </div>

        <div className="flex flex-row-reverse items-center -space-x-1">
          {Array(5)
            .fill(null)
            .map(() => (
              <div className="w-5 aspect-square border border-gray-600 bg-gray-300 rounded-md flex items-center justify-center">
                <span className="text-xs font-bold text-gray-700">A</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default productItem;
