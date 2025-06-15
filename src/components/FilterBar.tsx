
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
    <div className="bg-gray-50 rounded-lg p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          <span className="font-inter font-medium text-gray-700 self-center mr-2">Categories:</span>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => onCategoryChange(category)}
              className={
                selectedCategory === category
                  ? "bg-shopkhana-yellow text-shopkhana-black hover:bg-shopkhana-yellow/80 font-medium"
                  : "border-gray-300 text-gray-700 hover:bg-shopkhana-yellow hover:text-shopkhana-black hover:border-shopkhana-yellow font-medium"
              }
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <span className="font-inter font-medium text-gray-700">Sort by:</span>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-48 border-gray-300 focus:border-shopkhana-yellow">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
