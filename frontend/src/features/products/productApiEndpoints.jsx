import { apiVersion } from "../../config/api";

export const PRODUCTS_API_ENDPOINTS = {
  //   products related
  GET_PRODUCTS: `${apiVersion}/products`,
  GET_TRENDING_PRODUCTS: `${apiVersion}/products/trending`,
  GET_FAVOURITE_PRODUCTS: `${apiVersion}/products/favourite`,
  GET_MOST_ORDERED_PRODUCTS: `${apiVersion}/products/mostOrdered`,
  GET_SUGGESTED_PRODUCTS: `${apiVersion}/products/suggested`,
  GET_PRODUCT_DETAILS: (id) => `${apiVersion}/product/${id}`,
  GET_CATEGORY_PRODUCTS: (id) => `${apiVersion}/product/category/${id}`,

  CREATE_REVIEW: `${apiVersion}/review`,
  GET_REVIEWS: (productId) => `${apiVersion}/reviews?id=${productId}`,
};
