export const WISHLIST_API_ENDPOINTS = {
  // Collections
  CREATE_COLLECTION: "/wishlist/collections",
  GET_COLLECTIONS: "/wishlist/collections",
  GET_COLLECTION: (id) => `/wishlist/collections/${id}`,
  UPDATE_COLLECTION: (id) => `/wishlist/collections/${id}`,
  DELETE_COLLECTION: (id) => `/wishlist/collections/${id}`,

  // Products
  ADD_TO_COLLECTION: (id) => `/wishlist/${id}/add`,
  REMOVE_FROM_COLLECTION: (collectionId, productId) =>
    `/wishlist/${collectionId}/remove/${productId}`,
  MOVE_PRODUCT: "/wishlist/move-product",

  // Sharing
  SHARE_COLLECTION: (id) => `/wishlist/collections/${id}/share`,
  GET_SHARED_COLLECTION: (token) => `/wishlist/shared/${token}`,
};
