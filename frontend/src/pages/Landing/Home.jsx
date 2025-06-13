import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchMostOrderedProducts,
  fetchFavouriteProducts,
  fetchTrendingProducts,
} from "../../features/products/productsSlice";
import { fetchCategories } from "../../features/category/categorySlice";

import Card from "../../components/ui/Card";
import Carousel from "../../components/ui/Carousel";
import Tabs from "../../components/ui/Tabs";
import ProductGrid from "../product/list/ProductGrid";

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

  const { categories } = useSelector((state) => state.category);

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
      {/* Category Carousel */}
      <Carousel
        gap="gap-x-[1px]"
        title="Categories"
        items={categories}
        itemWidth="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px]"
        renderItem={(item) => <Card type="category" data={item} />}
      />

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
          <Card key={item._id} data={item} type="product" imageOnly />
        ))}
      </div>
    </div>
  );
};

export default Home;
