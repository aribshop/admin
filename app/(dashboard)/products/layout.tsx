import Catalog from "../../../components/products/catalog";
import Icons from "../../../components/svgs";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full relative flex items-start h-screen">
      <div className="flex-1 px-12 pt-8 ">
        <div className="flex justify-between items-start border-b border-gray-600 pb-4">
          <h1 className="text-lg text-gray-300">Products</h1>

          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-md hover:bg-gray-700">
              <Icons.Search className="w-6 h-6 text-gray-500" />
            </button>
            <button className="p-1 rounded-md hover:bg-gray-700">
              <Icons.Info className="w-6 h-6 text-gray-500" />
            </button>
            <button className="p-1 rounded-md hover:bg-gray-700">
              <Icons.PiChart className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* grid 3 * n */}
        <div className="mt-4 grid grid-cols-3 gap-4">
          <Catalog siteId={"amazon"} />
          
        </div>
      </div>

      {children}
    </div>
  );
}
