import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCategory } from "../../features/category/categoryHooks";
import { useCategoryProducts } from "../../features/products/productHooks";
import { ProductCard } from "../../components/ui/Card";
import ErrorMessage from "../../utils/ErrorMessage";
import toastMessage from "../../constants/toastMessage";

const CategoryDetails = () => {
  const { id } = useParams();

  // Category Info
  const {
    currentCategory: category,
    loading: loadingCategory,
    getCategoryById,
  } = useCategory();

  // Products under this category
  const {
    categoryProducts,
    loading: loadingProducts,
    error: productError,
  } = useCategoryProducts(id);

  useEffect(() => {
    if (id) getCategoryById(id);
  }, [id]);

  if (!category)
    return <ErrorMessage error={toastMessage.CATEGORY_LOAD.EMPTY} />;

  return (
    <div className="p-2 space-y-10 md:p-2">
      {/* Category Info */}
      <div className="space-y-6 max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-800">{category.name}</h2>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* Image */}
          <div className="w-full bg-zinc-800 sm:w-1/3 max-w-[320px] rounded-md">
            <img
              src={category.image?.url || "/placeholder.png"}
              alt={category.name}
              className="object-contain w-full h-64 border rounded-lg shadow filter invert brightness-[0.66] contrast-[0.75]"
            />
          </div>

          {/* Info Box */}
          <div className="flex-1 p-6 space-y-3 bg-white border rounded-lg shadow-sm">
            <p className="text-gray-700">
              <span className="font-semibold">Description:</span>{" "}
              {category.description || "No description provided."}
            </p>

            <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
              <p>
                <span className="font-semibold text-gray-700">Trending:</span>{" "}
                {category.trending ? (
                  <span className="font-semibold text-green-600">Yes</span>
                ) : (
                  <span className="text-red-500">No</span>
                )}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Created At:</span>{" "}
                <span className="text-gray-500">
                  {new Date(category.createdAt).toLocaleString()}
                </span>
              </p>
              <p>
                <span className="font-semibold text-gray-700">Updated At:</span>{" "}
                <span className="text-gray-500">
                  {new Date(category.updatedAt).toLocaleString()}
                </span>
              </p>

              <p>
                <span className="font-semibold text-gray-700">Products:</span>{" "}
                <span className="text-gray-500">
                  {categoryProducts?.length}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products in This Category  */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">Products</h3>

        {productError ? (
          <p className="text-red-500">Error loading products: {productError}</p>
        ) : categoryProducts.length === 0 ? (
          <p className="text-gray-500">No products found for this category.</p>
        ) : (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.map((product) => (
              <ProductCard key={product._id} data={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryDetails;
