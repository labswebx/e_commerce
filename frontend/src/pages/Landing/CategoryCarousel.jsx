import { useCategory } from "../../features/category/categoryHooks";
export const CategoryCarousel = () => {
  const { categories, loading, error } = useCategory();

  if (loading) {
    return (
      <div className="w-full px-4 py-6">
        <h2 className="mb-4 text-base font-semibold">Browse Categories</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-[100px] bg-gray-200 animate-pulse rounded-xl shadow-md flex items-center justify-center text-center"
            >
              <div className="w-8 h-8 bg-gray-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error)
    return (
      <p className="text-center text-red-500">Error loading categories.</p>
    );

  const bgColors = [
    "bg-[#E6EFE4]",
    "bg-[#E6EFE4]",
    "bg-[#ECE4EF]",
    "bg-[#EFE4E4]",
  ];

  return (
    <div className="w-full">
      <h2 className="mb-4 text-base font-semibold">Browse Categories</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categories.map((category, index) => (
          <div
            key={category._id}
            className={`h-[100px] ${
              bgColors[index % bgColors.length]
            } rounded-xl shadow-md flex flex-col items-center justify-center px-4 py-3 text-center border hover:shadow-lg transition-all`}
          >
            <img
              src={category?.image?.url}
              alt={category.name}
              className="object-contain w-12 h-12 mb-1 filter brightness-0 saturate-0"
              loading="lazy"
            />
            <span className="text-[10px] font-medium text-gray-800">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
