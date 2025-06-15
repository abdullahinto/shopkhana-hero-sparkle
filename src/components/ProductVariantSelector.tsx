
interface ProductVariantSelectorProps {
  variants: string[];
  selectedVariant: string;
  setSelectedVariant: (variant: string) => void;
}

const ProductVariantSelector = ({ 
  variants, 
  selectedVariant, 
  setSelectedVariant 
}: ProductVariantSelectorProps) => {
  if (variants.length === 0) return null;

  return (
    <div>
      <h3 className="font-poppins font-semibold text-lg mb-3">
        Select Variant: <span className="text-shopkhana-black">{selectedVariant}</span>
      </h3>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => (
          <button
            key={variant}
            onClick={() => setSelectedVariant(variant)}
            className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 font-medium ${
              selectedVariant === variant
                ? "border-shopkhana-yellow bg-shopkhana-yellow text-shopkhana-black"
                : "border-gray-300 hover:border-shopkhana-yellow"
            }`}
          >
            {variant}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductVariantSelector;
