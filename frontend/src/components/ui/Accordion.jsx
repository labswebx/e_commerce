import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Accordion = ({ items = [], classNames: extraClassNames = "" }) => {
  const [openIndices, setOpenIndices] = useState([]);

  const toggle = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={classNames("accordion-container", extraClassNames)}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div key={index} className="accordion-item">
            <button
              onClick={() => toggle(index)}
              className="accordion-button"
              aria-expanded={isOpen}
              aria-controls={`panel-${index}`}
              id={`accordion-${index}`}
            >
              {item.title}
              <ChevronDown
                className={classNames("accordion-icon", {
                  "accordion-icon-open": isOpen,
                })}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div
                id={`panel-${index}`}
                className="accordion-panel"
                role="region"
                aria-labelledby={`accordion-${index}`}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
