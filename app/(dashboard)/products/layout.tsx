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
    <ProductsProvider>
      <div className="flex items-start w-full h-screen">
        <div className=" flex flex-col flex-1 h-screen px-12 pt-8">
          <div className="flex items-start justify-between pb-4 border-b border-gray-600">
            <h1 className="text-lg text-gray-300">Products</h1>

            <div className="flex items-center space-x-4">
              <button className="hover:bg-gray-700 p-1 rounded-md">
                <Icons.Search className="w-6 h-6 text-gray-500" />
              </button>
              
              <Link
                href={"/stats/products"}
                className="hover:bg-gray-700 p-1 rounded-md"
              >
                <Icons.PiChart className="w-6 h-6 text-gray-500" />
              </Link>

              <Link
              href="/products/new"
              className="px-8 py-1 text-white bg-green-400 rounded-md"
            >
              New Product
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
