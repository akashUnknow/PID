// src/components/Sidebar.jsx
import React, { useState } from "react";
import { useProject } from "../context/ProjectContext";

const Sidebar = () => {
  const [showInput, setShowInput] = useState(false);
  const { persoList, setPersoList } = useProject();

  const addField = () => {
    setShowInput(true);
  };
  const handelPersoListItemClick = (e) => {
    console.log(e.target.innerText);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setPersoList([...persoList, e.target.value.trim()]);
      setShowInput(false);
      e.target.value = ""; // clear input
    }
  };

  return (
    <div className="w-64 bg-gray-100 p-4 border-r">
      <h2 className="text-lg font-semibold mb-4">Project</h2>

      <label
        className="block text-sm font-medium mb-1 cursor-pointer text-blue-600 hover:underline"
        onClick={addField}
      >
        Perso Name
      </label>

      {showInput && (
        <input
          type="text"
          placeholder="Enter perso name"
          onKeyDown={handleKeyPress}
          className="w-full px-3 py-2 border rounded mt-2"
        />
      )}

      <div className="mt-4">
        {persoList.map((name, index) => (
          <div
            key={index}
            className="text-sm text-gray-800 mt-1 cursor-pointer hover:text-blue-600"
            onClick={handelPersoListItemClick}
          >
            {"> " + name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
