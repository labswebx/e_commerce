import { useParams } from "react-router-dom";
import ProgressBar from "../../../../components/ui/ProgressBar";
import Rating from "../../../../components/ui/Rating";
import {
  useCreateReview,
  useProductReviews,
} from "../../../../features/products/productHooks";
import { useState } from "react";
import Button from "../../../../components/ui/Button";
import Toast from "../../../../components/ui/Toast";

const ProductReviews = ({ reviewsData }) => {
  //  get review section
  const { id } = useParams();
  const { reviews, loading, error } = useProductReviews(id);
  const safeReviews = Array.isArray(reviews) ? reviews : [];
  console.log(id);
  const totalReviews = reviews?.length;
  let ratingSum = 0;
  const ratingsBreakdown = [0, 0, 0, 0, 0];

  safeReviews.forEach((review) => {
    const rating = review.rating;
    ratingSum += rating;
    const index = 5 - rating;
    ratingsBreakdown[index]++;
  });

  // const totalReviews = safeReviews.length;
  const averageRating = totalReviews > 0 ? ratingSum / totalReviews : 0;

  const labels = ["Excellent", "Good", "Average", "Below Average", "Poor"];
  const ratingCounts = ratingsBreakdown;

  // here create review section
  const {
    submitReview,
    loading: submitting,
    error: submitError,
  } = useCreateReview();

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment || rating < 1) {
      Toast.error("Please enter comment and rating");
      return;
    }

    try {
      await submitReview({ productId: id, comment, rating });
      Toast.success("Review submitted!");
      setComment("");
      setRating(5);
    } catch (err) {
      Toast.error("Failed to submit review");
    }
  };

  // create review and get review ka logic alag alag hoga

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
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <textarea
          className="w-full p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
          placeholder="Leave a comment..."
          rows={2}
          value={comment}
          disabled="true"
          onChange={(e) => setComment(e.target.value)}
        />
        {/* <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">Your Rating:</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              onClick={() => setRating(star)}
              className={`text-xl ${
                star <= rating ? "text-yellow-500" : "text-gray-300"
              }`}
            >
              ★
            </button>
          ))}
        </div> */}

        {/* <Button
          type="submit"
          label={submitting ? "Submitting..." : "Submit"}
          disabled={submitting || !comment}
          className="text-white bg-yellow-500"
        /> */}
      </form>
    </div>
  );
};

export default ProductReviews;
