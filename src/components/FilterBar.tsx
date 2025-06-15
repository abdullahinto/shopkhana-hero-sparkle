
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

const FilterBar = ({ selectedCategory, onCategoryChange, sortBy, onSortChange }: FilterBarProps) => {
  const categories = ["All", "Cosmetics", "Garments", "Jewelry"];

  return (
    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mx-2 sm:mx-0">
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        
        {/* Category Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <span className="font-inter font-medium text-gray-700 text-sm sm:text-base whitespace-nowrap">
            Categories:
          </span>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => onCategoryChange(category)}
                className={`text-xs sm:text-sm px-3 sm:px-4 py-2 font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-shopkhana-yellow text-shopkhana-black hover:bg-shopkhana-yellow/80"
                    : "border-gray-300 text-gray-700 hover:bg-shopkhana-yellow hover:text-shopkhana-black hover:border-shopkhana-yellow"
                }`}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <span className="font-inter font-medium text-gray-700 text-sm sm:text-base whitespace-nowrap">
            Sort by:
          </span>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-full sm:w-48 border-gray-300 focus:border-shopkhana-yellow text-sm sm:text-base h-9 sm:h-10">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest" className="text-sm sm:text-base">Newest First</SelectItem>
              <SelectItem value="price-low" className="text-sm sm:text-base">Price: Low to High</SelectItem>
              <SelectItem value="price-high" className="text-sm sm:text-base">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
