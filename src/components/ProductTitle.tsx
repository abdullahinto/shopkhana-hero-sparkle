
import { Star } from "lucide-react";

interface Product {
  name: string;
  rating: number;
  reviewCount: number;
}

interface ProductTitleProps {
  product: Product;
}

const ProductTitle = ({ product }: ProductTitleProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-4 w-4 fill-shopkhana-yellow text-shopkhana-yellow" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="h-4 w-4 fill-shopkhana-yellow/50 text-shopkhana-yellow" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div>
      <h1 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-2">
        {product.name}
      </h1>
      
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center">
          {renderStars(product.rating)}
        </div>
        <span className="text-sm text-gray-600">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>
    </div>
  );
};

export default ProductTitle;
