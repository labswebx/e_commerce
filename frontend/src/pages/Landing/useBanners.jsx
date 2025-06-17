// hooks/useBanners.js
import { useEffect } from "react";
import { useConstants } from "../../features/constants/constantsHooks";

export const useBanners = () => {
  const { banners, fetchBanners, loading, error } = useConstants();

  useEffect(() => {
    fetchBanners();
  }, [fetchBanners]);

  const bannerPairs = Array.isArray(banners)
    ? banners.flatMap((b) => b?.metadata?.banners || [])
    : [];

  const filteredBannerPairs = bannerPairs.filter(
    (img) => img?.url || img?.public_id
  );

  return {
    banners: filteredBannerPairs,
    loading,
    error,
  };
};
