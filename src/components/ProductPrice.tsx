
import { Badge } from "@/components/ui/badge";

interface ProductPriceProps {
  price: number;
  originalPrice?: number;
}

const ProductPrice = ({ price, originalPrice }: ProductPriceProps) => {
  const formatPrice = (price: number) => `Rs. ${price.toLocaleString()}`;
  
  const discountPercentage = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="flex items-center gap-3">
      <span className="font-poppins font-bold text-2xl lg:text-3xl text-shopkhana-black">
        {formatPrice(price)}
      </span>
      {originalPrice && (
        <>
          <span className="text-lg text-gray-500 line-through">
            {formatPrice(originalPrice)}
          </span>
          <Badge className="bg-red-100 text-red-600 hover:bg-red-100">
            {discountPercentage}% OFF
          </Badge>
        </>
      )}
    </div>
  );
};

export default ProductPrice;
