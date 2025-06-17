import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchTrendingProducts,
  fetchFavouriteProducts,
  fetchMostOrderedProducts,
} from "../../../features/products/productsSlice";
import ProductGrid from "./ProductGrid";

const ProductList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const limit = 50;

  const {
    products,
    productsCount,
    loading: productsLoading,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchTrendingProducts());
    dispatch(fetchFavouriteProducts());
    dispatch(fetchMostOrderedProducts());
  }, [dispatch]);

  // Fetch next page automatically until all products are loaded
  useEffect(() => {
    if (products.length < productsCount) {
      dispatch(fetchProducts({ page, limit }));
    }
  }, [dispatch, page, products.length, productsCount]);

  useEffect(() => {
    if (products.length < productsCount) {
      const interval = setTimeout(() => {
        setPage((prev) => prev + 1);
      }, 500); // slight delay to avoid flooding
      return () => clearTimeout(interval);
    }
  }, [products.length, productsCount]);

  return (
    <div className="px-4 mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
      <h2 className="text-xl font-semibold">All Products</h2>
      <ProductGrid
        products={products}
        loading={productsLoading}
        title="All Products"
      />
    </div>
  );
};

export default ProductList;
