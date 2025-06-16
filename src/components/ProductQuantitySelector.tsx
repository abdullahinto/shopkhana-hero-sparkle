
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductQuantitySelectorProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

const ProductQuantitySelector = ({ quantity, setQuantity }: ProductQuantitySelectorProps) => {
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <div>
      <h3 className="font-poppins font-semibold text-lg mb-3">Quantity</h3>
      <div className="flex items-center gap-3">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <Button
            variant="ghost"
            size="icon"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="h-10 w-10 rounded-r-none"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="px-4 py-2 font-semibold min-w-[50px] text-center">
            {quantity}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={increaseQuantity}
            className="h-10 w-10 rounded-l-none"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductQuantitySelector;
