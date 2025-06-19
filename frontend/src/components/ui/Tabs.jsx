import React from "react";
import classNames from "classnames";
import Icon from "./Icon";
import { useNavigate } from "react-router-dom";

const Tabs = ({
  tabs,
  selected,
  onSelect,
  disabledTabs = [],
  showBottomLine = true,
  box = false,
  size,
  minimal = false,
  navigateUrl,
}) => {
  const navigate = useNavigate();
  const handleClick = (isDisabled, tab) => {
    if (!isDisabled) {
      onSelect(tab.key);
      if (navigateUrl) {
        navigate(`${navigateUrl}/${tab.key}`);
      }
    }
  };

  return (
    <div className="relative w-full overflow-x-auto scrollbar-hide scroll-smooth touch-auto">
      <div
        className={classNames("flex justify-between", {
          "space-x-4 border-b border-zinc-600": showBottomLine && !minimal,
          "gap-1": !showBottomLine || minimal,
        })}
      >
        {tabs.map((tab, index) => {
          const isSelected = selected === tab.key;
          const isDisabled = disabledTabs.includes(tab.key);
          const isLast = index === tabs.length - 1;
          const tabClass = classNames("tab-base", {
            minimal: minimal,
            selected: minimal && isSelected,

            // Underline mode
            "tab-underline": showBottomLine && !minimal,
            "tab-underline-selected": showBottomLine && isSelected && !minimal,
            "tab-underline-unselected":
              showBottomLine && !isSelected && !isDisabled && !minimal,

            // Box mode
            "tab-box": !showBottomLine && !minimal,
            "tab-box-selected": !showBottomLine && !minimal && isSelected,
            "tab-box-unselected":
              !showBottomLine && !minimal && !isSelected && !isDisabled,

            // Disabled
            "tab-disabled": isDisabled,
            "cursor-pointer": !isDisabled,
          });

          return (
            <React.Fragment key={tab.key}>
              <div
                className={tabClass}
                onClick={() => handleClick(isDisabled, tab)}
              >
                {tab.image && (
                  <img
                    src={tab.image}
                    alt={tab.label}
                    className="object-contain w-6 h-6 mr-1 filter invert brightness-[0.66] contrast-[0.75]"
                  />
                )}
                {tab.icon && (
                  <span className="text-lg">
                    <Icon
                      icon={tab.icon}
                      size={size}
                      color={
                        isDisabled
                          ? "gray"
                          : minimal
                          ? isSelected
                            ? "white"
                            : "#d4d4d8"
                          : isSelected
                          ? "white"
                          : "#a1a1aa"
                      }
                      className="opacity-50"
                    />
                  </span>
                )}
                <span>{tab.label}</span>
                {showBottomLine && isSelected && !minimal && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-sm"></div>
                )}
              </div>

              {/* ✅ Divider if image and not last */}
              {tab.image && !isLast && (
                <div className="self-center w-px h-6 bg-zinc-600"></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
