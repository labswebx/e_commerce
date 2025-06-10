import React from "react";
import classNames from "classnames";
import Icon from "./Icon";

const Tabs = ({
  tabs,
  selected,
  onSelect,
  disabledTabs = [],
  showBottomLine = true,
  box = false,
  size,
  minimal = false,
}) => {
  return (
    <div className="relative w-full overflow-x-auto scrollbar-hide scroll-smooth touch-auto">
      <div
        className={classNames("flex justify-between", {
          "space-x-4 border-b border-zinc-600": showBottomLine && !minimal,
          "gap-3": !showBottomLine || minimal,
        })}
      >
        {tabs.map((tab) => {
          const isSelected = selected === tab.key;
          const isDisabled = disabledTabs.includes(tab.key);

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
            <div
              key={tab.key}
              className={tabClass}
              onClick={() => !isDisabled && onSelect(tab.key)}
            >
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

              {/* Optional underline indicator */}
              {showBottomLine && isSelected && !minimal && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-sm"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
