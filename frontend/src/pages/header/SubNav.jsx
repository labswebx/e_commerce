import React, { useState, useEffect } from "react";
import {
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
} from "lucide-react";
import Tabs from "../../components/ui/Tabs";
import { useCategory } from "../../features/category/categoryHooks";
// import { useCategory } from "../../features/category/categoryHooks";

const SubNav = () => {
  const { categories, loading } = useCategory();
  const [selected, setSelected] = useState(null);
  const [categoryTabs, setCategoryTabs] = useState([]);

  useEffect(() => {
    if (!loading && categories.length) {
      const mapped = categories.map((cat, index) => {
        // Convert category name to a simple key
        const key = cat._id;
        return {
          key,
          label: cat.name,
          image: cat?.image?.url,
        };
      });

      setCategoryTabs(mapped);
      setSelected(mapped[0]?.key || null);
    }
  }, [categories, loading]);

  return (
    <div className="subnav-container">
      <div className="subnav-wrapper">
        <div className="whitespace-nowrap">
          {loading ? (
            <p className="text-sm text-gray-500">Loading categories...</p>
          ) : (
            <Tabs
              tabs={categoryTabs}
              selected={selected}
              onSelect={setSelected}
              minimal={true}
              size="sm"
              showBottomLine={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SubNav;
