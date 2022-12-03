import Link from "next/link";
import { FunctionComponent } from "react";
import {
  ICustomProduct,
  IProduct,
  IStandardProduct,
} from "../../repository/types";
import Icons from "../svgs";

interface productItemProps {
  product: IProduct;
}

function getPicture(product: IProduct) {
  if (product.isCustom) {
    // todo use someservice to generate OG picture for website (screenshot)
    return "https://laknabil.me/nabil.png";
  } else {
    return product.picture;
  }
}

function CustomProductDetail({ product }: { product: ICustomProduct }) {
  return (
    <>
      <div className="text-sm">
        <span className="text-gray-200">Daily Qouta: </span>
        <span className="text-white font-mono">{product.dailyLimit}</span>
      </div>
    </>
  );
}

function StandarProductDetail({ product }: { product: IStandardProduct }) {
  return (
    <>
      <div className="text-sm">
        <span className="text-gray-200">Price: </span>
        <span className="text-white font-mono text-lg">${product.price}</span>
      </div>
      <div className="text-sm">
        <span className="text-gray-200">Stock: </span>
        <span className="text-white font-mono">
          {product.quantity}
        </span>
      </div>

      <div className="text-sm">
        <span className="text-gray-200">Discount: </span>
        <span className="text-white font-mono ">
          {product.discount}%
        </span>
      </div>
    </>
  );
}

const productItem: FunctionComponent<productItemProps> = ({ product }) => {
  return (
    <div className="bg-white/10 items-stretch flex flex-col hover:ring-2 ring-green-600 hover:shadow rounded-md p-4">
      <div className="flex items-center justify-between">
        <button className="p-1 rounded-md hover:bg-black/10">
          <Icons.PauseCircle className="w-5 h-5 text-gray-400" />
        </button>
        <button className="p-1 rounded-md hover:bg-black/10">
          <Icons.MoreVertical className="w-5 h-5 text-gray-400" />
        </button>
      </div>
      <Link href={`products/${product.id}`}>
        <img
          src={getPicture(product)}
          className="mx-auto h-16 filter grayscale mt-2"
        />
        <h2 className="text-green-200 text-center mt-6 max-w-xs">
          {product.metadata.name}
        </h2>
      </Link>
      <div className="flex-1">
        {product.isCustom && <CustomProductDetail product={product} />}
        {!product.isCustom && <StandarProductDetail product={product} />}
      </div>
      <div className="mt-6 pt-3  border-t border-gray-600 flex items-center justify-between">
        <div className="shrink-0">
          <Link
            href="https://amazon.arib.shop"
            className=" space-x-2 flex items-center"
          >
            <span className="text-white">
              {product.isCustom ? "Landing page" : "Product page"}
            </span>
            <Icons.ExternalLink className="w-4 h-4 text-gray-300" />
          </Link>
        </div>

        <div className="flex flex-row-reverse flex-wrap items-center -space-x-1">
          {product.metadata.tag.map((tag) => (
            <div className="py-0.5 border border-gray-600 bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default productItem;
