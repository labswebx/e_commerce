import React from "react";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <ol className="breadcrumb-list" role="list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={index}
              className="breadcrumb-item"
              aria-current={isLast ? "page" : undefined}
            >
              {index > 0 && (
                <ChevronRight
                  className="breadcrumb-separator"
                  aria-hidden="true"
                  focusable="false"
                />
              )}
              {item.href && !isLast ? (
                <a href={item.href} className="breadcrumb-link">
                  {item.label}
                </a>
              ) : (
                <span className="breadcrumb-current">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

