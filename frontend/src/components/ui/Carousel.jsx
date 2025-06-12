import React from "react";
import classNames from "classnames";

const Carousel = ({
  title,
  items = [],
  renderItem,
  itemWidth = "w-[250px]",
  gap = "gap-x-4",
}) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="py-6 ">
      <div
        className={classNames(
          "flex overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory"
          // "scrollbar-hide",
          // gap
        )}
      >
        {items.map((item, index) => (
          <div
            key={item._id || index}
            className={classNames(" snap-start shrink-0", itemWidth)}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
