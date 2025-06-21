// LandingPage.jsx
import React, { useEffect } from "react";
import { useConstants } from "../../features/constants/constantsHooks";
import Button from "../../components/ui/Button";

export const Section = ({
  title,
  subtitle,
  buttonText,
  image,
  reverse = false,
  dark = false,
  backgroundColor = "#fff",
}) => {
  return (
    <section
      className={`flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-8 md:py-2 py-8 px-4 sm:px-1 lg:px-1 transition duration-300 ease-in-out ${
        reverse ? "lg:flex-row-reverse" : ""
      } ${dark ? "text-white" : "text-black"}`}
      style={{ backgroundColor }}
    >
      <div className="flex-1 flex justify-center items-center min-h-[200px]">
        {image ? (
          <>
            <img
              src={image.small || image}
              alt={title}
              className="max-w-[300px] w-full object-contain block lg:hidden"
            />
            <img
              src={image.large || image}
              alt={title}
              className="max-w-[400px] w-full object-contain hidden lg:block"
            />
          </>
        ) : (
          <span className="text-sm text-gray-600">Image Not Available</span>
        )}
      </div>
      <div className="flex-1 space-y-4 text-center lg:text-left">
        {title && <h2 className="text-3xl font-bold">{title}</h2>}
        {subtitle && <p className="text-lg opacity-70">{subtitle}</p>}
        {buttonText && (
          <Button label={buttonText} to="/shop" variant="outline" />
        )}
      </div>
    </section>
  );
};

const TwoGrid = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
    {items.map((item, index) => (
      <Section key={index} {...item} />
    ))}
  </div>
);

const LandingPage = () => {
  const { banners, fetchBanners, loading, error } = useConstants();

  useEffect(() => {
    fetchBanners();
  }, []);

  const bannerPairs = Array.isArray(banners)
    ? banners.flatMap((b) => b?.metadata?.banners || [])
    : [];

  const filteredBannerPairs = bannerPairs.filter(
    (img) => img?.url || img?.public_id
  );

  const bannerImages =
    filteredBannerPairs.length >= 2
      ? [
          {
            small: filteredBannerPairs[0].url,
            large: filteredBannerPairs[1].url,
            title: filteredBannerPairs[0].title || "Banner",
          },
        ]
      : [];
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center  justify-between  max-md:pt-20 max-sm:px-4 lg:px-40 bg-[#211C24] text-white">
        {/* LEFT TEXT SECTION */}
        <div className="flex flex-col justify-center flex-1 space-y-4 text-center sm:pt-12 max-sm:gap-4 lg:text-left ">
          <div>
            <p className="tracking-wider sm:tracking-tighter font-semibold  font-figtree leading-8  max-sm:text-[25] opacity-40">
              Pro.Beyond.
            </p>
            <h1 className="font-extralight text-7xl sm:text-6xl font-sfpro md:text-7xl">
              IPhone 14 <span className="font-bold">Pro</span>
            </h1>
            <p className="text-lg font-medium  text-[#909090]">
              Created to change everything for the better. For everyone.
            </p>
          </div>
          <div>
            <Button
              label="Shop Now"
              variant="outline"
              to="/shop"
              className="text-white border-white "
            />
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex justify-center flex-1 w-full lg:items-end">
          {filteredBannerPairs[0]?.url && (
            <img
              src={filteredBannerPairs[0].url}
              alt="iPhone Banner Desktop"
              className="w-[360px] object-contain "
            />
          )}
        </div>
      </section>

      {/* Loading/Error State */}
      {loading && (
        <p className="py-8 text-center text-gray-500">Loading banners...</p>
      )}
      {error && (
        <p className="py-8 text-center text-red-500">Failed to load banners.</p>
      )}

      {/* BANNER GRID */}
      {bannerImages.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-y-8">
            {/* Large Banner */}
            <Section
              title={bannerImages[3]?.title || "Playstation 5"}
              subtitle={filteredBannerPairs[3]?.subtitle}
              image={{
                small: filteredBannerPairs[3]?.url,
                large: filteredBannerPairs[2]?.url,
              }}
              backgroundColor="#fff"
            />

            {/* Two Side-by-Side Sections */}
            <TwoGrid
              items={[
                {
                  title: (
                    <>
                      Apple <strong>AirPods Max</strong>
                    </>
                  ),
                  subtitle: "Computational audio. Listen, it's powerful.",
                  backgroundColor: "#EDEDED",
                  image: {
                    small: filteredBannerPairs[5]?.url,
                    large: filteredBannerPairs[4]?.url,
                  },
                },
                {
                  title: (
                    <>
                      <span className="font-normal text-white">
                        Apple Vision
                      </span>{" "}
                      <strong className="text-white">Pro</strong>
                    </>
                  ),
                  subtitle: "Responsive layout ready",
                  backgroundColor: "#353535",
                  image: {
                    small: filteredBannerPairs[7]?.url || "/image3.png",

                    large: filteredBannerPairs[6]?.url || "/image3.png",
                  },
                  dark: true,
                },
              ]}
            />
          </div>

          {/* MacBook Banner */}
          <Section
            reverse
            backgroundColor="#EDEDED"
            title={<span className="font-normal">Macbook Air</span>}
            subtitle="The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display."
            image={{
              small: filteredBannerPairs[9]?.url,
              large: filteredBannerPairs[8]?.url,
            }}
            buttonText="Shop Now"
          />
        </div>
      )}
    </main>
  );
};

export default LandingPage;
