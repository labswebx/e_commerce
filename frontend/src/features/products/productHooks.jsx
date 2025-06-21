// src/features/product/productHooks.js

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProducts,
  fetchTrendingProducts,
  fetchFavouriteProducts,
  fetchMostOrderedProducts,
  fetchSuggestedProducts,
  fetchProductDetails,
  fetchCategoryProducts,
  fetchReviews,
  createReview,
  clearProductDetails,
  clearError,
} from "./productsSlice";

// Combined hook for fetching all kinds of products & reviews
export const useProducts = ({ page = 1, limit, filters, sort } = {}) => {
  const dispatch = useDispatch();

  const {
    products,
    resultsPerPage,
    productsCount,
    trendingProducts,
    favouriteProducts,
    mostOrderedProducts,
    suggestedProducts,
    reviews,
    loading,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ page, limit, filters, sort }));
    dispatch(fetchTrendingProducts());
    dispatch(fetchFavouriteProducts());
    dispatch(fetchMostOrderedProducts());
    dispatch(fetchSuggestedProducts());
    dispatch((id) => fetchReviews(id));
  }, [dispatch, page, limit, filters, sort]);

  return {
    products,
    resultsPerPage,
    productsCount,
    trendingProducts,
    favouriteProducts,
    mostOrderedProducts,
    suggestedProducts,
    reviews,
    loading,
    error,
  };
};

// Hook for specific product details
export const useProductDetails = (id) => {
  const dispatch = useDispatch();
  const { productDetails, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }

    return () => {
      dispatch(clearProductDetails());
    };
  }, [dispatch, id]);

  return { productDetails, loading, error };
};

// Hook for creating a review
export const useCreateReview = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.products);

  const submitReview = (data) => {
    dispatch(createReview(data));
  };

  return { submitReview, loading, error };
};

// Hook to get category-specific products
export const useCategoryProducts = (categoryId) => {
  const dispatch = useDispatch();
  const { categoryProducts, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchCategoryProducts(categoryId));
    }
  }, [dispatch, categoryId]);

  return { categoryProducts, loading, error };
};

// Optional hook to clear product errors manually
export const useProductError = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.products.error);

  const clear = () => dispatch(clearError());

  return { error, clear };
};

// productHooks.js
export const useProductReviews = (productId) => {
  const dispatch = useDispatch();
  const { reviews, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (productId) {
      dispatch(fetchReviews({ id: productId }));
    }
  }, [dispatch, productId]);

  return { reviews, loading, error };
};

export const useSearchProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const search = (query) => {
    const filters = { search: query };

    dispatch(fetchProducts({ page: 1, limit: 5, filters }));
  };

  return { products, loading, error, search };
};
