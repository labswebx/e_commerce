import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCollection,
  getCollections,
  getCollection,
  updateCollection,
  deleteCollection,
  addToCollection,
  removeFromCollection,
  moveProduct,
  shareCollection,
  getSharedCollection,
  clearWishlistError,
  clearCurrentCollection,
  clearSharedCollection,
} from "./wishlistSlice";

// Hook for managing all collections
export const useWishlistCollections = () => {
  const dispatch = useDispatch();
  const { collections, loading, error } = useSelector(
    (state) => state.wishlist
  );

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  const handleCreateCollection = (data) => dispatch(createCollection(data));
  const handleDeleteCollection = (id) => dispatch(deleteCollection(id));
  const clearError = () => dispatch(clearWishlistError());
  const handleRemoveFromCollection = (collectionId, productId) =>
    dispatch(removeFromCollection({ collectionId, productId }));
  return {
    collections,
    loading,
    error,
    createCollection: handleCreateCollection,
    deleteCollection: handleDeleteCollection,
    removeFromCollection: handleRemoveFromCollection,
    clearError,
  };
};

// Hook for managing a single collection
export const useWishlistCollection = (collectionId) => {
  const dispatch = useDispatch();
  const { currentCollection, loading, error } = useSelector(
    (state) => state.wishlist
  );

  useEffect(() => {
    if (collectionId) {
      dispatch(getCollection(collectionId));
    }

    return () => {
      dispatch(clearCurrentCollection());
    };
  }, [dispatch, collectionId]);

  const handleUpdateCollection = (data) =>
    dispatch(updateCollection({ id: collectionId, data }));

  const handleAddProduct = (collectionId, productId) => {
    dispatch(addToCollection({ collectionId, productId }));
  };

  const handleRemoveProduct = (productId) =>
    dispatch(removeFromCollection({ collectionId, productId }));

  const clearError = () => dispatch(clearWishlistError());

  return {
    collection: currentCollection,
    loading,
    error,
    updateCollection: handleUpdateCollection,
    addProduct: handleAddProduct,
    removeProduct: handleRemoveProduct,
    clearError,
  };
};

// Hook for sharing collections
export const useShareWishlist = () => {
  const dispatch = useDispatch();
  const { shareLink, shareExpiresAt, loading, error } = useSelector(
    (state) => state.wishlist
  );

  const clearError = () => dispatch(clearWishlistError());

  return {
    shareLink,
    shareExpiresAt,
    loading,
    error,
    clearError,
  };
};

// Hook for moving products between collections
export const useMoveWishlistProduct = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.wishlist);

  const handleMove = (data) => dispatch(moveProduct(data));
  const clearError = () => dispatch(clearWishlistError());

  return {
    loading,
    error,
    moveProduct: handleMove,
    clearError,
  };
};
