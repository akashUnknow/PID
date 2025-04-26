import React, { useState } from "react";

// Map of component names to dynamic imports
const componentMap = {
  ICCID: React.lazy(() => import("../components/templet/ICCID")),
  IMSI: React.lazy(() => import("../components/templet/IMSI")),
};

const MainContent = () => {
  const [selectedComponent, setSelectedComponent] = useState("");

  const handleChange = (e) => {
    setSelectedComponent(e.target.value);
  };

  const SelectedComponent = selectedComponent
    ? componentMap[selectedComponent]
    : null;

  return (
    <div className="flex-1 p-6 bg-gray-100 overflow-auto">
      <div className="mb-4">
        <label className="block mb-1 font-stretch-normal">
          Select Component:
        </label>
        <select
          value={selectedComponent}
          onChange={handleChange}
          className="border p-1 rounded w-full max-w-48"
        >
          <option value="">-- Select --</option>
          {Object.keys(componentMap).map((compName) => (
            <option key={compName} value={compName} className="text-sm">
              {compName}
            </option>
          ))}
        </select>
      </div>

      <React.Suspense fallback={<div>Loading...</div>}>
        {SelectedComponent && <SelectedComponent />}
      </React.Suspense>
    </div>
  );
};

export default MainContent;
