import React, { useState } from "react";
import {
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
} from "lucide-react";
import Tabs from "../../components/ui/Tabs";

const categoryTabs = [
  { key: "phones", label: "Phones", icon: Smartphone },
  { key: "computers", label: "Computers", icon: Monitor },
  { key: "watches", label: "Smart Watches", icon: Watch },
  { key: "cameras", label: "Cameras", icon: Camera },
  { key: "headphones", label: "Headphones", icon: Headphones },
  { key: "gaming", label: "Gaming", icon: Gamepad2 },
  { key: "gaming2", label: "Console", icon: Gamepad2 },
  { key: "gaming3", label: "VR", icon: Gamepad2 },
  { key: "gaming4", label: "Arcade", icon: Gamepad2 },
  { key: "gaming5", label: "PC", icon: Gamepad2 },
];
const SubNav = () => {
  const [selected, setSelected] = useState("phones");

  return (
    <div className="subnav-container">
      <div className="subnav-wrapper ">
        <div className="whitespace-nowrap">
          <Tabs
            tabs={categoryTabs}
            selected={selected}
            onSelect={setSelected}
            minimal={true}
            size="sm"
            showBottomLine={false}
          />
        </div>
      </div>
    </div>
  );
};

export default SubNav;
