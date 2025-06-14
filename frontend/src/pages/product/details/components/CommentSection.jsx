import { Star } from "lucide-react";
import React, { useState } from "react";
import DescriptionWithToggle from "./DescriptionWithToggle";
import Button from "../../../../components/ui/Button";

const CommentSection = ({ reviews = [] }) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    if (expanded) {
      setVisibleCount(3);
      setExpanded(false);
    } else {
      setVisibleCount(reviews.length);
      setExpanded(true);
    }
  };

  const visibleReviews = reviews.slice(0, visibleCount);

  return (
    <div className="max-w-3xl px-4 py-6 mx-auto space-y-8">
      {visibleReviews.map((review, idx) => (
        <div key={idx} className="flex pb-6 space-x-4 border-b">
          <img
            src={
              review.avatar ||
              `https://i.pravatar.cc/150?u=${review.user || idx}`
            }
            alt={review.name}
            className="object-cover w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{review.name}</h4>
              <span className="text-sm text-gray-500">
                {review.date || "Recently"}
              </span>
            </div>
            <div className="flex items-center my-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }
                    fill={i < review.rating ? "currentColor" : "none"}
                  />
                ))}
            </div>
            <DescriptionWithToggle description={review.comment} />
          </div>
        </div>
      ))}

      {reviews.length > 3 && (
        <div className="mt-4 text-center">
          <Button
            onClick={handleToggle}
            variant="ghost"
            label={expanded ? "View Less ↑" : "View More ↓"}
          ></Button>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
