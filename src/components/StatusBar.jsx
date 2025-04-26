// src/components/StatusBar.jsx
import React from "react";
import { useProject } from "../context/ProjectContext";

const StatusBar = () => {
  const { projectName } = useProject();

  return (
    <div className="bg-gray-200 p-3 border-t text-sm">
      <span className="font-semibold">Project Name:</span> {projectName}
    </div>
  );
};

export default StatusBar;
