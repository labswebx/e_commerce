import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProducts,
  fetchMostOrderedProducts,
  fetchFavouriteProducts,
  fetchTrendingProducts,
} from "../../features/products/productsSlice";
import { fetchCategories } from "../../features/category/categorySlice";
import { useConstants } from "../../features/constants/constantsHooks";

import { ProductCard } from "../../components/ui/Card";
import Tabs from "../../components/ui/Tabs";
import Carousel from "../../components/ui/Carousel";

import ProductGrid from "../product/list/ProductGrid";

import LandingPage, { Section } from "./LandingSection";
import CategoryCarousel from "./CategoryCarousel";

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

  // Fetch product and category data from store
  const {
    products,
    productsCount,
    trendingProducts,
    favouriteProducts,
    mostOrderedProducts,
    loading: productsLoading,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ page, limit }));
    dispatch(fetchTrendingProducts());
    dispatch(fetchFavouriteProducts());
    dispatch(fetchMostOrderedProducts());
    dispatch(fetchCategories());
  }, [dispatch, page]);

  // Tab options for filtering product types
  const tabOptions = [
    { key: "regular", label: "New Arrival" },
    { key: "mostOrdered", label: "Best Sellers" },
    { key: "favourite", label: "Featured Products" },
  ];

  const visibleProducts = products.slice(0, 4);

  // Product display logic
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
      {/* Centered content with max width */}
      <div className="px-4 mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8 ">
        {/* Category Carousel */}
        <CategoryCarousel title="Browse Categories" length="6" />
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
            products={getProductsByTab().slice(0, 8)}
            loading={productsLoading}
            title={`${
              tabOptions.find((t) => t.key === activeTab)?.label
            } Products`}
          />
        </div>
      </div>

      {/* carousel */}
      <Carousel
        gap="gap-0"
        items={visibleProducts}
        className="lg:w-screen sm:min-w-[320px] md:min-w-[400px] p-0"
        renderItem={(item) => (
          <ProductCard data={item} variant="feature" className="p-8" />
        )}
      />
      {/* discount */}
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
          src={filteredBannerPairs[10]?.url}
          alt="Summer Sale"
          className="object-contain w-full h-full md:hidden"
        />

        {/* Desktop Image (shown on medium screens and up) */}
        <img
          src={filteredBannerPairs[11]?.url}
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
