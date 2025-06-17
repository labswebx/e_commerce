import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunkHandler } from "../../utils/createAsyncThunkHandler";
import { setError, setLoading } from "../../utils/commonReducers";

import PRODUCT_ACTION_TYPES from "./productActionTypes";
import productsApi from "./productsApi";

// Thunks

// ALl products
export const fetchProducts = createAsyncThunkHandler(
  PRODUCT_ACTION_TYPES.FETCH_PRODUCTS,
  async ({ page = 1, limit = 5 }) =>
    await productsApi.getAllProducts(page, limit)
);

// fetch trending products
export const fetchTrendingProducts = createAsyncThunkHandler(
  PRODUCT_ACTION_TYPES.FETCH_TRENDING,
  async () => productsApi.getTrendingProducts()
);

//  fetch favourite products
export const fetchFavouriteProducts = createAsyncThunkHandler(
  PRODUCT_ACTION_TYPES.FETCH_FAVOURITE,
  async () => productsApi.getFavouriteProducts()
);

// fetch most recent order
export const fetchMostOrderedProducts = createAsyncThunkHandler(
  PRODUCT_ACTION_TYPES.FETCH_MOST_ORDERED,
  async () => productsApi.getMostOrderedProducts()
);

// fetch suggested products
export const fetchSuggestedProducts = createAsyncThunkHandler(
  PRODUCT_ACTION_TYPES.FETCH_SUGGESTED,
  async () => productsApi.getSuggestedProducts()
);

// specific products details
export const fetchProductDetails = createAsyncThunkHandler(
  PRODUCT_ACTION_TYPES.FETCH_PRODUCT_DETAILS,
  async (id) => productsApi.getProductDetails(id)
);

// 	Category-wise products
export const fetchCategoryProducts = createAsyncThunkHandler(
  PRODUCT_ACTION_TYPES.FETCH_CATEGORY,
  async (id) => productsApi.getCategoryProducts(id)
);

//create  review
export const createReview = createAsyncThunkHandler(
  PRODUCT_ACTION_TYPES.CREATE_REVIEW,
  async (data) => productsApi.createReview(data)
);

//  fetch review
export const fetchReviews = createAsyncThunkHandler(
  PRODUCT_ACTION_TYPES.FETCH_REVIEWS,
  async (id) => productsApi.getReviews(id)
);

const initialState = {
  // product lists
  products: [],
  resultsPerPage: 0,
  productsCount: 0,

  // Single product details
  product: null,
  productDetails: null,

  // Specific product collections

  trendingProducts: [],
  favouriteProducts: [],
  mostOrderedProducts: [],
  suggestedProducts: [],
  categoryProducts: [],
  adminProducts: [],
  searchResults: [],

  // reviews
  reviews: [],

  // general
  loading: true,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProductDetails: (state) => {
      state.productDetails = null;
      state.error = null;
    },

    clearError: (state) => {
      state.error = null;
    },
    clearProduct: (state) => {
      state.product = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // fetchProducts
      .addCase(fetchProducts.pending, setLoading)
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const isPaginated = action.meta.arg.page > 1;
        console.log(isPaginated, state.product);
        state.loading = false;
        state.products = action.payload.products || [];
        state.resultsPerPage = action.payload.resultsPerPage || 0;
        state.productsCount = action.payload.productsCount || 0;
        if (isPaginated) {
          state.products = [...state.products, ...action.payload.products];
        } else {
          state.products = action.payload.products;
        }
      })
      .addCase(fetchProducts.rejected, setError)

      // fetchTrendingProducts
      .addCase(fetchTrendingProducts.pending, setLoading)
      .addCase(fetchTrendingProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingProducts = action.payload.products || [];
        state.productsCount = action.payload.productsCount || 0;
      })
      .addCase(fetchTrendingProducts.rejected, setError)

      // fetchFavouriteProducts
      .addCase(fetchFavouriteProducts.pending, setLoading)
      .addCase(fetchFavouriteProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.favouriteProducts = action.payload.products || [];
        state.productsCount = action.payload.productsCount || 0;
      })
      .addCase(fetchFavouriteProducts.rejected, setError)

      // fetchMostOrderedProducts
      .addCase(fetchMostOrderedProducts.pending, setLoading)
      .addCase(fetchMostOrderedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.mostOrderedProducts = action.payload.products || [];
        state.productsCount = action.payload.productsCount || 0;
      })
      .addCase(fetchMostOrderedProducts.rejected, setError)

      // fetchSuggestedProducts
      .addCase(fetchSuggestedProducts.pending, setLoading)
      .addCase(fetchSuggestedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.suggestedProducts = action.payload.products || [];
        state.productsCount = action.payload.productsCount || 0;
      })
      .addCase(fetchSuggestedProducts.rejected, setError)

      // fetchProductDetails
      .addCase(fetchProductDetails.pending, setLoading)
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action.payload.product || null;
      })
      .addCase(fetchProductDetails.rejected, setError)

      // fetchCategoryProducts
      .addCase(fetchCategoryProducts.pending, setLoading)
      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryProducts = action.payload.products || [];
      })
      .addCase(fetchCategoryProducts.rejected, setError)

      // createReview
      .addCase(createReview.pending, setLoading)
      .addCase(createReview.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(createReview.rejected, setError)

      // fetchReviews
      .addCase(fetchReviews.pending, setLoading)
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload.reviews || [];
      })
      .addCase(fetchReviews.rejected, setError);
  },
});

export const { clearProductDetails, clearProduct, clearError } =
  productSlice.actions;
export default productSlice.reducer;
