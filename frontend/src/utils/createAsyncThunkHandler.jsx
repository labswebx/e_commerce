import { createAsyncThunk } from "@reduxjs/toolkit";
import getErrorMessage from "./getErrorMessage";

export const createAsyncThunkHandler = (type, apiFn) =>
  createAsyncThunk(type, async (args, thunkAPI) => {
    try {
      const response = await apiFn(args);
      return response;
    } catch (error) {
      const message = getErrorMessage(error);
      return thunkAPI.rejectWithValue(message);
    }
  });
