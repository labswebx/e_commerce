import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Accordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container" role="presentation">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className="accordion-item" key={index}>
            <button
              id={`accordion-header-${index}`}
              aria-controls={`accordion-panel-${index}`}
              aria-expanded={isOpen}
              onClick={() => toggle(index)}
              className="accordion-button"
            >
              {item.title}
              <ChevronDown
                className={`accordion-icon ${
                  isOpen ? "accordion-icon-open" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div
                id={`accordion-panel-${index}`}
                role="region"
                aria-labelledby={`accordion-header-${index}`}
                className="accordion-panel"
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
