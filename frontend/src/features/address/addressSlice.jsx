import { createSlice } from "@reduxjs/toolkit";

import { setError, setLoading } from "../../utils/commonReducers";
import { createAsyncThunkHandler } from "../../utils/createAsyncThunkHandler";

import addressActionTypes from "./addressActionTypes";
import addressApi from "./addressApi";
import { initialAddressState } from "./addressConstants";

export const createAddress = createAsyncThunkHandler(
  addressActionTypes.CREATE,
  async (data) => addressApi.createAddress(data)
);

export const updateAddress = createAsyncThunkHandler(
  addressActionTypes.UPDATE,
  async ({ id, data }) => addressApi.updateAddress(id, data)
);

export const deleteAddress = createAsyncThunkHandler(
  addressActionTypes.DELETE,
  async (id) => addressApi.deleteAddress(id)
);


export const getMyAddresses = createAsyncThunkHandler(
  addressActionTypes.GET_MY,
  async (query = "") => addressApi.getMyAddresses(query)

);

export const getAddressDetails = createAsyncThunkHandler(
  addressActionTypes.GET_DETAILS,
  async (id) => addressApi.getAddressDetails(id)
);

const addressSlice = createSlice({
  name: "address",
  initialState: initialAddressState,
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAddress.pending, setLoading)
      .addCase(createAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.address = action.payload.address;
      })
      .addCase(createAddress.rejected, setError)

      // update adddress
      .addCase(updateAddress.pending, setLoading)
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.address = action.payload.address;
      })
      .addCase(updateAddress.rejected, setError)

      // delete
      .addCase(deleteAddress.pending, setLoading)
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.address = state.addresses.filter(
          (a) => a._id !== action.meta.arg
        );
        state.message = action.payload.message;
      })
      .addCase(deleteAddress.rejected, setError)

      // get my
      .addCase(getMyAddresses.pending, setLoading)
      .addCase(getMyAddresses.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.addresses = action.payload.addresses;
        state.count = action.payload.count;
        state.resultsPerPage = action.payload.resultsPerPage;
        state.totalCount = action.payload.totalCount;
        state.totalPages=action.payload.totalPages
        state.currentPage=action.payload.currentPage
      })
      .addCase(getMyAddresses.rejected, setError)

      // get details
      .addCase(getAddressDetails.pending, setLoading)
      .addCase(getAddressDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.address = action.payload.address;
      })
      .addCase(getAddressDetails.rejected, setError);
  },
});

// export const {  } = addressSlice.actions;
export default addressSlice.reducer;
