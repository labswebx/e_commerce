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
import LandingPage, { Section } from "./LandingSection";
import Loader from "../../components/ui/Loader";
// import { Section } from "lucide-react";
import { useConstants } from "../../features/constants/constantsHooks";
import Carousel from "../../components/ui/Carousel";

const CategoryCarousel = () => {
  const { categories, loading, error } = useCategory();

  if (loading) {
    return (
      <div className="w-full px-4 py-6 ">
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
    <div className="w-ful lg:pb-20 md:pb-10">
      <h2 className="mb-4 text-base font-semibold">Browse Categories</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categories.slice(0, 6).map((category, index) => (
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

const Home = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("regular");
  const [page, setPage] = useState(1);
  const limit = 50;
  const { banners, fetchBanners, loading, error } = useConstants();

  useEffect(() => {
    fetchBanners();
  }, []);

  const bannerPairs = Array.isArray(banners)
    ? banners.flatMap((b) => b?.metadata?.banners || [])
    : [];

  const filteredBannerPairs = bannerPairs.filter(
    (img) => img?.url || img?.public_id
  );

  const bannerImages =
    filteredBannerPairs.length >= 2
      ? [
          {
            small: filteredBannerPairs[0].url,
            large: filteredBannerPairs[1].url,
            title: filteredBannerPairs[0].title || "Banner",
          },
        ]
      : [];
  // Fetch state
  const {
    products,
    productsCount,
    trendingProducts,
    favouriteProducts,
    mostOrderedProducts,
    loading: productsLoading,
  } = useSelector((state) => state.products);
  console.log(products);
  console.log(trendingProducts);
  useEffect(() => {
    dispatch(fetchProducts({ page, limit }));
    dispatch(fetchTrendingProducts());
    dispatch(fetchFavouriteProducts());
    dispatch(fetchMostOrderedProducts());
    dispatch(fetchCategories());
  }, [dispatch, page]);

  const canLoadMore = products.length < productsCount;
  const tabOptions = [
    { key: "regular", label: "New Arrival" },
    { key: "mostOrdered", label: "Best Sellers" },
    { key: "favourite", label: "Featured Products" },
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
  const handleLoadMore = () => {
    if (canLoadMore) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="space-y-8 ">
      {/* banner page */}
      <LandingPage />
      {/* Centered content with max width */}
      <div className="px-4 mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8 ">
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
        {/* Product Grid */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold"></h2>
          <ProductGrid
            products={getProductsByTab()}
            loading={productsLoading}
            title={`${
              tabOptions.find((t) => t.key === activeTab)?.label
            } Products`}
          />
        </div>
        {activeTab === "regular" && canLoadMore && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* carousel */}
      <Carousel
        gap="gap-0"
        items={visibleProducts}
        className="lg:w-screen"
        itemWidth="min-w-[320px]"
        renderItem={(item) => <ProductCard data={item} variant="feature" />}
      />
      <div className="px-4 mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8 ">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Discounts up to -50%</h2>
          <ProductGrid
            products={trendingProducts}
            loading={productsLoading}
            title={`Trending Products`}
          />
        </div>
      </div>

      {/* bottom banner */}
      <div className="relative w-full my-8 md:h-96 ">
        {/* Mobile Image (shown on small screens) */}
        <img
          src={filteredBannerPairs[10]?.url} // Replace with your mobile image path
          alt="Summer Sale"
          className="object-contain w-full h-full md:hidden"
        />

        {/* Desktop Image (shown on medium screens and up) */}
        <img
          src={filteredBannerPairs[11]?.url} // Replace with your desktop image path
          alt="Summer Sale"
          className="hidden object-cover w-full h-full md:block"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black sm:p-6 bg-opacity-20 md:p-12">
          <div className="max-w-md text-center text-white">
            <span className="block mb-1 text-sm font-medium">
              8 euros, vacances
            </span>
            <h2 className="mb-2 text-2xl font-bold md:text-4xl">
              Big Summer Sale
            </h2>
            <p className="mb-4 text-sm md:text-base">
              Commodo fames vitae vitae leo mauris in. Eu consequat.
            </p>
            <button className="px-6 py-2 text-sm text-gray-900 transition-colors bg-white rounded-md hover:bg-gray-100 md:text-base">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
