import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import classNames from "classnames";

const SelectBox = ({
  options = [],
  isMulti = false,
  placeholder = "Select...",
  onChange,
  value = isMulti ? [] : null,
  size = "md",
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

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const handleSelect = (option) => {
    if (isMulti) {
      const isAlreadySelected = selected.some((v) => v.value === option.value);
      const newSelection = isAlreadySelected
        ? selected.filter((v) => v.value !== option.value)
        : [...selected, option];
      setSelected(newSelection);
      onChange?.(newSelection);
    } else {
      setSelected(option);
      onChange?.(option);
      closeDropdown();
    }
  };

  const removeItem = (item) => {
    const newSelection = selected.filter((v) => v.value !== item.value);
    setSelected(newSelection);
    onChange?.(newSelection);
  };

  const isSelected = (option) =>
    isMulti
      ? selected.some((v) => v.value === option.value)
      : selected?.value === option.value;

      const filteredOptions = options.filter(
        (opt) =>
          typeof opt?.label === "string" &&
          opt.label.toLowerCase().includes(search.toLowerCase())
      );
      

  return (
    <div className="selectbox-container" ref={ref}>
      <div className="selectbox-input-wrapper" onClick={toggleDropdown}>
        <div className="flex flex-wrap gap-1">
          {isMulti ? (
            selected.length > 0 ? (
              selected.map((item, idx) => (
                <span
                  key={idx}
                  className="selectbox-multi-selected-item"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.label}
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
              {selected?.label || placeholder}
            </span>
          )}
        </div>
        <ChevronDown
          className={classNames("selectbox-chevron", {
            "rotate-180": isOpen,
          })}
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
              className={classNames(
                "selectbox-option",
                isSelected(option) && "selectbox-option-selected"
              )}
              onClick={() => handleSelect(option)}
            >
              <span>{option.label}</span>
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
