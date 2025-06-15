
import ProductTitle from "@/components/ProductTitle";
import ProductPrice from "@/components/ProductPrice";
import ProductDescription from "@/components/ProductDescription";
import ProductVariantSelector from "@/components/ProductVariantSelector";
import ProductQuantitySelector from "@/components/ProductQuantitySelector";
import ProductStockStatus from "@/components/ProductStockStatus";
import ProductActionButtons from "@/components/ProductActionButtons";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  inStock: boolean;
  variants: string[];
}

interface ProductInfoProps {
  product: Product;
  selectedVariant: string;
  setSelectedVariant: (variant: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  isWishlisted: boolean;
  setIsWishlisted: (wishlisted: boolean) => void;
}

const ProductInfo = ({
  product,
  selectedVariant,
  setSelectedVariant,
  quantity,
  setQuantity,
  isWishlisted,
  setIsWishlisted,
}: ProductInfoProps) => {
  return (
    <div className="space-y-6">
      <ProductTitle product={product} />
      
      <ProductPrice 
        price={product.price} 
        originalPrice={product.originalPrice} 
      />

      <ProductDescription description={product.description} />

      <ProductVariantSelector
        variants={product.variants}
        selectedVariant={selectedVariant}
        setSelectedVariant={setSelectedVariant}
      />

      <ProductQuantitySelector
        quantity={quantity}
        setQuantity={setQuantity}
      />

      <ProductStockStatus inStock={product.inStock} />

      <ProductActionButtons
        inStock={product.inStock}
        isWishlisted={isWishlisted}
        setIsWishlisted={setIsWishlisted}
      />
    </div>
  );
};

export default ProductInfo;
