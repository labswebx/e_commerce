import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchMostOrderedProducts,
  fetchFavouriteProducts,
  fetchTrendingProducts,
} from "../../features/products/productsSlice";
import { fetchCategories } from "../../features/category/categorySlice";

import Card, { ProductCard } from "../../components/ui/Card";
import Tabs from "../../components/ui/Tabs";
import ProductGrid from "../product/list/ProductGrid";
import { useCategory } from "../../features/category/categoryHooks";
import LandingPage from "./LandingSection";

const CategoryCarousel = () => {
  const { categories, loading, error } = useCategory();

  if (loading) return <p className="text-center">Loading categories...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">Error loading categories.</p>
    );

  // Light pastel background color classes
  const bgColors = [
    "bg-[#E6EFE4]",
    "bg-[#E6EFE4]",
    "bg-[#ECE4EF]",
    "bg-[#EFE4E4]",
  ];
  return (
    <div className="w-full px-4 py-6 max-sm:mt-[5.31rem]">
      <h2 className="mb-4 text-base font-semibold">Browse Categories</h2>

      <div className="flex gap-4 pb-2 overflow-x-auto scrollbar-hide">
        {categories.map((category, index) => (
          <div
            key={category._id}
            className={`min-w-[100px] h-[100px] ${
              bgColors[index % bgColors.length]
            } rounded-xl shadow-md flex flex-col items-center justify-center px-3 py-2 text-center border hover:shadow-lg transition-all`}
          >
            {/* <img
              src={category?.images[0]?.public_url }
              alt={category.name}
              className="object-contain w-8 h-8 mb-1"
              loading="lazy"
            /> */}
            <span className="text-[10px] font-medium text-gray-800">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("regular");

  // Fetch state
  const {
    products,
    trendingProducts,
    favouriteProducts,
    mostOrderedProducts,
    loading: productsLoading = true,
  } = useSelector((state) => state.products);

  const { categories, loading, error } = useCategory();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchTrendingProducts());
    dispatch(fetchFavouriteProducts());
    dispatch(fetchMostOrderedProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const tabOptions = [
    { key: "regular", label: "Regular" },
    { key: "trending", label: "Trending" },
    { key: "favourite", label: "Favourite" },
    { key: "mostOrdered", label: "Most Ordered" },
  ];

  const visibleProducts = products.slice(0, 4);
  const getProductsByTab = () => {
    switch (activeTab) {
      case "trending":
        return trendingProducts;
      case "favourite":
        return favouriteProducts;
      case "mostOrdered":
        return mostOrderedProducts;
      case "regular":
      default:
        return products;
    }
  };

  return (
    <div className="space-y-8 ">
      {/* banner page */}
      <LandingPage />
      {/* iske saare elemnt ko cneter me karo  */}
      <div className="">
        {/* Category Carousel */}
        <CategoryCarousel />

        {/* Product Tabs */}
        <div className="md:w-[450px]">
          <Tabs
            tabs={tabOptions}
            selected={activeTab}
            onSelect={(key) => setActiveTab(key)}
            showBottomLine
            minimal={false}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold"></h2>
          <ProductGrid
            products={getProductsByTab()}
            // loading={productsLoading}
            title={`${
              tabOptions.find((t) => t.key === activeTab)?.label
            } Products`}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {visibleProducts.map((item) => (
            <div key={item._id} className="m-2">
              <ProductCard
                data={item}
                // onAddToCart={handleAdd}
                variant="compact"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
