
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  variant?: string;
  rating: number;
  stock: number;
  inStock: boolean;
}

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      name: "Matte Liquid Lipstick Set",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop&crop=center",
      variant: "Rose Collection - 6 Shades",
      rating: 4.8,
      stock: 2,
      inStock: true
    },
    {
      id: 2,
      name: "Gold Statement Earrings",
      price: 899,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center",
      variant: "Gold Plated",
      rating: 4.9,
      stock: 12,
      inStock: true
    },
    {
      id: 3,
      name: "Glow Serum Foundation",
      price: 2199,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop&crop=center",
      variant: "Shade: Medium Beige",
      rating: 4.7,
      stock: 0,
      inStock: false
    }
  ]);

  const formatPrice = (price: number) => {
    return `Rs. ${price.toLocaleString()}`;
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-3 w-3 fill-shopkhana-yellow text-shopkhana-yellow" />
      );
    }
    
    if (rating % 1 !== 0) {
      stars.push(
        <Star key="half" className="h-3 w-3 fill-shopkhana-yellow/50 text-shopkhana-yellow" />
      );
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-3 w-3 text-gray-300" />
      );
    }
    
    return stars;
  };

  const removeFromWishlist = (itemId: number) => {
    setWishlistItems(items => items.filter(item => item.id !== itemId));
  };

  const addToCart = (itemId: number) => {
    // Add to cart logic here
    console.log(`Added item ${itemId} to cart`);
  };

  const shareWishlist = () => {
    // Share wishlist logic here
    console.log("Sharing wishlist");
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-8">
              <Heart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h1 className="font-poppins font-bold text-2xl sm:text-3xl text-shopkhana-black mb-2">
                Your Wishlist is Empty
              </h1>
              <p className="font-inter text-gray-600 text-lg">
                Looks like you haven't saved anything yet 😔
              </p>
            </div>
            
            <Link to="/shop">
              <Button 
                size="lg"
                className="bg-shopkhana-yellow hover:bg-shopkhana-yellow/90 text-shopkhana-black font-poppins font-semibold px-8 py-3 text-lg"
              >
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-shopkhana-yellow fill-shopkhana-yellow" />
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-shopkhana-black">
              Saved Glam Picks
            </h1>
            <Heart className="h-8 w-8 text-shopkhana-yellow fill-shopkhana-yellow" />
          </div>
          <p className="font-inter text-lg sm:text-xl text-gray-600 mb-4">
            We saved your faves — don't let them get away! ✨
          </p>
          
          {/* Share Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={shareWishlist}
            className="border-shopkhana-yellow text-shopkhana-black hover:bg-shopkhana-yellow/10"
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share Wishlist
          </Button>
        </div>

        {/* Wishlist Items Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="font-inter text-gray-600">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {wishlistItems.map((item) => (
            <Card 
              key={item.id}
              className="group bg-white border-gray-200 hover:border-shopkhana-yellow/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-square">
                  <Link to={`/product/${item.id}`}>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  
                  {/* Remove Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-2 right-2 h-8 w-8 bg-white/90 hover:bg-white rounded-full shadow-sm"
                  >
                    <Trash2 className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
                  </Button>

                  {/* Stock Badge */}
                  {!item.inStock && (
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                      Out of Stock
                    </Badge>
                  )}
                  {item.inStock && item.stock <= 5 && (
                    <Badge className="absolute top-2 left-2 bg-orange-500 text-white">
                      Only {item.stock} left!
                    </Badge>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    <div className="flex items-center">
                      {renderStars(item.rating)}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                      ({item.rating})
                    </span>
                  </div>

                  {/* Product Name */}
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-poppins font-semibold text-shopkhana-black text-sm sm:text-base line-clamp-2 hover:text-shopkhana-yellow transition-colors">
                      {item.name}
                    </h3>
                  </Link>

                  {/* Variant */}
                  {item.variant && (
                    <p className="font-inter text-xs text-gray-500">
                      {item.variant}
                    </p>
                  )}

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="font-poppins font-bold text-shopkhana-black">
                      {formatPrice(item.price)}
                    </span>
                    {item.originalPrice && (
                      <span className="font-inter text-sm text-gray-500 line-through">
                        {formatPrice(item.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button 
                    onClick={() => addToCart(item.id)}
                    disabled={!item.inStock}
                    className={`w-full font-poppins font-semibold text-sm py-2.5 transition-all duration-200 ${
                      item.inStock 
                        ? 'bg-shopkhana-yellow hover:bg-shopkhana-yellow/90 text-shopkhana-black hover:shadow-md' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Continue Shopping CTA */}
        <div className="text-center bg-gradient-to-r from-shopkhana-yellow/10 to-shopkhana-yellow/20 rounded-2xl p-6 sm:p-8 border border-shopkhana-yellow/20">
          <h3 className="font-poppins font-bold text-xl sm:text-2xl text-shopkhana-black mb-3">
            Want to Explore More?
          </h3>
          <p className="font-inter text-gray-600 mb-6">
            Discover more amazing products that match your style
          </p>
          <Link to="/shop">
            <Button 
              size="lg"
              className="bg-shopkhana-black hover:bg-shopkhana-black/90 text-white font-poppins font-semibold px-8 py-3 text-lg"
            >
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
