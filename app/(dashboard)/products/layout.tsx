import Link from "next/link";
import Catalog from "../../../components/products/catalog";
import Icons from "../../../components/svgs";
import { ProductsProvider } from "../../../contexts/productsContext";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProductsProvider siteId="amazon">
      <div className="w-full flex items-start h-screen">
        <div className="flex-1 flex flex-col h-screen px-12 pt-8 ">
          <div className="flex justify-between items-start border-b border-gray-600 pb-4">
            <h1 className="text-lg text-gray-300">Products</h1>

            <div className="flex items-center space-x-4">
              <button className="p-1 rounded-md hover:bg-gray-700">
                <Icons.Search className="w-6 h-6 text-gray-500" />
              </button>
              <button className="p-1 rounded-md hover:bg-gray-700">
                <Icons.Info className="w-6 h-6 text-gray-500" />
              </button>
              <Link
                href={"/stats/products"}
                className="p-1 rounded-md hover:bg-gray-700"
              >
                <Icons.PiChart className="w-6 h-6 text-gray-500" />
              </Link>
            </div>
          </div>


          <Catalog />
        </div>

        {children}
      </div>
    </ProductsProvider>
  );
}
