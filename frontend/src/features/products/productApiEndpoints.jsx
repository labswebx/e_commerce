export const PRODUCTS_API_ENDPOINTS = {
  //   products related
  GET_PRODUCTS: "/products",
  GET_TRENDING_PRODUCTS: "/products/trending",
  GET_FAVOURITE_PRODUCTS: "/products/favourite",
  GET_MOST_ORDERED_PRODUCTS: "/products/mostOrdered",
  GET_SUGGESTED_PRODUCTS: "/products/suggested",
  GET_PRODUCT_DETAILS: (id) => `/product/${id}`,
  GET_CATEGORY_PRODUCTS: (id) => `/product/category/${id}`,

  // Reviews
  CREATE_REVIEW: "/review",
  GET_REVIEWS: "/reviews",
};
