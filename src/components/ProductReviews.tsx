
import { Star } from "lucide-react";

interface Product {
  rating: number;
  reviewCount: number;
}

interface ProductReviewsProps {
  product: Product;
}

const ProductReviews = ({ product }: ProductReviewsProps) => {
  const mockReviews = [
    {
      id: 1,
      name: "Ayesha K.",
      rating: 5,
      date: "2 days ago",
      comment: "Absolutely beautiful necklace! The quality is amazing and it looks even better in person. Fast delivery too!",
      verified: true,
    },
    {
      id: 2,
      name: "Fatima S.",
      rating: 4,
      date: "1 week ago",
      comment: "Love the design and the rose gold finish. Only wish the chain was a bit longer but overall very satisfied!",
      verified: true,
    },
    {
      id: 3,
      name: "Zara M.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Perfect for parties! Got so many compliments. Great value for money and excellent packaging.",
      verified: true,
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'fill-shopkhana-yellow text-shopkhana-yellow' : 'text-gray-300'
          }`}
        />
      );
    }
    return stars;
  };

  const ratingDistribution = [
    { stars: 5, count: 89, percentage: 70 },
    { stars: 4, count: 28, percentage: 22 },
    { stars: 3, count: 7, percentage: 6 },
    { stars: 2, count: 2, percentage: 1 },
    { stars: 1, count: 1, percentage: 1 },
  ];

  return (
    <div className="space-y-6">
      {/* Rating Overview */}
      <div className="bg-gray-50 rounded-lg p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Overall Rating */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <span className="text-3xl font-bold">{product.rating}</span>
              <div className="flex items-center">
                {renderStars(Math.floor(product.rating))}
              </div>
            </div>
            <p className="text-gray-600">Based on {product.reviewCount} reviews</p>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2">
            {ratingDistribution.map((rating) => (
              <div key={rating.stars} className="flex items-center gap-2 text-sm">
                <span className="w-8">{rating.stars}★</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-shopkhana-yellow h-2 rounded-full"
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>
                <span className="w-8 text-gray-600">{rating.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4">
        <h3 className="font-poppins font-semibold text-lg">Customer Reviews</h3>
        {mockReviews.map((review) => (
          <div key={review.id} className="border border-gray-200 rounded-lg p-4 lg:p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold">{review.name}</span>
                  {review.verified && (
                    <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
                      Verified Purchase
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
