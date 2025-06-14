// App.jsx or LandingPage.jsx
import React, { useEffect } from "react";
import { useConstants } from "../../features/constants/constantsHooks";
import Button from "../../components/ui/Button";

const Section = ({
  title,
  subtitle,
  buttonText,
  image,
  reverse = false,
  dark = false,
  backgroundColor,
}) => {
  return (
    <section
      className={`flex flex-col-reverse lg:flex-row items-center justify-between gap-0  shadow-md max:md-my-8 transition duration-300 ease-in-out bg-[${backgroundColor}] 
     bg-gray-500 text-black
       ${reverse ? "lg:flex-row-reverse" : ""}`}
      style={{
        backgroundColor,
      }}
    >
      <div className="flex-1 flex justify-center items-center rounded-xl min-h-[200px]">
        {image ? (
          <>
            {/* Image for small devices */}
            <img
              src={image.small || image}
              alt={title}
              className="max-w-[300px] w-full object-cover block lg:hidden"
            />
            {/* Image for large devices */}
            <img
              src={image.large || image}
              alt={title}
              className="max-w-[300px] w-full object-contain hidden lg:block"
            />
          </>
        ) : (
          <span className="text-sm text-gray-600">Image Not Available</span>
        )}
      </div>

      <div className="flex-1 p-2 space-y-4 text-center lg:text-left">
        {title && (
          <div className="text-3xl font-bold text-black drop-shadow-md">
            {title}
          </div>
        )}

        {subtitle && <div className="text-lg text-[#909090]">{subtitle}</div>}
        {buttonText && <Button label={buttonText} variant="outline"></Button>}
      </div>
    </section>
  );
};

const TwoGrid = ({ items }) => (
  <div className="grid grid-cols-1 gap-0 my-0 md:grid-cols-2">
    {items.map((item, i) => (
      <Section key={i} {...item} />
    ))}
  </div>
);

const LandingPage = () => {
  const { banners, fetchBanners, loading, error } = useConstants();
  useEffect(() => {
    fetchBanners();
  }, []);

  const bannerImages = Array.isArray(banners?.banners)
    ? banners.banners
        .flatMap((b) => b?.metadata?.banners || [])
        .filter((img) => img?.url || img?.public_id)
    : [];


  return (
    <main className="max-w-full ">
      {/* Hero Section */}
      <section
        className="flex flex-col lg:flex-row items-center justify-between gap-0 py-20 px-8 bg-[#0f0f10] text-white shadow-lg w-full "
  
      >
        <div className="flex-1 space-y-4 text-center lg:text-left">
          <p className="text-sm tracking-wide uppercase opacity-40">
            Pro.Beyond.
          </p>
          <h1 className=" sm:text-7xl md:text-8xl">
            iPhone 14 <span className="font-bold">Pro</span>
          </h1>
          <p className="text-lg text-gray-300 opacity-40">
            Created to change everything for the better. For everyone.
          </p>
  
          <Button
            label="Shop Now"
            variant="outline"
            className="text-white border-white"
          />
        </div>
        <div className="flex justify-center flex-1 overflow-hidden">
          <img
            src="/image1.png"
            alt="iPhone 14 Pro"
        
            className="w-[200px] h-full object-cover transform -translate-x-1/4"
          />
        </div>
      </section>

      {/* Loading/Error */}
      {loading && <p className="text-center max:md-my-8">Loading banners...</p>}
      {error && (
        <p className="my-8 text-center text-red-500">Failed to load banners.</p>
      )}

  
      {bannerImages.length > 0 && (
        <div className="grid grid-cols-1 gap-0 max:md-my-8 lg:grid-cols-2">
          <div className="flex flex-col gap-0">
            {/* First Large Banner */}
            <Section
              title="Playstation 5"
              subtitle={
                <>
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                  will redefine your PlayStation experience.
                </>
              }
          
              image={{
                small: "/image02.png",
                large: "/image2.png",
              }}
              backgroundColor="#fff"
            />

            {/* Two Small Grid Banners */}
            <TwoGrid
              items={[
                {
                  title: (
                    <>
                      <span className="font-normal"> Apple AirPods </span>
                      <span className="font-bold">Max</span>
                    </>
                  ),

                  subtitle: "Computational audio. Listen, it's powerful ",
                  backgroundColor: "#EDEDED",
                  image: {
                    small: "/image04.png",
                    large: "/image4.png",
                  },
                },
                {
                  title: (
                    <div className="text-white">
                      <span className="font-normal"> Apple Vision</span> Pro
                    </div>
                  ),
                  backgroundColor: "#353535",
                  subtitle: "Responsive layout ready",
                  image: {
                    small:
                      "/image03.png" ||
                      bannerImages[1]?.smallUrl ||
                      bannerImages[1]?.url,
                    large:
                      "/image3.png" ||
                      bannerImages[1]?.largeUrl ||
                      bannerImages[1]?.url,
                  },
                  dark: true,
                },
              ]}
            />
          </div>
        
          <Section
            backgroundColor="#EDEDED"
            title={
              <>
                <span className="font-normal">Macbook</span>
              </>
            }
            subtitle="Air The new 15‑inch
                MacBook Air makes room for more of what you love with a spacious
                Liquid Retina display."
            image={{
              small: "/image05.png",
              large: "/image5.png",
            }}
            reverse
            buttonText="Shop Now"
          />
        </div>
      )}
    </main>
  );
};

export default LandingPage;
