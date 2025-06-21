
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import TrustIndicators from "@/components/TrustIndicators";
import ProductReviews from "@/components/ProductReviews";
import StickyAddToCart from "@/components/StickyAddToCart";
import YouMayAlsoLike from "@/components/YouMayAlsoLike";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock product data
const getProductById = (id: string) => ({
  id: parseInt(id), // Convert to number to match Product interface
  name: "Luxe Rose Gold Necklace Set",
  price: 4500,
  originalPrice: 6000,
  category: "Jewelry",
  rating: 4.8,
  reviewCount: 127,
  description: "Elegant rose gold plated necklace set with matching earrings. Perfect for special occasions and everyday glamour.",
  images: [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop"
  ],
  inStock: true,
  variants: ["Rose Gold", "Silver", "Gold"],
  details: [
    "Material: Rose Gold Plated Brass",
    "Chain Length: 18 inches (adjustable)",
    "Pendant Size: 2cm x 1.5cm",
    "Hypoallergenic and nickel-free",
    "Comes with matching earrings"
  ]
});

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedVariant, setSelectedVariant] = useState("Rose Gold");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!id) {
    return <div>Product not found</div>;
  }

  const product = getProductById(id);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-6 lg:py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4 lg:mb-6">
          <span>Home</span> / <span>Jewelry</span> / <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-8 lg:mb-12">
          <ProductGallery images={product.images} productName={product.name} />
          
          <ProductInfo
            product={product}
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>

        {/* Trust Indicators */}
        <TrustIndicators />

        {/* Product Details Tabs */}
        <div className="mb-8 lg:mb-12">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6 h-auto">
              <TabsTrigger value="details" className="text-xs sm:text-sm lg:text-base px-2 py-2 leading-tight">
                <span className="hidden sm:inline">Product Details</span>
                <span className="sm:hidden">Details</span>
              </TabsTrigger>
              <TabsTrigger value="delivery" className="text-xs sm:text-sm lg:text-base px-2 py-2 leading-tight">
                <span className="hidden sm:inline">Delivery & Returns</span>
                <span className="sm:hidden">Delivery</span>
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-xs sm:text-sm lg:text-base px-2 py-2 leading-tight">
                <span className="hidden sm:inline">Reviews ({product.reviewCount})</span>
                <span className="sm:hidden">Reviews</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 lg:p-6">
                <h3 className="font-poppins font-semibold text-lg mb-4">Product Specifications</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-shopkhana-yellow rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="delivery" className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 lg:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-poppins font-semibold text-lg mb-4">Delivery Information</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        <span>Free delivery on orders above Rs. 2000</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        <span>Same day delivery in Karachi</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        <span>2-3 days delivery nationwide</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg mb-4">Return Policy</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <span>7 days easy return</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <span>Original packaging required</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <span>Free return pickup</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <ProductReviews product={product} />
            </TabsContent>
          </Tabs>
        </div>

        {/* You May Also Like */}
        <YouMayAlsoLike currentProductId={product.id} />
      </div>

      {/* Sticky Add to Cart for Mobile */}
      <StickyAddToCart 
        product={product}
        selectedVariant={selectedVariant}
        quantity={quantity}
      />

      <Footer />
    </div>
  );
};

export default ProductDetail;
