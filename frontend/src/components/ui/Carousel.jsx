// components/ui/Carousel.jsx
import { useRef, useState, useEffect } from "react";

const Carousel = ({
  items = [],
  renderItem,
  showDots = true,
  itemWidth = "min-w-[250px]",
  itemHeight = "",
  className = "",
  gap = "4",
  snap = true,
}) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const children = Array.from(container.children);

    if (!children.length) return;

    const child = children[0];
    const childWidth = child.getBoundingClientRect().width;
    const scrollLeft = container.scrollLeft;

    const gapValue = parseInt(gap.split("-")[1] || "4") * 4;
    const fullItemWidth = childWidth + gapValue;

    const index = Math.round(scrollLeft / fullItemWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={containerRef}
        className={`flex w-full  overflow-x-auto px-2 scrollbar-hide gap-${gap} ${
          snap ? "snap-x snap-mandatory" : ""
        }`}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`${itemWidth} ${itemHeight} flex-shrink-0 ${
              snap ? "snap-start" : ""
            }`}
          >
            {renderItem(item, idx)}
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      {showDots && (
        <div className="flex justify-center mt-4 space-x-2 lg:hidden">
          {items.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? "bg-black" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
