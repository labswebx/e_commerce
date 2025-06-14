import ProgressBar from "../../../../components/ui/ProgressBar";
import Rating from "../../../../components/ui/Rating";

const ProductReviews = ({ reviewsData }) => {
  const { averageRating, totalReviews, ratingsBreakdown } = reviewsData;

  const labels = ["Excellent", "Good", "Average", "Below Average", "Poor"];
  const ratingCounts = ratingsBreakdown;

  return (
    <div className="max-w-full p-6 bg-white rounded-lg ">
      <h2 className="mb-4 text-lg font-semibold">Reviews</h2>

      {/* Top Section: Rating + Progress bars */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Left: Average Rating */}
        <div className="lg:w-1/2">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold">{averageRating.toFixed(1)}</div>
            <div className="mb-2 text-sm text-gray-500">
              of {totalReviews} reviews
            </div>
            <Rating rating={averageRating} />
          </div>
        </div>

        {/* Right: Progress Bars */}
        <div className="lg:w-1/2">
          <div className="space-y-2">
            {labels.map((label, index) => (
              <div key={label} className="flex items-center justify-between">
                <span className="w-24 text-sm text-gray-700">{label}</span>
                <div className="flex-1 mx-2">
                  <ProgressBar
                    current={ratingCounts[index]}
                    total={totalReviews}
                    color="bg-yellow-400"
                    size="sm"
                    showPercent={false}
                    showStatusIcon={false}
                  />
                </div>
                <span className="w-6 text-sm text-right text-gray-600">
                  {ratingCounts[index]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: Comment box */}
      <div className="mt-6">
        <textarea
          className="w-full p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
          placeholder="Leave a comment..."
          rows={5}
        />
      </div>
    </div>
  );
};

export default ProductReviews;
