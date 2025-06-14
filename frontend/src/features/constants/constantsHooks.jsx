import { useDispatch, useSelector } from "react-redux";
import {
  createConstant,
  updateBanners,
  getAllBanners,
  getStats,
} from "./constantsSlice";

export const useConstants = () => {
  const dispatch = useDispatch();

  const { banners, stats, loading, error, success } = useSelector(
    (state) => state.constants
  );

  const fetchBanners = () => dispatch(getAllBanners());
  const fetchStats = () => dispatch(getStats());
  const updateBannerList = (payload) => dispatch(updateBanners(payload));
  const createNewConstant = (payload) => dispatch(createConstant(payload));

  return {
    banners,
    stats,
    loading,
    error,
    success,
    fetchBanners,
    fetchStats,
    updateBannerList,
    createNewConstant,
  };
};
