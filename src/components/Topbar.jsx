import React from "react";

const Topbar = ({ projectName, setProjectName }) => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Project:</h1>
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        className="border p-2 rounded w-1/3"
        placeholder="Enter Project Name"
      />
    </div>
  );
};

export default Topbar;
