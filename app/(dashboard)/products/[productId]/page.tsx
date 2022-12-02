import { FunctionComponent } from "react";
import RightPanel from "../../components/products/rightPanel";

interface SelectedProductProps {
  params: {
    productId: string;
  };
}

const SelectedProduct: FunctionComponent<SelectedProductProps> = (props) => {
  return <RightPanel id={props.params.productId} />;
};

export default SelectedProduct;
