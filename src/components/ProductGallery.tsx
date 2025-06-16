
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery = ({ images, productName }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group">
        <img
          src={images[selectedImage]}
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Navigation Arrows - Desktop */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Images */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                selectedImage === index
                  ? "border-shopkhana-yellow shadow-md"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <img
                src={image}
                alt={`${productName} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
