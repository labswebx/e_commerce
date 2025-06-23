import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunkHandler } from "../../utils/createAsyncThunkHandler";
import { setError, setLoading } from "../../utils/commonReducers";
import WISHLIST_ACTION_TYPES from "./wishlistActionTypes";
import wishlistApi from "./wishlistApi";

// Thunks
export const createCollection = createAsyncThunkHandler(
  WISHLIST_ACTION_TYPES.CREATE_COLLECTION,
  async (data) => await wishlistApi.createCollection(data)
);

export const getCollections = createAsyncThunkHandler(
  WISHLIST_ACTION_TYPES.GET_COLLECTIONS,
  async () => await wishlistApi.getCollections()
);

export const getCollection = createAsyncThunkHandler(
  WISHLIST_ACTION_TYPES.GET_COLLECTION,
  async (id) => await wishlistApi.getCollection(id)
);

export const updateCollection = createAsyncThunkHandler(
  WISHLIST_ACTION_TYPES.UPDATE_COLLECTION,
  async ({ id, data }) => await wishlistApi.updateCollection(id, data)
);

export const deleteCollection = createAsyncThunkHandler(
  WISHLIST_ACTION_TYPES.DELETE_COLLECTION,
  async (id) => await wishlistApi.deleteCollection(id)
);

export const addToCollection = createAsyncThunkHandler(
  WISHLIST_ACTION_TYPES.ADD_TO_COLLECTION,
  async ({ collectionId, productId }) => {
    await wishlistApi.addToCollection(collectionId, productId);
  }
);

export const removeFromCollection = createAsyncThunkHandler(
  WISHLIST_ACTION_TYPES.REMOVE_FROM_COLLECTION,
  async ({ collectionId, productId }) =>
    await wishlistApi.removeFromCollection(collectionId, productId)
);

export const moveProduct = createAsyncThunkHandler(
  WISHLIST_ACTION_TYPES.MOVE_PRODUCT,
  async (data) => await wishlistApi.moveProduct(data)
);

export const shareCollection = createAsyncThunkHandler(
  WISHLIST_ACTION_TYPES.SHARE_COLLECTION,
  async (collectionId) => await wishlistApi.shareCollection(collectionId)
);

export const getSharedCollection = createAsyncThunkHandler(
  WISHLIST_ACTION_TYPES.GET_SHARED_COLLECTION,
  async (token) => await wishlistApi.getSharedCollection(token)
);

const initialState = {
  collections: [],
  currentCollection: null,
  sharedCollection: null,
  loading: false,
  error: null,
  shareLink: null,
  shareExpiresAt: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    clearWishlistError: (state) => {
      state.error = null;
    },
    clearCurrentCollection: (state) => {
      state.currentCollection = null;
    },
    clearSharedCollection: (state) => {
      state.sharedCollection = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Collection
      .addCase(createCollection.pending, setLoading)
      .addCase(createCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.collections.unshift(action.payload);
        state.currentCollection = action.payload;
      })
      .addCase(createCollection.rejected, setError)

      // Get Collections
      .addCase(getCollections.pending, setLoading)
      .addCase(getCollections.fulfilled, (state, action) => {
        state.loading = false;
        state.collections = action.payload;
      })
      .addCase(getCollections.rejected, setError)

      // Get Collection
      .addCase(getCollection.pending, setLoading)
      .addCase(getCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCollection = action.payload;
      })
      .addCase(getCollection.rejected, setError)

      // Update Collection
      .addCase(updateCollection.pending, setLoading)
      .addCase(updateCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.collections = state.collections.map((collection) =>
          collection._id === action.payload._id ? action.payload : collection
        );
        state.currentCollection = action.payload;
      })
      .addCase(updateCollection.rejected, setError)

      // Delete Collection
      .addCase(deleteCollection.pending, setLoading)
      .addCase(deleteCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.collections = state.collections.filter(
          (collection) => collection._id !== action.meta.arg
        );
      })
      .addCase(deleteCollection.rejected, setError)

      // Add to Collection
      .addCase(addToCollection.pending, setLoading)
      .addCase(addToCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCollection = action.payload;
      })
      .addCase(addToCollection.rejected, setError)

      // Remove from Collection
      .addCase(removeFromCollection.pending, setLoading)
      .addCase(removeFromCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCollection = action.payload;
        state.collections = state.collections.map((collection) =>
          collection._id === action.payload._id ? action.payload : collection
        );
      })
      .addCase(removeFromCollection.rejected, setError)

      // Move Product
      .addCase(moveProduct.pending, setLoading)
      .addCase(moveProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.collections = state.collections.map(
          (collection) =>
            action.payload.find((c) => c._id === collection._id) || collection
        );
      })
      .addCase(moveProduct.rejected, setError)

      // Share Collection
      .addCase(shareCollection.pending, setLoading)
      .addCase(shareCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.shareLink = action.payload.shareLink;
        state.shareExpiresAt = action.payload.expiresAt;
      })
      .addCase(shareCollection.rejected, setError)

      // Get Shared Collection
      .addCase(getSharedCollection.pending, setLoading)
      .addCase(getSharedCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.sharedCollection = action.payload;
      })
      .addCase(getSharedCollection.rejected, setError);
  },
});

export const {
  clearWishlistError,
  clearCurrentCollection,
  clearSharedCollection,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
