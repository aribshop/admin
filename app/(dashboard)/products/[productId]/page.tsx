import { FunctionComponent } from "react";
import RightPanel from "../../components/products/rightPanel";

interface SelectedProductProps {
  props: {
    productId: string;
  };
}

const SelectedProduct: FunctionComponent<SelectedProductProps> = (props) => {
  return <RightPanel />
};

export default SelectedProduct;
