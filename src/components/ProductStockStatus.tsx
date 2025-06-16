
interface ProductStockStatusProps {
  inStock: boolean;
}

const ProductStockStatus = ({ inStock }: ProductStockStatusProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
      <span className={`font-medium ${inStock ? 'text-green-600' : 'text-red-600'}`}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </span>
    </div>
  );
};

export default ProductStockStatus;
