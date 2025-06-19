import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunkHandler } from "../../utils/createAsyncThunkHandler";
import { setError, setLoading } from "../../utils/commonReducers";

import CATEGORY_ACTION_TYPES from "./categoryActionTypes";
import categoryApi from "./categoryApi";

export const fetchCategories = createAsyncThunkHandler(
  CATEGORY_ACTION_TYPES.FETCH_ALL,
  async () => categoryApi.getAllCategories()
);

export const fetchCategoryDetails = createAsyncThunkHandler(
  CATEGORY_ACTION_TYPES.FETCH_DETAILS,
  async (id) => categoryApi.getCategoryDetails(id)
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    categoryCount: 0,
    currentCategory: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetCategoryState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.currentCategory = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, setLoading)
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.categories;
        state.categoryCount = action.payload.categoryCount;
        state.success = action.payload.success;
      })
      .addCase(fetchCategories.rejected, setError)
      // featch categroy details
      .addCase(fetchCategoryDetails.pending, setLoading)
      .addCase(fetchCategoryDetails.fulfilled, (state, action) => {
        state.currentCategory = action.payload.category;
      })
      .addCase(fetchCategoryDetails.rejected, setError);
  },
});

export const { resetCategoryState } = categorySlice.actions;
export default categorySlice.reducer;
