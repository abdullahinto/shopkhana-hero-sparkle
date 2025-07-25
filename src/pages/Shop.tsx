
import { useState } from "react";
import { Search, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Dummy product data
const products = [
  {
    id: 1,
    name: "Matte Liquid Lipstick",
    price: 1200,
    category: "Cosmetics",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
    rating: 4.5,
    isNew: true
  },
  {
    id: 2,
    name: "Gold Plated Earrings",
    price: 2500,
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    rating: 4.8,
    isNew: false
  },
  {
    id: 3,
    name: "Embroidered Kurta",
    price: 3500,
    category: "Garments",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
    rating: 4.3,
    isNew: true
  },
  {
    id: 4,
    name: "Glow Serum",
    price: 1800,
    category: "Cosmetics",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    rating: 4.6,
    isNew: false
  },
  {
    id: 5,
    name: "Statement Necklace",
    price: 4200,
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
    rating: 4.4,
    isNew: false
  },
  {
    id: 6,
    name: "Floral Maxi Dress",
    price: 5500,
    category: "Garments",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    rating: 4.7,
    isNew: true
  },
  {
    id: 7,
    name: "Highlighter Palette",
    price: 2200,
    category: "Cosmetics",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    rating: 4.2,
    isNew: false
  },
  {
    id: 8,
    name: "Pearl Bracelet",
    price: 3200,
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
    rating: 4.5,
    isNew: false
  },
  {
    id: 9,
    name: "Cotton Palazzo Set",
    price: 2800,
    category: "Garments",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    rating: 4.1,
    isNew: true
  },
  {
    id: 10,
    name: "Nude Eyeshadow Palette",
    price: 2500,
    category: "Cosmetics",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop",
    rating: 4.6,
    isNew: false
  }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "newest":
          return b.isNew ? 1 : -1;
        default:
          return 0;
      }
    });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      
      <main className="w-full">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
          {/* Page Header */}
          <div className="text-center mb-6 sm:mb-8 px-2">
            <h1 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-shopkhana-black mb-3 sm:mb-4 leading-tight">
              Explore Our Glam Picks
            </h1>
            <p className="font-inter text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-2">
              Discover the latest in cosmetics, jewelry, and garments. Affordable glam for every desi girl.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-4 sm:mb-6">
            <div className="relative max-w-sm sm:max-w-md mx-auto px-2">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 sm:pl-12 h-10 sm:h-12 border-2 border-gray-200 focus:border-shopkhana-yellow transition-colors text-sm sm:text-base w-full"
              />
            </div>
          </div>

          {/* Filter Bar */}
          <div className="mb-4 sm:mb-6">
            <FilterBar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>

          {/* Results Count */}
          <div className="mb-4 sm:mb-6 px-2">
            <p className="font-inter text-gray-600 text-sm sm:text-base">
              Showing {displayedProducts.length} of {filteredProducts.length} products
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-6 sm:mb-8 px-1">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty State */}
          {displayedProducts.length === 0 && (
            <div className="text-center py-8 sm:py-12 px-4">
              <div className="text-gray-400 mb-4">
                <Filter className="h-12 w-12 sm:h-16 sm:w-16 mx-auto" />
              </div>
              <h3 className="font-poppins font-semibold text-lg sm:text-xl text-gray-600 mb-2">
                No products found
              </h3>
              <p className="font-inter text-gray-500 text-sm sm:text-base">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-2 px-2">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-full sm:w-auto border-shopkhana-yellow text-shopkhana-black hover:bg-shopkhana-yellow hover:text-shopkhana-black text-sm sm:text-base px-4 sm:px-6"
              >
                Previous
              </Button>
              
              <div className="flex space-x-1 sm:space-x-2 overflow-x-auto max-w-full">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => setCurrentPage(page)}
                    className={`flex-shrink-0 text-sm sm:text-base px-3 sm:px-4 ${
                      currentPage === page
                        ? "bg-shopkhana-yellow text-shopkhana-black hover:bg-shopkhana-yellow/80"
                        : "border-shopkhana-yellow text-shopkhana-black hover:bg-shopkhana-yellow hover:text-shopkhana-black"
                    }`}
                  >
                    {page}
                  </Button>
                ))}
              </div>
              
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="w-full sm:w-auto border-shopkhana-yellow text-shopkhana-black hover:bg-shopkhana-yellow hover:text-shopkhana-black text-sm sm:text-base px-4 sm:px-6"
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
