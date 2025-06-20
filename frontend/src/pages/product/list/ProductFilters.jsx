import React, { useState, useEffect } from "react";
import Accordion from "../../../components/ui/Accordion";
import InputField from "../../../components/ui/InputField";
import { ChevronLeft } from "lucide-react";

const ProductFilters = ({ filters, onChange, toggleSidebar }) => {
  const brands = [
    "Apple",
    "Samsung",
    "Xiaomi",
    "Poco",
    "OPPO",
    "Honor",
    "Motorola",
    "Nokia",
    "Realme",
  ];
  const memories = ["16GB", "32GB", "64GB", "128GB", "256GB", "512GB"];

  const [priceRange, setPriceRange] = useState({
    min: filters.price?.min || 0,
    max: filters.price?.max || 10000,
  });

  const [selectedBrands, setSelectedBrands] = useState(filters.brands || []);
  const [selectedMemories, setSelectedMemories] = useState(
    filters.memories || []
  );
  const [brandSearch, setBrandSearch] = useState("");
  const [memorySearch, setMemorySearch] = useState("");

  useEffect(() => {
    setPriceRange({
      min: filters.price?.min || 0,
      max: filters.price?.max || 10000,
    });
    setSelectedBrands(filters.brands || []);
    setSelectedMemories(filters.memories || []);
  }, [filters]);

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const newPrice = { ...priceRange, [name]: parseInt(value) || 0 };
    setPriceRange(newPrice);
    onChange({ ...filters, price: newPrice });
  };

  const handleBrandChange = (brand) => {
    const updated = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(updated);
    onChange({ ...filters, brands: updated });
  };

  const handleMemoryChange = (memory) => {
    const updated = selectedMemories.includes(memory)
      ? selectedMemories.filter((m) => m !== memory)
      : [...selectedMemories, memory];
    setSelectedMemories(updated);
    onChange({ ...filters, memories: updated });
  };

  const filterList = (list, searchTerm) =>
    list.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  console.log(priceRange);
  const items = [
    {
      title: "Price",
      content: (
        <div className="space-y-3">
          {/* Inputs */}
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4">
            <InputField
              type="number"
              name="min"
              value={priceRange.min}
              onChange={handlePriceChange}
              placeholder="Min"
              min={0}
              className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <InputField
              type="number"
              name="max"
              value={priceRange.max}
              onChange={handlePriceChange}
              placeholder="Max"
              min={0}
              className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </div>

          {/* Slider */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">{priceRange.min}</span>
            <InputField
              type="range"
              min={0}
              max={10000}
              value={priceRange.min}
              onChange={(e) =>
                handlePriceChange({
                  target: { name: "min", value: e.target.value },
                })
              }
              className="w-full accent-black"
            />
            <InputField
              type="range"
              min={0}
              max={10000}
              value={priceRange.max}
              onChange={(e) =>
                handlePriceChange({
                  target: { name: "max", value: e.target.value },
                })
              }
              className="w-full accent-black"
            />
            <span className="text-xs text-gray-500">{priceRange.max}</span>
          </div>
        </div>
      ),
    },
    {
      title: "Brand",
      content: (
        <>
          <InputField
            type="text"
            placeholder="Search"
            value={brandSearch}
            onChange={(e) => setBrandSearch(e.target.value)}
            className="w-full p-2 mb-2 text-sm bg-gray-100 border-none"
          />
          <div className="pr-1 space-y-2 overflow-y-auto max-h-40 scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-200">
            {filterList(brands, brandSearch).map((brand) => (
              <label key={brand} className="flex items-center text-sm">
                <InputField
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className="mr-2"
                />
                {brand}
              </label>
            ))}
          </div>
        </>
      ),
    },
    {
      title: "Built-in memory",
      content: (
        <>
          <InputField
            type="text"
            placeholder="Search"
            value={memorySearch}
            onChange={(e) => setMemorySearch(e.target.value)}
            className="w-full p-2 mb-2 text-sm bg-gray-100 border-none"
          />
          <div className="pr-1 space-y-2 overflow-y-auto max-h-40 scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-200">
            {filterList(memories, memorySearch).map((memory) => (
              <label key={memory} className="flex items-center text-sm">
                <InputField
                  type="checkbox"
                  checked={selectedMemories.includes(memory)}
                  onChange={() => handleMemoryChange(memory)}
                  className="mr-2"
                />
                {memory}
              </label>
            ))}
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="w-full h-full p-4 overflow-y-auto bg-white rounded-md md:p-6">
      <h3 className="flex gap-2 mt-3 mb-4 text-xl font-semibold text-gray-800">
        <ChevronLeft onClick={toggleSidebar} />
        Filters
      </h3>
      <Accordion
        items={items}
        classNames="bg-white border border-gray-200 rounded-xl shadow-sm"
      />
      <div className="flex justify-between gap-4 mt-6 md:hidden">
        <button
          onClick={() => {
            setPriceRange({ min: 0, max: 10000 });
            setSelectedBrands([]);
            setSelectedMemories([]);
            setBrandSearch("");
            setMemorySearch("");
            onChange({});
          }}
          className="w-1/2 px-4 py-2 text-sm font-semibold text-gray-700 transition bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
        >
          Reset Filters
        </button>

        <button
          onClick={() => {
            const appliedFilters = {
              price: priceRange,
              brands: selectedBrands,
              memories: selectedMemories,
            };
            onChange(appliedFilters);
          }}
          className="w-1/2 px-4 py-2 text-sm font-semibold text-white transition bg-black rounded hover:bg-gray-800"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default ProductFilters;
