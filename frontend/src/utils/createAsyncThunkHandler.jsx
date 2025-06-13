import { createAsyncThunk } from "@reduxjs/toolkit";
import getErrorMessage from "./getErrorMessage";

export const createAsyncThunkHandler = (type, apiFn) =>
  createAsyncThunk(type, async (args, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
      const response = await apiFn(args, dispatch);

      return response;
    } catch (error) {
      const message = getErrorMessage(error);

      return rejectWithValue(message);
    }
  });
