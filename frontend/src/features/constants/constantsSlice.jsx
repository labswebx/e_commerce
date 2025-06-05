import { createSlice } from "@reduxjs/toolkit";

import { setError, setLoading } from "../../utils/commonReducers";
import { createAsyncThunkHandler } from "../../utils/createAsyncThunkHandler";

import CONSTANTS_ACTION_TYPES from "./constantsActionTypes";
import constantsApi from "./constantsApi";

export const createConstant = createAsyncThunkHandler(
  CONSTANTS_ACTION_TYPES.CREATE,
  async () => constantsApi.createConstant()
);

export const updateBanners = createAsyncThunk(
  CONSTANTS_ACTION_TYPES.UPDATE_BANNER,
  async () => constantsApi.updateBanners()
);

export const getAllBanners = createAsyncThunkHandler(
  CONSTANTS_ACTION_TYPES.GET_ALL_BANNERS,
  async () => constantsApi.getAllBanners()
);

export const getStats = createAsyncThunkHandler(
  CONSTANTS_ACTION_TYPES.GET_STATS,
  async () => constantsApi.getStats()
);

const constantsSlice = createSlice({
  name: "constants",
  initialState: {
    banners: [],
    stats: null,
    loading: false,
    error: null,
    success: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getAllBanners
      .addCase(getAllBanners.pending, setLoading)
      .addCase(getAllBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.banners = action.payload;
      })
      .addCase(getAllBanners.rejected, setError)

      // createConstant
      .addCase(createConstant.pending, setLoading)
      .addCase(createConstant.fulfilled, (state, action) => {
        state.loading = false;
        state.success = "Constant created successfully";
      })
      .addCase(createConstant.rejected, setError)

      // updateBanners
      .addCase(updateBanners.pending, setLoading)
      .addCase(updateBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.success = "Banners updated successfully";
      })
      .addCase(updateBanners.rejected, setError)

      // getStats
      .addCase(getStats.pending, setLoading)
      .addCase(getStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload;
      })
      .addCase(getStats.rejected, setError);
  },
});

// export const {  } = constantsSlice.actions;
export default constantsSlice.reducer;
