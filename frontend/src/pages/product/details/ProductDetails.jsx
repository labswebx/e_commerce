import { useParams } from "react-router-dom";

import { useProductDetails } from "../../../features/products/productHooks";

import ErrorMessage from "../../../utils/ErrorMessage";
import NoData from "../../../utils/NoData";

import toastMessage from "../../../constants/toastMessage";

import AddToCartButton from "../../../components/ui/AddToCartButton";
import { ProductImageSection } from "./components/ProductImageSection";
import DescriptionWithToggle from "./components/DescriptionWithToggle";
import ProductInfoIcons from "./components/ProductInfoIcons";
import CommentSection from "./components/CommentSection";
import ProductReviews from "./components/ProductReviews";
import Button from "../../../components/ui/Button";

const ProductDetails = () => {
  const { id } = useParams();
  const { productDetails, error } = useProductDetails(id);

  if (error) return <ErrorMessage message={error} />;
  if (!productDetails) {
    return <NoData message={toastMessage.PRODUCT_LOAD.EMPTY} />;
  }

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
          {category?.name && (
            <p className="mb-2 text-sm text-gray-500">
              Category: {category?.name}
            </p>
          )}
          {/* Add to Cart Button */}
          <div className="flex flex-col justify-between w-full gap-2 mb-4 sm:flex-row ">
            <AddToCartButton product={id} className="w-full" />
            <Button label="Wishlist" variant="outline" className="" fullWidth />
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
        <ProductReviews />
      </div>

      {/* Comment Section */}
      <div className="mt-6">
        <CommentSection id={id} />
      </div>
      {/* related product section soon */}
      <div>{/* <RelatedProducts relatedProducts={relatedProducts} /> */}</div>
    </div>
  );
};

export default ProductDetails;
