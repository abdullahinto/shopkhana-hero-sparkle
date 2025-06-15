
import ProductCard from "@/components/ProductCard";

interface YouMayAlsoLikeProps {
  currentProductId: number;
}

const YouMayAlsoLike = ({ currentProductId }: YouMayAlsoLikeProps) => {
  // Mock related products
  const relatedProducts = [
    {
      id: 2,
      name: "Pearl Drop Earrings",
      price: 2500,
      category: "Jewelry",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      rating: 4.6,
      isNew: false,
    },
    {
      id: 3,
      name: "Gold Chain Bracelet",
      price: 3200,
      category: "Jewelry",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      rating: 4.8,
      isNew: true,
    },
    {
      id: 4,
      name: "Diamond Ring Set",
      price: 8500,
      category: "Jewelry",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      rating: 4.9,
      isNew: false,
    },
    {
      id: 5,
      name: "Silver Pendant Necklace",
      price: 1800,
      category: "Jewelry",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      rating: 4.4,
      isNew: false,
    },
  ];

  // Filter out current product
  const filteredProducts = relatedProducts.filter(product => product.id !== currentProductId);

  return (
    <div className="space-y-6">
      <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-center">
        You May Also Like
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
