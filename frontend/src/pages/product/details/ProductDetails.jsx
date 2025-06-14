import { useParams } from "react-router-dom";
import { useProductDetails } from "../../../features/products/productHooks";
import Loader from "../../../components/ui/Loader";
import ErrorMessage from "../../../utils/ErrorMessage";
import NoData from "../../../utils/NoData";
import toastMessage from "../../../constants/toastMessage";
import AddToCartButton from "../../../components/ui/AddToCartButton";
import { ProductImageSection } from "./components/ProductImageSection";
import DescriptionWithToggle from "./components/DescriptionWithToggle";
import ProductInfoIcons from "./components/ProductInfoIcons";
import CommentSection from "./components/CommentSection";
import ProductReviews from "./components/ProductReviews";

const ProductDetails = () => {
  const { id } = useParams();
  const { productDetails, error, loading } = useProductDetails(id);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!productDetails)
    return <NoData message={toastMessage.PRODUCT_LOAD.EMPTY} />;

  const totalReviews = productDetails.reviews.length;

  // Initialize array: index 0 => 5 stars, ..., index 4 => 1 star
  const ratingsBreakdown = [0, 0, 0, 0, 0];

  let ratingSum = 0;

  productDetails.reviews.forEach((review) => {
    const rating = review.rating;
    ratingSum += rating;
    const index = 5 - rating; // rating 5 goes to index 0, 4 to 1, ..., 1 to 4
    ratingsBreakdown[index]++;
  });

  const averageRating = totalReviews > 0 ? ratingSum / totalReviews : 0;

  const reviewsData = {
    averageRating,
    totalReviews,
    ratingsBreakdown,
  };
  const { name, description, price, finalPrice, discount, category } =
    productDetails;
  const discountPercent = ((price - finalPrice) / price) * 100;
  const formatted = discountPercent.toFixed(2) + "% OFF";
  return (
    <div className="p-4 mx-auto bg-white rounded-md shadow-md max-w-7xl">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {/*  Product Image */}
        <div className="lg:w-1/2">
          <ProductImageSection
            images={productDetails?.images}
            name={productDetails?.name}
          />
        </div>

        {/*  Main product content */}
        <div className="lg:w-1/2">
          {/* Title */}
          <h2 className="mb-2 text-2xl font-bold">{name}</h2>

          {/* Price */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-semibold text-black">
              {finalPrice}
            </span>
            <span className="text-xl text-gray-400 line-through">{price}</span>
          </div>

          {/* Discount Info */}
          {discount > 0 && (
            <div className="mb-2 text-sm text-red-500">{formatted}</div>
          )}

          {/* Category */}
          <p className="mb-2 text-sm text-gray-500">Category: {category}</p>

          {/* Add to Cart Button */}
          <div className="mb-4">
            <AddToCartButton product={id} className="w-full lg:w-auto" />
          </div>

          {/* Product Info Icons */}
          <div className="mb-6">
            <ProductInfoIcons product={productDetails} />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <DescriptionWithToggle description={description} />
      </div>

      {/* Reviews */}
      <div className="mt-6">
        <ProductReviews reviewsData={reviewsData} />
      </div>

      {/* Comment Section */}
      <div className="mt-6">
        <CommentSection reviews={productDetails.reviews} />
      </div>
      {/* related product section soon */}
      <div>{/* <RelatedProducts relatedProducts={relatedProducts} /> */}</div>
    </div>
  );
};

export default ProductDetails;
