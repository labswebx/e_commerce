import React from "react";
import classNames from "classnames";
import Icon from "./Icon";
// import "./tabs.css"; // import your css here

const Tabs = ({
  tabs,
  selected,
  onSelect,
  disabledTabs = [],
  showBottomLine = true,
  size,
}) => {
  return (
    <div className="relative w-full overflow-x-auto scrollbar-hide scroll-smooth touch-auto">
      <div
        className={classNames("flex", {
          "space-x-4 border-b border-gray-200": showBottomLine,
          "gap-3": !showBottomLine,
        })}
      >
        {tabs.map((tab) => {
          const isSelected = selected === tab.key;
          const isDisabled = disabledTabs.includes(tab.key);

          const tabClass = classNames("tab-base", {
            // underline mode
            "tab-underline": showBottomLine,
            "tab-underline-selected": showBottomLine && isSelected,
            "tab-underline-unselected":
              showBottomLine && !isSelected && !isDisabled,

            // box mode
            "tab-box": !showBottomLine,
            "tab-box-selected": !showBottomLine && isSelected,
            "tab-box-unselected": !showBottomLine && !isSelected && !isDisabled,

            // disabled
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
                  <Icon icon={tab.icon} size={size} />
                </span>
              )}
              <span>{tab.label}</span>

              {/* Bottom line (only in underline mode) */}
              {showBottomLine && isSelected && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-sm"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
