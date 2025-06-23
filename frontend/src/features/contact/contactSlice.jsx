import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunkHandler } from "../../utils/createAsyncThunkHandler";
import contactApi from "./contactApi";
import CONTACT_ACTION_TYPES from "./contactActionTypes";
import { setError, setLoading } from "../../utils/commonReducers";

//  Async Thunk: Send contact message
export const sendContactMessage = createAsyncThunkHandler(
  CONTACT_ACTION_TYPES.SEND,
  async (data) => contactApi.sendContactMessage(data)
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    clearContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactMessage.pending, setLoading)
      .addCase(sendContactMessage.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(sendContactMessage.rejected, setError);
  },
});

export const { clearContactState } = contactSlice.actions;
export default contactSlice.reducer;
