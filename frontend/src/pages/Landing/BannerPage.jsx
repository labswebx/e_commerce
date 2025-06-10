import { useState } from "react";
import Banner from "./Banner";
const initialBannerData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Banner 1",
    liked: false,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Banner 2",
    liked: false,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Banner 3",
    liked: false,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Banner 4",
    liked: false,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Banner 5",
    liked: false,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Banner 6",
    liked: false,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Banner 4",
    liked: false,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Banner 5",
    liked: false,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Banner 6",
    liked: false,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Banner 4",
    liked: false,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Banner 5",
    liked: false,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Banner 6",
    liked: false,
  },
];

const BannerPage = () => {
  const [banners, setBanners] = useState(initialBannerData);
  console.log(banners);

  return (
    <section className="container px-4 py-8 mx-auto space-y-4">
      {/* Row 1: Full Width */}
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 h-[28rem]">
          <Banner src={banners[0].src} alt={banners[0].alt} />
        </div>
      </div>

      {/* Row 2: 4 images left, 1 image right */}
      <div className="grid grid-cols-6 gap-4">
        {/* Left: 4 images in 2x2 grid */}
        <div className="grid grid-cols-2 col-span-4 gap-4">
          {banners.slice(1, 5).map((item) => (
            <div key={item.id} className="h-48">
              <Banner src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>

        {/* Right: 1 tall image */}
        <div className="h-full col-span-2">
          <div className="h-full">
            <Banner src={banners[5].src} alt={banners[5].alt} />
          </div>
        </div>
      </div>

      {/* Row 3: 2 images */}
      <div className="grid grid-cols-6 gap-4">
        {banners.slice(6, 8).map((item) => (
          <div key={item.id} className="h-64 col-span-3">
            <Banner src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerPage;
