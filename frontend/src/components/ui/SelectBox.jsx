import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";

const SelectBox = ({
  options = [],
  isMulti = false,
  placeholder = "Select...",
  onChange,
  value = isMulti ? [] : null,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const [search, setSearch] = useState("");
  const ref = useRef();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    if (isMulti) {
      const isAlreadySelected = selected.includes(option);
      const newSelection = isAlreadySelected
        ? selected.filter((v) => v !== option)
        : [...selected, option];
      setSelected(newSelection);
      onChange?.(newSelection);
    } else {
      setSelected(option);
      onChange?.(option);
      closeDropdown();
    }
  };

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  const removeItem = (item) => {
    const newSelection = selected.filter((v) => v !== item);
    setSelected(newSelection);
    onChange?.(newSelection);
  };

  const isSelected = (option) =>
    isMulti ? selected.includes(option) : selected === option;

  return (
    <div className="selectbox-container" ref={ref}>
      <div className="selectbox-input-wrapper" onClick={toggleDropdown}>
        <div className="flex flex-wrap gap-1 text-sm">
          {isMulti ? (
            selected.length > 0 ? (
              selected.map((item, idx) => (
                <span
                  key={idx}
                  className="selectbox-multi-selected-item"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>{item}</span>
                  <X
                    size={12}
                    className="selectbox-multi-selected-remove"
                    onClick={() => removeItem(item)}
                  />
                </span>
              ))
            ) : (
              <span className="selectbox-placeholder">{placeholder}</span>
            )
          ) : (
            <span className={selected ? "" : "selectbox-placeholder"}>
              {selected || placeholder}
            </span>
          )}
        </div>
        <ChevronDown
          className={`selectbox-chevron ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="selectbox-dropdown">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="selectbox-search-input"
          />
          {filteredOptions.map((option, idx) => (
            <div
              key={idx}
              className={`selectbox-option ${
                isSelected(option) ? "selectbox-option-selected" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              <span>{option}</span>
              {isSelected(option) && <span>✔</span>}
            </div>
          ))}
          {filteredOptions.length === 0 && (
            <div className="selectbox-no-options">No options found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectBox;
