
interface ProductDescriptionProps {
  description: string;
}

const ProductDescription = ({ description }: ProductDescriptionProps) => {
  return (
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  );
};

export default ProductDescription;
