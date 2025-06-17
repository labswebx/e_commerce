import { Section } from "./Section";

// components/sections/TwoGrid.jsx
export const TwoGrid = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
    {items.map((item, index) => (
      <Section key={index} {...item} />
    ))}
  </div>
);
