import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunkHandler } from "../../utils/createAsyncThunkHandler";
import { setError, setLoading } from "../../utils/commonReducers";

import subcategoryApi from "./subcategoryApi";
import SUBCATEGORY_ACTION_TYPES from "./subcategoryActionTypes";

export const fetchSubcategories = createAsyncThunkHandler(
  SUBCATEGORY_ACTION_TYPES,
  async (categoryId) => subcategoryApi.getSubcategoriesOfCategory(categoryId)
);

export const fetchSubcategoriesOfCategory = createAsyncThunkHandler(
  SUBCATEGORY_ACTION_TYPES.GET_BY_CATEGORY,
  async () => subcategoryApi.getAllSubcategories()
);

const initialState = {
  subcategories: [],
  loading: false,
  error: null,
  success: false,
};

const subcategorySlice = createSlice({
  name: "subcategory",
  initialState,
  reducers: {
    resetSubcategoryState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.currentSubcategory = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchSubcategories
      .addCase(fetchSubcategories.pending, setLoading)
      .addCase(fetchSubcategories.fulfilled, (state, action) => {
        state.loading = false;
        state.subcategories = action.payload;
      })
      .addCase(fetchSubcategories.rejected, setError)

      //  fetch  Subcategories Of Category
      .addCase(fetchSubcategoriesOfCategory.pending, setLoading)
      .addCase(fetchSubcategoriesOfCategory.fulfilled, (state, action) => {
        state.subcategories = action.payload;
      })
      .addCase(fetchSubcategoriesOfCategory.rejected, setError);
  },
});

export const { resetSubcategoryState } = subcategorySlice.actions;
export default subcategorySlice.reducer;
