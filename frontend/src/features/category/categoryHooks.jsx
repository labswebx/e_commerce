import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchCategories,
  fetchCategoryDetails,
  resetCategoryState,
} from "./categorySlice";

export const useCategory = () => {
  const dispatch = useDispatch();
  const {
    categories,
    categoryCount,
    currentCategory,
    loading,
    error,
    success,
  } = useSelector((state) => state.category);

  const getCategoryById = (id) => {
    if (id) dispatch(fetchCategoryDetails(id));
  };

  const refetchCategories = () => dispatch(fetchCategories());

  const reset = () => dispatch(resetCategoryState());

  useEffect(() => {
    refetchCategories();
  }, [dispatch]);

  return {
    // Data
    categories,
    categoryCount,
    currentCategory,
    loading,
    error,
    success,

    // Actions
    refetchCategories,
    getCategoryById,
    reset,
  };
};
