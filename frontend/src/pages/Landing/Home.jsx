import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchMostOrderedProducts,
  fetchFavouriteProducts,
  fetchTrendingProducts,
} from "../../features/products/productsSlice";
import { fetchCategories } from "../../features/category/categorySlice";
import { getCollections } from "../../features/wishlist/wishlistSlice";
import { useConstants } from "../../features/constants/constantsHooks";
import { ProductCard } from "../../components/ui/Card";
import Tabs from "../../components/ui/Tabs";
import Carousel from "../../components/ui/Carousel";
import ProductGrid from "../product/list/ProductGrid";
import LandingPage, { Section } from "./LandingSection";
import CategoryCarousel from "./CategoryCarousel";
import Button from "../../components/ui/Button";

const Home = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("regular");
  const [page, setPage] = useState(1);
  const limit = 50;
  const {
    banners,
    fetchBanners,
    loading: bannersLoading,
    error,
  } = useConstants();

  // Fetch all initial data
  useEffect(() => {
    fetchBanners();
    dispatch(fetchProducts({ page, limit }));
    dispatch(fetchTrendingProducts());
    dispatch(fetchFavouriteProducts());
    dispatch(fetchMostOrderedProducts());
    dispatch(fetchCategories());
    dispatch(getCollections());
  }, [dispatch, page]);

  // Banner handling
  const bannerPairs = Array.isArray(banners)
    ? banners.flatMap((b) => b?.metadata?.banners || [])
    : [];
  const filteredBannerPairs = bannerPairs.filter(
    (img) => img?.url || img?.public_id
  );

  // Get data from Redux store
  const {
    products,
    trendingProducts,
    favouriteProducts,
    mostOrderedProducts,
    loading: productsLoading,
  } = useSelector((state) => state.products);

  const { items: wishlistItems } = useSelector((state) => state.wishlist);

  // Tab configuration
  const tabOptions = [
    { key: "regular", label: "New Arrival" },
    { key: "mostOrdered", label: "Best Sellers" },
    { key: "favourite", label: "Featured Products" },
  ];

  // Get products based on active tab
  const getProductsByTab = () => {
    switch (activeTab) {
      case "favourite":
        return favouriteProducts;
      case "mostOrdered":
        return mostOrderedProducts;
      case "regular":
      default:
        return products;
    }
  };

  // Visible products for carousel
  const visibleProducts = products.slice(0, 4);

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <LandingPage />

      {/* Main Content */}
      <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
        {/* Category Carousel */}
        <CategoryCarousel title="Browse Categories" length="6" />

        {/* Product Tabs Section */}
        <section className="space-y-6">
          <div className="md:w-[450px]">
            <Tabs
              tabs={tabOptions}
              selected={activeTab}
              onSelect={(key) => setActiveTab(key)}
              showBottomLine
              minimal={false}
            />
          </div>

          <ProductGrid
            products={getProductsByTab().slice(0, 8)}
            loading={productsLoading}
            title={`${
              tabOptions.find((t) => t.key === activeTab)?.label
            } Products`}
            grid="grid sm:gap-4 gap-4 grid-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center"
          />
        </section>
      </div>

      {/* Featured Products Carousel */}
      <Carousel
        gap="gap-0"
        items={visibleProducts}
        className="sm:min-w-[320px] md:min-w-[400px] p-0"
        renderItem={(item) => (
          <ProductCard data={item} variant="feature" className="p-8" />
        )}
      />

      {/* Discount Section */}
      <div className="px-4 mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Discounts up to -50%</h2>
          <ProductGrid
            btnText="Buy Now"
            
            products={trendingProducts}
            loading={productsLoading}
            title="Trending Products"
            grid="grid gap-4 grid-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center"
          />
        </section>
      </div>

      {/* Promotional Banner */}
      <div className="relative w-full my-8 md:h-96">
        <img
          src={filteredBannerPairs[10]?.url}
          alt="Summer Sale"
          className="object-contain w-full h-full md:hidden"
        />
        <img
          src={filteredBannerPairs[11]?.url}
          alt="Summer Sale"
          className="hidden object-cover w-full h-full md:block"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black sm:p-6 bg-opacity-20 md:p-12">
          <div className="max-w-md text-center text-white">
            <h2 className="mb-2 text-2xl font-bold md:text-4xl">
              Big Summer Sale
            </h2>
            <p className="mb-4 text-sm md:text-base">
              Comfortable living and vitality in abundance. For your
              convenience.
            </p>
            <Button
              label="Shop Now"
              to="/shop"
              className="px-6 py-2 text-sm text-gray-900 transition-colors bg-white rounded-md hover:bg-gray-100 md:text-base"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
